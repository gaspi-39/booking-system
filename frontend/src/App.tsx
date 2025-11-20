import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"

// Importá tus páginas
import Inicio from "./pages/Inicio";
import Habitaciones from "./pages/Habitaciones";
import Reservar from "./pages/Reservar";
import MisReservas from "./pages/MisReservas";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Navbar 
        links={[
          { label: "Inicio", path: "/" },
          { label: "Habitaciones", path: "/habitaciones" },
          { label: "Reservar", path: "/reservar" },
          { label: "Mis Reservas", path: "/mis-reservas" },
          { label: "Contacto", path: "/contacto" }
        ]}
      />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/mis-reservas" element={<MisReservas />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
