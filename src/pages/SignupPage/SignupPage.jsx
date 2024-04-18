import { Box, Flex, Heading, Text, Link, Checkbox } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Formulario from "../../componentes/Formulario";
import HeaderPrincipal from "../../componentes/HeaderPrincipal";
import MainContainer from "../../componentes/MainContainer";
import BASE_URL from "../../constants/BASE_URL";
import { goToHomePage } from "../../routes/coordinator";

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    acceptEmail: false,
  });

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signup = (event) => {
    event.preventDefault();

    const body = {
      username: form.username,
      email: form.email,
      password: form.password,
    };

    axios
      .post(BASE_URL + "/users/signup", body)
      .then((res) => {
        window.localStorage.setItem("token-labeddit", res.data.token);
        goToHomePage(navigate);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainContainer>
      <HeaderPrincipal
        exibirX={false}
        texto={"Entrar"}
        rotaTexto={"/login"}
      ></HeaderPrincipal>

      <Heading marginBottom={"30px"} marginTop={"10px"} size={"lg"}>
        Olá, boas vindas ao LabEddit ;)
      </Heading>

      <Formulario onSubmit={signup}>
        <div className="inputs-container">
          <input
            name="username"
            value={form.username}
            type="text"
            placeholder="Apelido"
            onChange={onChangeForm}
            autoComplete="off"
          />

          <input
            name="email"
            value={form.email}
            type="text"
            placeholder="E-mail"
            onChange={onChangeForm}
            autoComplete="off"
          />

          <input
            name="password"
            value={form.password}
            type="password"
            placeholder="Senha"
            onChange={onChangeForm}
          />
        </div>

        <Flex direction={"column"} gap={3}>
          <Box>
            <Text>
              Ao continuar, você concorda com o nosso{" "}
              <Link href="#" isExternal color={"orange"}>
                Contrato de usuário
              </Link>{" "}
              e nossa{" "}
              <Link href="#" isExternal color={"orange"}>
                Política de Privacidade
              </Link>
            </Text>
          </Box>
          <Box>
            <Flex>
              <Checkbox
                name="acceptEmail"
                value={form.acceptEmail}
                onChange={onChangeForm}
                colorScheme="orange"
                required
              >
                Eu concordo em receber emails sobre coisas legais no Labeddit
              </Checkbox>
            </Flex>
          </Box>
          <Box>
            <div className="buttons-container">
              <button className="primary" type="submit">
                Cadastrar
              </button>
            </div>
          </Box>
        </Flex>
      </Formulario>
    </MainContainer>
  );
}

export default SignupPage;
