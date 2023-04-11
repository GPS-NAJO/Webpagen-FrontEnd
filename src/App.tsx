import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CustomProvider } from "rsuite";
import "./App.css";
import Historic from "./components/pages/Historics";
import Home from "./components/pages/Home/index";
import RealTime from "./components/pages/RealTime";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <div /> },
  { path: "/realtime", element: <RealTime />, errorElement: <div /> },
  { path: "/historics", element: <Historic />, errorElement: <div /> },
]);

function App() {
  return (
    <CustomProvider theme="dark">
      <RouterProvider router={router} />
    </CustomProvider>
  );
}

export default App;
