import React from 'react';
import { useSelector } from 'react-redux';
import {
  MdEdit,
  MdDeleteForever,
  MdLocationOn,
  MdDateRange,
} from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import api from '~/services/api';

import history from '~/routes/history';

import { Container, Content, Scrollbar } from './styles';

export default function Details({ match }) {
  const { id } = match.params;
  const meetup = useSelector(state =>
    state.meetups.data.find(data => data.id === Number(id))
  );

  if (!meetup) {
    history.push('/dashboard');
    return null;
  }

  async function handleCancel() {
    try {
      await api.delete(`meetups/${id}`);

      toast.success('Meetup cancelado com sucesso!');

      history.push('/dashboard');
    } catch (err) {
      toast.error('Erro ao cancelar meetup');
    }
  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <button
          type="button"
          className="edit"
          onClick={() => history.push(`/edit/${id}`)}
          disabled={meetup.past}
        >
          <MdEdit color="#fff" size={20} />
          Editar
        </button>
        <button
          type="button"
          className="cancel"
          onClick={handleCancel}
          disabled={meetup.past}
        >
          <MdDeleteForever color="#fff" size={20} />
          Cancelar
        </button>
      </header>

      <Content>
        <div className="banner">
          <img src={meetup.banner.url} alt="Banner" />
        </div>

        <Scrollbar>
          <strong>{meetup.description}</strong>
        </Scrollbar>

        <time>
          <MdDateRange color="#999" size={20} />
          {meetup.formattedDate}
        </time>

        <address>
          <MdLocationOn color="#999" size={20} />
          <a
            href={`https://www.google.com/maps/search/${meetup.location}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {meetup.location}
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
