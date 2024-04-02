import mainLogo from "../assets/main-logo.svg"
import horizontalLine from "../assets/horizontal-line.svg"
import horizontalLineThick from "../assets/horizontal-line-thick.svg"

function LoginPage() {
  return (
    <main>
      <img src={mainLogo} alt="Labeddit" />
      <p>O projeto de rede social da Labenu</p>
      <form>
        <input type="text" placeholder="E-mail" />0
        <input type="text" placeholder="Senha" />
        <button>Continuar</button>
        <img src={horizontalLine} alt="Horizontal line" />
        <button>Crie uma conta</button>
      </form>
      <img src={horizontalLineThick} alt="Thicker Horizontal Line" />
    </main>
  );
}

export default LoginPage;
