import React, { useState, useRef, useEffect } from 'react';
import { MdCameraAlt } from 'react-icons/md';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput({ name }) {
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'dataset.file',
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview ? (
          <img src={preview} alt="Banner" />
        ) : (
          <>
            <MdCameraAlt color="#eee" size={48} />
            <span>Selecionar imagem</span>
          </>
        )}

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
      {error && <span>{error}</span>}
    </Container>
  );
}

BannerInput.propTypes = {
  name: PropTypes.string.isRequired,
};
