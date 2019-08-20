import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const username = useSelector(state => state.user.profile.name);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{username}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
