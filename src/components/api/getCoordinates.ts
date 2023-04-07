export interface GpsJson {
  latitud: number;
  longitud: number;
  altitud: number;
  timestamp: any;
  id: number;
  fecha: any;
  createdAt: number;
}
export default async function () {
  // const resp = await fetch("https://jsonplaceholder.typicode.com/users",{method:"GET"})
  // const response = await resp.json()
  // console.log(response)
  const minLatitude = 10.923518;
  const maxLatitude = 10.996802;
  const minLongitude = -74.862975;
  const maxLongitude = -74.769347;

  const latitude = Math.random() * (maxLatitude - minLatitude) + minLatitude;
  const longitude =
    Math.random() * (maxLongitude - minLongitude) + minLongitude;
  const altitude = 0;
  const id = 664;
  const hora = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const timestamp = `${hora.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} PM`;
  const fecha = "Lunes, 03/04/24";
  const createdAt = new Date().getTime();
  const gpsjson = {
    latitud: latitude,
    longitud: longitude,
    altitud: altitude,
    timestamp: timestamp,
    id: id,
    fecha: fecha,
    createdAt,
  };
  return gpsjson;
}
