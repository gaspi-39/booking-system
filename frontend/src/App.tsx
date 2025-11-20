import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";

import Inicio from "./pages/Inicio";
import Habitaciones from "./pages/Habitaciones";
import Reservar from "./pages/Reservar";
import MisReservas from "./pages/MisReservas";
import Contacto from "./pages/Contacto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // TODAS las páginas pasan por este layout
    children: [
      { path: "/", element: <Inicio /> },
      { path: "/habitaciones", element: <Habitaciones /> },
      { path: "/reservar", element: <Reservar /> },
      { path: "/mis-reservas", element: <MisReservas /> },
      { path: "/contacto", element: <Contacto /> },
    ]
  }
]);

function Main() {
  return <RouterProvider router={router} />
}

export default Main;
