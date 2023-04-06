import "./App.css";
<<<<<<< Updated upstream
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
=======
import Home from "./components/pages/Home/index";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RealTime from "./components/pages/RealTime";
import Historic from "./components/pages/Historics";
import { CustomProvider } from "rsuite";
import Calendar from "./components/molecules/Calendar";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <div /> },
  { path: "/realtime", element: <RealTime />, errorElement: <div /> },
  { path: "/historics", element: <Historic />, errorElement: <div /> },
]);
function App() {
  return (
    <CustomProvider theme="dark">
      <Calendar />
      <RouterProvider router={router} />;
    </CustomProvider>
>>>>>>> Stashed changes
  );
}

export default App;
