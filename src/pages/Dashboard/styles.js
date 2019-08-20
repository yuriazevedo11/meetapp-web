import styled from 'styled-components';
import PerfectSrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 1040px;
  margin: 40px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: #fff;
      font-size: 30px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0 15px;
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

export const Scrollbar = styled(PerfectSrollbar)`
  max-height: calc(80vh - 40px);
  margin-top: 20px;

  ul {
    list-style: none;

    li a {
      padding: 15px 25px;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      strong {
        color: #fff;
        font-size: 16px;
        margin-right: auto;
      }

      span {
        color: #999;
        margin-right: 25px;
      }
    }

    li + li {
      margin-top: 10px;
    }
  }
`;
