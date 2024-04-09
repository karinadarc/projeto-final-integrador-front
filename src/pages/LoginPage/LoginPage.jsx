import mainLogo from "../../assets/main-logo.svg"
import horizontalLine from "../../assets/horizontal-line.svg"
import horizontalLineThick from "../../assets/horizontal-line-thick.svg"
import { goToHomePage, goToSignupPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import BASE_URL from "../../constants/BASE_URL"
import {FooterLineImage,LoginForm, MainContainer} from "./LoginPageStyle"

function LoginPage() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const onChangeForm = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const login = (event) => {
    event.preventDefault()

    const body = {
      email: form.email,
      password: form.password
    }

    axios.post(BASE_URL + "/users/login", body)
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

      <div className="logo-container">
        <img src={mainLogo} alt="Labeddit" />
        <p>O projeto de rede social da Labenu</p>
      </div>
      
      <LoginForm onSubmit={login}>
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
          <button className="primary" type="submit">Continuar</button>

          <img src={horizontalLine} alt="Horizontal line" />
          <button onClick={() => goToSignupPage(navigate)}>Crie uma conta</button>
        </div>
      </LoginForm>

      <FooterLineImage src={horizontalLineThick} alt="Thicker Horizontal line" />
    </MainContainer>
  )
}

export default LoginPage;
