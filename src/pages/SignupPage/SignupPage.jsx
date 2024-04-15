import { Link, useNavigate } from "react-router-dom"
import headerLogo from "../../assets/header-logo.svg"
import horizontalLineThick from "../../assets/horizontal-line-thick.svg"
import { useState } from "react"
import BASE_URL from "../../constants/BASE_URL"
import { goToHomePage } from "../../routes/coordinator"
import axios from "axios"
import MainContainer from "../../componentes/MainContainer"
import HeaderPrincipal from "../../componentes/HeaderPrincipal"

function SignupPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    acceptEmail: false
  })

  const onChangeForm = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const signup = (event) => {
    event.preventDefault()

    const body = {
      username: form.username,
      email: form.email,
      password: form.password
    }

    axios.post(BASE_URL + "/users/signup", body)
      .then((res) => {
        window.localStorage.setItem("token-labeddit", res.data.token)
        goToHomePage(navigate)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <MainContainer>
      <HeaderPrincipal exibirX={false} texto={"Entrar"} rotaTexto={"/login"}></HeaderPrincipal>

      <h1>Olá, boas vindas ao LabEddit ;)</h1>

      <form onSubmit={signup}>
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

        <section>
          <h2>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</h2>
          <input
            name="acceptEmail"
            value={form.acceptEmail}
            type="checkbox"
            onChange={onChangeForm}
          />
          <label>Eu concordo em receber emails sobre coisas legais no Labeddit</label>
        </section>

        <button type="submit">Cadastrar</button>
      </form>

      <img src={horizontalLineThick} alt="Thicker Horizontal line" />
    </MainContainer>
  )
}

export default SignupPage
