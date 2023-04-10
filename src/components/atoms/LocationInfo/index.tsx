
import { RiCarWashingFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { BsFillCalendarCheckFill } from "react-icons/bs";
interface GpsJson {
  latitud: number;
  longitud: number;
  altitud: number;
  timestamp: any;
  id: number;
}
type CoordsDivsProps = {
  coordData: GpsJson;
};

function LocationInfo(props: CoordsDivsProps) {
  const { coordData } = props;
  const { longitud, latitud, id, timestamp} = coordData;
  var date = new Date(timestamp); //Convert timestamp to miliseconds and create object "Data"
  var dates = date.toLocaleString().split(",");
  return (
    <div className={styles.datatext}>
      <div className={styles.time}>
        <span className={styles.time2}> {dates[1]}</span>
        <span className={styles.date}> {dates[0]}</span>
      </div>
      <div className={styles.id}>
        <RiCarWashingFill
          style={{ color: "black", fontSize: "5rem", paddingRight: "1rem" }}
        />
        <span>{id}</span>
      </div>
      <div className={styles.lonlat}>
        <span className={styles.coords}>Coordenadas</span>
        <div className={styles.longitud}>
          <span className={styles.lontext}>Longitud</span>

          <p className={styles.lonnum}>{longitud}</p>
        </div>
        <div className={styles.latitud}>
          <span className={styles.lattext}>Latitud</span>
          <p className={styles.latnum}>{latitud}</p>
        </div>
      </div>
      <Link to="/historics">
        <button className={styles.historicbutton}>
          <BsFillCalendarCheckFill
            style={{ color: "black", fontSize: "3rem", paddingRight: "1rem" }}
          />
          Consultar historicos
        </button>
      </Link>
    </div>
  );
}

export default LocationInfo;
