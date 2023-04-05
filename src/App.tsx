import "./App.css";
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
const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <div /> },
  { path: "/realtime", element: <RealTime />, errorElement: <div /> },
  { path: "/historics", element: <Historic />, errorElement: <div /> },
]);
function App() {
  return (
    <CustomProvider theme="dark">
      <RouterProvider router={router} />;
    </CustomProvider>
  );
}

export default App;
