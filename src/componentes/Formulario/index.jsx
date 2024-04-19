import styled from "styled-components";

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    height: 64px;
    padding: 0 16px;
    font-family: "Noto Sans", sans-serif;
    font-weight: 400;
    color: #323941;
  }

  button {
    height: 56px;
    border-radius: 24px;

    background-color: #ffffff;
    color: #fe7e02;

    font-family: "Noto Sans", sans-serif;
    font-weight: 700;

    &.primary {
      background-color: #fb9663;
      color: #ffffff;
    }
  }

  .inputs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    margin-bottom: 56px;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export default Formulario;
