import { Link } from "react-router-dom";
import "./style.css";

const Header = () => (
  <header className="header" tx="header">
    <h1>React App</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Me</Link>
    </nav>
  </header>
);

export default Header;
