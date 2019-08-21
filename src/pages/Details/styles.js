import styled from 'styled-components';
import { lighten, darken } from 'polished';
import PerfectSrollbar from 'react-perfect-scrollbar';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 1100px;
  padding: 0 30px;
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

    button.edit,
    button.cancel {
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

    button.edit {
      background: ${colors.secondaryBtn};

      &:hover {
        background: ${darken(0.07, colors.secondaryBtn)};
      }
    }

    button.cancel {
      margin-left: 15px;
      background: ${colors.primaryBtn};

      &:hover {
        background: ${lighten(0.03, colors.primaryBtn)};
      }
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const Content = styled.div`
  margin-top: 30px;
  font-size: 16px;

  div.banner {
    background: rgba(0, 0, 0, 0.1);
    height: 250px;
  }

  img {
    border-radius: 4px;
    max-width: 1040px;
    max-height: 250px;
  }

  strong {
    color: #fff;
    line-height: 24px;
    display: block;
    font-weight: 400;
    white-space: pre-line;
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

export const Scrollbar = styled(PerfectSrollbar)`
  /* SCROLLBAR ALWAYS VISIBLE */
  .ps__rail-x,
  .ps__rail-y {
    opacity: 0.6;
  }

  max-height: 125px;
  margin: 25px 0;
`;
