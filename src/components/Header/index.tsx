import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export default function Header() {
  const pathValue = useLocation().pathname;

  return (
    <header className="site-header">
      <h1 className="brand">Projeto de Verificação</h1>

      <nav className="navbar">
        <Link
          to="/"
          className={`navigation-link ${pathValue === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/informations"
          className={`navigation-link ${
            pathValue === "/informations" ? "active" : ""
          }`}
        >
          Informações
        </Link>
      </nav>
    </header>
  );
}
