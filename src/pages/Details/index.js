import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdEdit,
  MdDeleteForever,
  MdLocationOn,
  MdDateRange,
} from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function Details({ match }) {
  const { id } = match.params;

  function handleCancel() {
    console.tron.log('CANCEL');
  }

  return (
    <Container>
      <header>
        <h1>Meetup de React Native</h1>
        <Link to={`/edit/${id}`}>
          <MdEdit color="#fff" size={20} />
          Editar
        </Link>
        <button type="button" onClick={handleCancel}>
          <MdDeleteForever color="#fff" size={20} />
          Cancelar
        </button>
      </header>

      <Content>
        <div>
          <img src="https://wallpapercave.com/wp/wp2555066.jpg" alt="Banner" />
        </div>

        <strong>
          O Meetup de React Native é um evento que reúne a comunidade de
          desenvolvimento mobile utilizando React a fim de compartilhar
          conhecimento. Todos são convidados. Caso queira participar como
          palestrante do meetup envie um e-mail para
          organizacao@meetuprn.com.br.
        </strong>
        <time>
          <MdDateRange color="#999" size={20} />
          24 de Junho, às 20h
        </time>
        <address>
          <MdLocationOn color="#999" size={20} />
          <a
            href={`https://www.google.com/maps/search/${'Rua Guilherme Gembala, 260'}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Rua Guilherme Gembala, 260
          </a>
        </address>
      </Content>
    </Container>
  );
}

Details.propTypes = PropTypes.shape({
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}).isRequired;
