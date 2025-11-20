import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Layout() {
  return (
    <>
      <Navbar 
        links={[
          { label: "Inicio", path: "/" },
          { label: "Habitaciones", path: "/habitaciones" },
          { label: "Reservar", path: "/reservar"},
          { label: "Mis Reservas", path: "/mis-reservas" },
          { label: "Contacto", path: "/contacto" }
        ]}
      />

      <div className="container">
        <Outlet /> 
      </div>
    </>
  );
}

export default Layout;
