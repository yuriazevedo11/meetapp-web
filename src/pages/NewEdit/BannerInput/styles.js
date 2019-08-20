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
    opacity: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:hover {
      opacity: 0.8;
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
`;
