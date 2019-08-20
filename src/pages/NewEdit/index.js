import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';

import {
  createMeetupRequest,
  editMeetupRequest,
} from '~/store/modules/meetups/actions';

import history from '~/routes/history';

import { Container } from './styles';

const schema = Yup.object().shape({
  banner: Yup.number().required('A imagem é obrigatória'),
  title: Yup.string().required('A título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.date().required('A data é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
});

export default function NewEdit({ match }) {
  const { id } = match.params;
  const meetup = useSelector(state =>
    state.meetups.data.find(data => data.id === Number(id))
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (match.path !== '/new' && !meetup) {
      history.push('/new');
    }
  }, [match.path, meetup]);

  function handleSubmit(data) {
    const { banner: image_id } = data;

    if (match.path === '/new') {
      dispatch(createMeetupRequest({ image_id, ...data }));
    } else {
      dispatch(editMeetupRequest({ id, image_id, ...data }));
    }
  }

  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner" />

        <Input name="title" placeholder="Título do meetup" />
        <Input
          name="description"
          placeholder="Descrição completa"
          maxLength={1000}
          multiline
        />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline color="#fff" size={20} />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}

NewEdit.propTypes = PropTypes.shape({
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}).isRequired;
