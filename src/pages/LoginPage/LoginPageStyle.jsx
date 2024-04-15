import styled from "styled-components";

export const MainContainer = styled.main`
  width: 428px;
  height: 926px;
  background-color: #ffffff;
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
      font-family: "IBM Plex Sans", sans-serif;
      font-weight: 300;
    }
  }
`;

export const FooterLineImage = styled.img`
  align-self: center;
  margin-top: auto;
`;
