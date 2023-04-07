import HeaderInf from "../../atoms/Header";
import "./HeaderPages.css";
import { Link } from "react-router-dom";
import carro from "../../../carro.avif";
function Home() {
  return (
    <>
      <HeaderInf />
      <div className="homediv">
        <div className="initcontainer2">
          <div className="textcontainer">
            <h1 className="greent">GreenTrace</h1>
            <h1 className="forcars">for cars</h1>
            <p>
              Con GreenTrace cuantificas tu huella de carbono y registras el
              recorrido de tu vehiculo todo el tiempo
            </p>
          </div>

          <div className="buttoncontainer">
            <Link to="/realtime" className="timereal">
              Consultar tiempo real
            </Link>
            <Link to="/historics" className="histo">
              Consultar historicos
            </Link>
          </div>
        </div>

        <img src={carro} className="carro" />
      </div>
    </>
  );
}
export default Home;
