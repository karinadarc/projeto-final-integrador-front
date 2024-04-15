import { Link, useNavigate } from "react-router-dom";
import horizontalLineThick from "../../assets/horizontal-line-thick.svg";
import { useState } from "react";
import BASE_URL from "../../constants/BASE_URL";
import { goToHomePage } from "../../routes/coordinator";
import axios from "axios";
import MainContainer from "../../componentes/MainContainer";
import HeaderPrincipal from "../../componentes/HeaderPrincipal";
import { Heading } from "@chakra-ui/react";
import Formulario from "../../componentes/Formulario";

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

        <section>
          <h2>
            Ao continuar, você concorda com o nosso <a>Contrato de usuário</a> e
            nossa <a>Política de Privacidade</a>
          </h2>
          <input
            name="acceptEmail"
            value={form.acceptEmail}
            type="checkbox"
            onChange={onChangeForm}
          />
          <label>
            Eu concordo em receber emails sobre coisas legais no Labeddit
          </label>
        </section>

        <div className="buttons-container">
          <button className="primary" type="submit">
            Cadastrar
          </button>
        </div>
      </Formulario>

      <img src={horizontalLineThick} alt="Thicker Horizontal line" />
    </MainContainer>
  );
}

export default SignupPage;
