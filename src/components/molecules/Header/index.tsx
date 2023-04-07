import { Link } from "react-router-dom";
import GreenTrace from "./GreenTrace.png";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logocontainer}>
        <img src={GreenTrace} className={styles.logopic} />
      </Link>
      <div className={styles.headtextcontainer}>
        <Link to="/" className={styles.home}>
          Inicio
        </Link>
        <Link to="/servicios" className={styles.services}>
          Servicios
        </Link>
        <Link to="/contacto" className={styles.contact}>
          Contacto
        </Link>
      </div>
    </header>
  );
}
