import {Link} from "react-router-dom"
import headerLogo from "../assets/header-logo.svg"


function SignupPage() {
  return (
    <main>
        <header>
            <img src={headerLogo} alt="Labeddit logo" />
            <Link to={"/login"}>Entrar</Link>
        </header>

        <h1>Olá, boas vindas ao LabEddit ;)</h1>

     <form> 

        <input type="text" placeholder="Apelido"/>
        <input type="text" placeholder="E-mail"/>
        <input type="text" placeholder="Senha"/>

        <section>
            <h2>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de privacidade</h2>
            <input type="checkbox"/>
            <label>Eu concordo em receber emails sobre coisas legais no Labeddit</label>
        </section>

        <button>Cadastrar</button>

     </form>

     <img src={horizontalLineThick} alt="Thicker Horizontal Line" />

    </main>
  );
}

export default SignupPage;
