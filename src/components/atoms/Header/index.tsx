import "./index.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="home">
        Inicio
      </Link>
      <Link to="/servicios" className="services">
        Servicios
      </Link>
      <Link to="/contacto" className="contact">
        Contacto
      </Link>
    </header>
  );
}
