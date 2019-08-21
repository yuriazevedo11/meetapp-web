import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

import { loadMeetupsRequest } from '~/store/modules/meetups/actions';

import { Container, Scrollbar } from './styles';

export default function Dashboard() {
  const loading = useSelector(state => state.meetups.loading);
  const meetups = useSelector(state => state.meetups.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMeetupsRequest());
  }, [dispatch]);

  function MeetupList() {
    if (loading) {
      return (
        <div>
          <FaSpinner color="#fff" size={32} />
        </div>
      );
    }

    if (meetups && meetups.length > 0) {
      return (
        <ul>
          {meetups.map(meetup => (
            <li key={meetup.id} past={meetup.past.toString()}>
              <Link to={`/details/${meetup.id}`}>
                <strong>{meetup.title}</strong>
                <span>{meetup.formattedDate}</span>
                <MdChevronRight color="#fff" size={30} />
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    return <h2>Você não está organizando nenhum meetup no momento {':('}</h2>;
  }

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="/new">
          <MdAddCircleOutline color="#fff" size={20} />
          Novo meetup
        </Link>
      </header>

      <Scrollbar>
        <MeetupList />
      </Scrollbar>
    </Container>
  );
}
