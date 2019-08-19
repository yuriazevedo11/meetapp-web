import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Scrollbar } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="/dashboard">
          <button type="button">
            <MdAddCircleOutline color="#fff" size={20} />
            Novo meetup
          </button>
        </Link>
      </header>

      <Scrollbar>
        <ul>
          <li>
            <Link to="/dashboard">
              <strong>Meetup de React Native</strong>
              <span>24 de junho, às 20h</span>
              <MdChevronRight color="#fff" size={30} />
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <strong>Meetup de React Native</strong>
              <span>24 de junho, às 20h</span>
              <MdChevronRight color="#fff" size={30} />
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <strong>Meetup de React Native</strong>
              <span>24 de junho, às 20h</span>
              <MdChevronRight color="#fff" size={30} />
            </Link>
          </li>
        </ul>
      </Scrollbar>
    </Container>
  );
}
