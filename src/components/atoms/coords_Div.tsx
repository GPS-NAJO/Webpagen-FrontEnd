import { GpsJson } from "../api/getCoordinates";
import "./coord_Divs.css";

type CoordsDivsProps = {
  coordData: GpsJson;
};

function CoordsDivs(props: CoordsDivsProps) {
  const { coordData } = props;
  const { longitud, latitud, id, timestamp } = coordData;

  return (
    <div className="datatext">
      <div>
        <p>Longitud: {longitud}</p>
      </div>
      <div>
        <p>Latitud: {latitud}</p>
      </div>
      <div>
        <p>id: {id}</p>
      </div>
      <div>
        <p>timestamp: {timestamp}</p>
      </div>
    </div>
  );
}

export default CoordsDivs;
