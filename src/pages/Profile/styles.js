import styled from 'styled-components';
import { lighten } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin-bottom: 10px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 10px 0 0;
      height: 44px;
      background: ${colors.primaryBtn};
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.3s;

      svg {
        margin-right: 5px;
      }

      &:hover {
        background: ${lighten(0.03, colors.primaryBtn)};
      }
    }
  }
`;
