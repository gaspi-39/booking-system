import './Navbar.css'
interface NavbarProps {
  links: string[];
}

function Navbar({ links }: NavbarProps) {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        {links.map((link, index) => (
          <li className="nav-link" key={index}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;