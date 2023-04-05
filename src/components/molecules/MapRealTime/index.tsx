import {
  TileLayer,
  Marker,
  Popup,
  MapContainer,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import getCoordinates, { GpsJson } from "../../api/getCoordinates";
import LocationInfo from "../../atoms/LocationInfo";
import "../../atoms/LocationInfo/index.css";
import "leaflet/dist/leaflet.css";
import HeaderInf from "../../atoms/Header";

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
    <div className="Home">
      <div className="mapaytexto">
        <div className="mapa">
          <MapContainer
            center={
              coordData == null
                ? [10.996802, -74.769347]
                : [coordData.latitud, coordData.longitud]
            }
            zoom={13}
            scrollWheelZoom={true}
            style={{
              height: "calc(100vh - 70px)",
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
