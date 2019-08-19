import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  height: 250px;
  border-radius: 4px;

  label {
    width: 100%;
    height: 100%;
    text-align: center;
    cursor: pointer;
    opacity: 0.7;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:hover {
      opacity: 1;
    }

    span {
      font-size: 20px;
      margin-top: 5px;
      color: #fff;
    }

    /* TODO: Preview */
    /* img {
      height: 100%;
      width: 100%;
    } */

    input {
      display: none;
    }
  }
`;
