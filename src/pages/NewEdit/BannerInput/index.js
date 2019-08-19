import React from 'react';
import { MdCameraAlt } from 'react-icons/md';

import { Container } from './styles';

export default function BannerInput() {
  const preview = '';

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    console.tron.log('FILE');
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview ? (
          <img src={preview} alt="Banner" />
        ) : (
          <>
            <MdCameraAlt color="#fff" size={48} />
            <span>Selecionar imagem</span>
          </>
        )}

        <input
          type="file"
          id="banner"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
