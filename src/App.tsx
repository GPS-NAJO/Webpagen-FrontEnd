import "./App.css";
import CoordsDivs from "./components/atoms/coords_Div";
import Map from "./components/pages/Map";

function App() {
  return (
    <div className="mainPageDivs">
      <div className="Mapa">
        <Map />
      </div>
      <div className="DivCoords"></div>
    </div>
  );
}

export default App;
