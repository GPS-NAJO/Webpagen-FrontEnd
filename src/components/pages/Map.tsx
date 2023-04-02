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
import getCoordinates, { GpsJson } from "../api/getCoordinates";
import CoordsDivs from "../atoms/coords_Div";

// Changing marker icon
const carritoIcon = L.icon({
  iconUrl: "assets/carmapa.png",
  iconSize: [28, 28],
  iconAnchor: [20, 20],
});

function Map() {
  const [coordData, setCoordData] = useState<null | GpsJson>(null);
  const [popylineCoord, setPolylineCoord] = useState<[number, number][]>([]);
  useEffect(() => {
    const intervalo = setInterval(async () => {
      const coords = await getCoordinates();
      setCoordData(coords);
      setPolylineCoord((prev) => [...prev, [coords.latitud, coords.longitud]]);
    }, 6000);
  }, []);

  return (
    <div>
      <MapContainer
        center={
          coordData == null ? [0, 0] : [coordData.latitud, coordData.longitud]
        }
        zoom={13}
        scrollWheelZoom={true}
        style={{
          width: "28%",
          height: "70vh",
          borderRadius: "50px",
          borderBlockColor: "red",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coordData == null ? null : (
          <Marker
            position={[coordData.latitud, coordData.longitud]}
            icon={carritoIcon}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}

        <Polyline pathOptions={{ color: "red" }} positions={popylineCoord} />
      </MapContainer>
      <div>
        {coordData == null ? null : <CoordsDivs coordData={coordData} />}
      </div>
    </div>
  );
}
export default Map;
