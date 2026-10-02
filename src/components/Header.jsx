import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>Windi Rihanafsa</h2>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tentang">About</NavLink>
        <NavLink to="/hobi">Hobbies</NavLink>
        <NavLink to="/kontak">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;