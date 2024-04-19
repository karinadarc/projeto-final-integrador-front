import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Checkbox,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Formulario from "../../componentes/Formulario";
import HeaderPrincipal from "../../componentes/HeaderPrincipal";
import MainContainer from "../../componentes/MainContainer";
import BASE_URL from "../../constants/BASE_URL";
import { goToHomePage } from "../../routes/coordinator";
import ModalMessage from "../../componentes/ModalMessage";

function SignupPage() {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [form, setForm] = useState({
    apelido: "",
    email: "",
    password: "",
    acceptEmail: false,
  });

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signup = (event) => {
    event.preventDefault();

    setIsLoading(true);

    const body = {
      apelido: form.apelido,
      email: form.email,
      password: form.password,
    };

    axios
      .post(BASE_URL + "/users/signup", body)
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
      <HeaderPrincipal
        exibirX={false}
        texto={"Entrar"}
        rotaTexto={"/login"}
      ></HeaderPrincipal>

      <Heading marginBottom={"30px"} marginTop={"10px"} size={"lg"}>
        Olá, boas vindas ao LabEddit ;)
      </Heading>

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

      <Formulario onSubmit={signup}>
        <div className="inputs-container">
          <input
            name="apelido"
            value={form.apelido}
            type="text"
            placeholder="Apelido"
            onChange={onChangeForm}
            autoComplete="off"
            minLength={5}
            required
          />

          <input
            name="email"
            value={form.email}
            type="email"
            placeholder="E-mail"
            onChange={onChangeForm}
            autoComplete="off"
            required
          />

          <input
            name="password"
            value={form.password}
            type="password"
            minLength={8}
            placeholder="Senha"
            onChange={onChangeForm}
            required
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
