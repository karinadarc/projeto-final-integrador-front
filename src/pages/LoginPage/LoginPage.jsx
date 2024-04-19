import mainLogo from "../../assets/main-logo.svg";
import horizontalLine from "../../assets/horizontal-line.svg";
import horizontalLineThick from "../../assets/horizontal-line-thick.svg";
import { goToHomePage, goToSignupPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";
import BASE_URL from "../../constants/BASE_URL";
import { FooterLineImage, MainContainer } from "./LoginPageStyle";
import { useDisclosure, Spinner, Flex, Center } from "@chakra-ui/react";
import Formulario from "../../componentes/Formulario";
import ModalMessage from "../../componentes/ModalMessage";

function LoginPage() {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const login = (event) => {
    event.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
    };

    setIsLoading(true);

    axios
      .post(BASE_URL + "/users/login", body)
      .then((res) => {
        window.localStorage.setItem("token-integrador", res.data.token);
        goToHomePage(navigate);
      })
      .catch((err) => {
        setMensagem(err.response.data.error);
        onOpen();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <MainContainer>
      <div className="logo-container">
        <img src={mainLogo} alt="Labeddit" />
        <p>O projeto de rede social da Labenu</p>
      </div>

      {isLoading && (
        <Flex justifyContent={"center"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="orange"
            size="xl"
          />
        </Flex>
      )}

      <ModalMessage
        mensagem={mensagem}
        onClose={onClose}
        isOpen={isOpen}
        onOpen={onOpen}
      ></ModalMessage>

      <Formulario onSubmit={login}>
        <div className="inputs-container">
          <input
            name="email"
            value={form.email}
            type="text"
            placeholder="E-mail"
            onChange={onChangeForm}
            autoComplete="off"
            required
          />

          <input
            name="password"
            value={form.password}
            type="password"
            placeholder="Senha"
            onChange={onChangeForm}
            required
          />
        </div>

        <div className="buttons-container">
          <button className="primary" type="submit">
            Continuar
          </button>

          <img src={horizontalLine} alt="Horizontal line" />
          <button onClick={() => goToSignupPage(navigate)}>
            Crie uma conta
          </button>
        </div>
      </Formulario>

      <FooterLineImage
        src={horizontalLineThick}
        alt="Thicker Horizontal line"
      />
    </MainContainer>
  );
}

export default LoginPage;
