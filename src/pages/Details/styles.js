import styled from 'styled-components';
import { lighten, darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 1040px;
  margin: 40px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    h1 {
      color: #fff;
      font-size: 30px;
      margin-right: auto;
    }

    a,
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0 15px;
      height: 44px;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.3s;

      svg {
        margin-right: 5px;
      }
    }

    a {
      background: ${colors.secondaryBtn};

      &:hover {
        background: ${darken(0.07, colors.secondaryBtn)};
      }
    }

    button {
      margin-left: 15px;
      background: ${colors.primaryBtn};

      &:hover {
        background: ${lighten(0.03, colors.primaryBtn)};
      }
    }
  }
`;

export const Content = styled.div`
  margin-top: 30px;
  font-size: 16px;

  div {
    background: rgba(0, 0, 0, 0.1);
    height: 300px;
  }

  img {
    border-radius: 4px;
    max-width: 1000px;
    max-height: 300px;
  }

  strong {
    color: #fff;
    margin: 25px 0;
    line-height: 30px;
    display: block;
    font-weight: 400;
  }

  time,
  address {
    color: #999;
    display: inline-flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  address {
    margin-left: 30px;
    font-style: normal;
  }

  address a {
    color: #999;
  }
`;
