import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';

import { Container } from './styles';

const schema = Yup.object().shape({
  image_id: Yup.number().required('O imagem é obrigatória'),
  title: Yup.string().required('A título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.date().required('A data é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
});

export default function NewEdit() {
  function handleSubmit(data) {
    console.tron.log('NEW MEETUP', data);
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="image_id" />

        <Input name="title" placeholder="Título do meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
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
