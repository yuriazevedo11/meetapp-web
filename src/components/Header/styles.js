import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: #19161f;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1040px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav img {
    height: 30px;
    width: 30px;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    margin-left: 15px;
    border: none;
    border-radius: 4px;
    width: 60px;
    height: 35px;
    color: #fff;
    background: #d44059;
    transition: background 0.3s;

    &:hover {
      background: ${lighten(0.03, '#d44059')};
    }
  }
`;
