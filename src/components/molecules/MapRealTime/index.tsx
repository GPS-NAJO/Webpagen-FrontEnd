import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import getCoordinates, { GpsJson } from "../../api/getCoordinates";
import LocationInfo from "../../atoms/LocationInfo";
import styles from "./styles.module.css";

// Changing marker icon
const MarkerIcon = L.icon({
  iconUrl: "assets/carmapa.png",
  iconSize: [28, 28],
  iconAnchor: [20, 20],
});

function MapRealTime() {
  const [coordData, setCoordData] = useState<null | GpsJson>(null);
  const [popylineCoord, setPolylineCoord] = useState<[number, number][]>([]);
  useEffect(() => {
    async function getData() {
      const coords = await getCoordinates();
      setCoordData(coords);
      setPolylineCoord((prev) => [...prev, [coords.latitud, coords.longitud]]);
    }
    getData();
    const intervalo = setInterval(getData, 6000);
  }, []);

  return (
    <div className={styles.Home}>
      <div className={styles.mapaytexto}>
        <div className={styles.mapa}>
          <MapContainer
            center={
              coordData == null
                ? [10.996802, -74.769347]
                : [coordData.latitud, coordData.longitud]
            }
            zoom={13}
            scrollWheelZoom={true}
            style={{
              height: "calc(100vh - 90px)",
              borderRadius: "30px",
              width: "100%",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {coordData == null ? null : (
              <Marker
                position={[coordData.latitud, coordData.longitud]}
                icon={MarkerIcon}
              >
                <Popup>El vehivulo se encuentra aquí.</Popup>
              </Marker>
            )}

            <Polyline
              pathOptions={{ color: "red" }}
              positions={popylineCoord}
            />
          </MapContainer>
        </div>
        {coordData == null ? null : <LocationInfo coordData={coordData} />}
      </div>
    </div>
  );
}
export default MapRealTime;
