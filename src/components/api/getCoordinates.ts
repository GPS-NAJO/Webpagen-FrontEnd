export interface GpsJson {
  latitud: number;
  longitud: number;
  altitud: number;
  timestamp: number;
  id: number;
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
  const timestamp = 1686749580000;
  const gpsjson = {
    latitud: latitude,
    longitud: longitude,
    altitud: altitude,
    timestamp: timestamp,
    id: id,
  };
  return gpsjson;
}
