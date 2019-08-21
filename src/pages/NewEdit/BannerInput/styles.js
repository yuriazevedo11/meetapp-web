import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 10px;

  label {
    border-radius: 4px;
    margin-bottom: 10px;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 250px;
    text-align: center;
    cursor: pointer;
    opacity: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:hover {
      opacity: 0.9;
    }

    span {
      font-size: 20px;
      margin-top: 5px;
      color: #eee;
    }

    img {
      border-radius: 4px;
      align-self: flex-start;
      max-width: 1040px;
      max-height: 250px;
    }

    input {
      display: none;
    }
  }

  > span {
    color: #fb6f91;
    margin: 0 0 10px 10px;
  }
`;
