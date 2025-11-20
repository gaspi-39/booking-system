import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  links: { label: string; path: string }[];
}

function Navbar({ links }: NavbarProps) {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        {links.map((item, index) => (
          <li key={index}>
            <Link className="nav-link" to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
