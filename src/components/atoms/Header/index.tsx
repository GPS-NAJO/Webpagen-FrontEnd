import "./index.css";
import { Link } from "react-router-dom";
import GreenTrace from "./GreenTrace.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logocontainer">
        <img src={GreenTrace} className="logopic" />
      </div>
      <div className="headtextcontainer">
        <Link to="/" className="home">
          Inicio
        </Link>
        <Link to="/servicios" className="services">
          Servicios
        </Link>
        <Link to="/contacto" className="contact">
          Contacto
        </Link>
      </div>
    </header>
  );
}
