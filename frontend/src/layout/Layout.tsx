import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

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
       <Footer />
    </>
  );
}

export default Layout;
