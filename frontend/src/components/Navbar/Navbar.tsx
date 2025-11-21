import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  links: { label: string; path: string }[];
}

function Navbar({ links }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-bar">
      {/* Botón hamburguesa a la izquierda */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-list ${open ? "open" : ""}`}>
        {links.map((item, index) => (
          <li key={index}>
            <Link
              className="nav-link"
              to={item.path}
              onClick={() => setOpen(false)} // cierra el menú al hacer click
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
