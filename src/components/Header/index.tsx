import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header className="headerContain">
      <h1>Injection Verify</h1>
      <nav className="navBarContain">
        <Link to="/">Home</Link>
        <Link to="/informations">Informações</Link>
      </nav>
    </header>
  );
}
