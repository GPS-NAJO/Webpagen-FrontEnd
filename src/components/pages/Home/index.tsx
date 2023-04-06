import HeaderInf from "../../atoms/Header";
import Calendar from "../../molecules/Calendar";
import "./HeaderPages.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <HeaderInf />
      <div className="initcontainer2">
        <Calendar />
        <h1 className="greent">GreenTrace</h1>
        <h1 className="forcars">for cars</h1>
        <p>
          Con GreenTrace cuantificas tu huella de carbono y registras el
          recorrido de tu vehiculo todo el tiempo
        </p>
        <Link to="/realtime">
          <p className="irA">Seguir mi vehiculo</p>
        </Link>
      </div>
    </>
  );
}
export default Home;
