import styled from 'styled-components';
import { lighten } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 1100px;
  padding: 0 30px;
  margin: 40px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      width: 100%;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    .react-datepicker-wrapper,
    .react-datepicker__input-container {
      display: block;
    }

    textarea {
      resize: vertical;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      min-height: 100px;
      max-height: 200px;
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    > span {
      color: ${colors.error};
      align-self: flex-start;
      margin: 0 0 10px 10px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button[type='submit'] {
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: flex-end;

      margin: 10px 0 0;
      height: 44px;
      width: 170px;
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
