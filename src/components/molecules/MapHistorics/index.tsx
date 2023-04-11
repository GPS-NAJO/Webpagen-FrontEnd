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
  interface GpsJson {
    latitud: number;
    longitud: number;
    altitud: number;
    timestamp: any;
    id: number;
  }
  import SliderRuta from "../../atoms/sliders/SliderRuta/index";
  import styles from "./styles.module.css";
  import moment, { Moment } from "moment";

  // Changing marker icon
  const MarkerIcon = L.icon({
    iconUrl: "assets/carmapa.png",
    iconSize: [28, 28],
    iconAnchor: [20, 20],
  });

  export interface Filter {
    pointSelected?: number;
    startDate?: Date;
    endDate?: Date;
  }

  function MapHistorics() {
    const [filter, setFilter] = useState<Filter>({
      startDate: new Date("2023-02-01 00:00:00"),
      endDate: new Date("2023-05-01 23:59:59"),
    });
    const [route, setRoute] = useState<GpsJson[]>([]);

    useEffect(() => {
      async function getData() {
        try {
          const startFormatted = moment(filter.startDate).format("YYYY-MM-DD HH:mm:ss");
          const endFormatted = moment(filter.endDate).format("YYYY-MM-DD HH:mm:ss");
          const response = await fetch(`/api/historics?start=${startFormatted}&end=${endFormatted}`);
          const data = await response.json();
          setRoute(data);
        } catch (error) {
          console.error(error);
        }
      }
      getData();
    }, [filter.startDate, filter.endDate]);

    const lastPoint = route[route.length - 1];

    return (
      <div className={styles.Home}>
        <div className={styles.mapaytexto}>
          <div className={styles.mapa}>
            <MapContainer
              center={
                !lastPoint
                  ? [10.996802, -74.769347]
                  : [lastPoint.latitud, lastPoint.longitud]
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
              {!lastPoint ? null : (
                <Marker
                  position={[lastPoint.latitud, lastPoint.longitud]}
                  icon={MarkerIcon}
                >
                  <Popup>El vehivulo se encuentra aquí.</Popup>
                </Marker>
              )}

              <Polyline
                pathOptions={{ color: "red" }}
                positions={route.map((item) => [item.latitud, item.longitud])}
              />
            </MapContainer>
          </div>
          <SliderRuta data={route} filter={filter} setFilter={setFilter} />
        </div>
      </div>
    );
  }
  export default MapHistorics;
