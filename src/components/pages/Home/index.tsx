import { Link } from "react-router-dom";
import carro from "../../../carro.avif";
import HeaderInf from "../../molecules/Header";
import styles from "./styles.module.css";
import Calendar from "../../molecules/Calendar";

function Home() {
  return (
    <>
      <HeaderInf />

      <div className={styles.homediv}>
        <div className={styles.initcontainer2}>
          <div className={styles.textcontainer}>
            <h1 className={styles.greent}>GreenTrace</h1>
            <h1 className={styles.forcars}>for cars</h1>
            <p className={styles.hometext}>
              Con GreenTrace cuantificas tu huella de carbono y registras el
              recorrido de tu vehiculo todo el tiempo
            </p>
          </div>

          <div className={styles.buttoncontainer}>
            <Link to="/realtime" className={styles.timereal}>
              Consultar tiempo real
            </Link>
            <Link to="/historics" className={styles.histo}>
              Consultar historicos
            </Link>
          </div>
        </div>

        <img src={carro} className={styles.carro} />
      </div>
    </>
  );
}
export default Home;
