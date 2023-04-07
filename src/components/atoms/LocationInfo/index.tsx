import { GpsJson } from "../../api/getCoordinates";
import "./index.css";
import { RiCarWashingFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsFillCalendarCheckFill } from "react-icons/bs";
type CoordsDivsProps = {
  coordData: GpsJson;
};

function LocationInfo(props: CoordsDivsProps) {
  const { coordData } = props;
  const { longitud, latitud, id, timestamp, fecha } = coordData;

  return (
    <div className="datatext">
      <div className="time">
        <span className="time2"> {timestamp}</span>
        <span className="date"> {fecha}</span>
      </div>
      <div className="id">
        <RiCarWashingFill
          style={{ color: "black", fontSize: "2.5rem", paddingRight: "1rem" }}
        />
        <span>{id}</span>
      </div>
      <div className="lonlat">
        <span className="coords">Coordenadas</span>
        <div className="longitud">
          <span className="lontext">Longitud</span>

          <p className="lonnum">{longitud}</p>
        </div>
        <div className="latitud">
          <span className="lattext">Latitud</span>
          <p className="latnum">{latitud}</p>
        </div>
      </div>
      <Link to="/historics" className="historicbutton">
        <BsFillCalendarCheckFill
          style={{ fontSize: "1.2rem", paddingRight: "0.5rem" }}
        />{" "}
        Consultar historicos
      </Link>
    </div>
  );
}

export default LocationInfo;
