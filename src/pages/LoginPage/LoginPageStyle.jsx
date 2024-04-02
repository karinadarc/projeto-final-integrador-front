import styled from "styled-components"

export const MainContainer = styled.main`
  width: 428px;
  height: 926px;
  background-color: #FFFFFF;
  margin: 0 auto;
  padding: 16px 32px;
  display: flex;
  flex-direction: column;

  .logo-container {
    margin: 106px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    p {
      margin: 0;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 300;
    }
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    height: 64px;
    padding: 0 16px;
    font-family: 'Noto Sans', sans-serif;;
    font-weight: 400;
    color: #323941;
  }

  button {
    height: 56px;
    border-radius: 24px;

    background-color: #FFFFFF;
    color: #FE7E02;

    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;

    &.primary {
      background-color: #FB9663;
      color: #FFFFFF;
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
`

export const FooterLineImage = styled.img`
  align-self: center;
  margin-top: auto;
`
