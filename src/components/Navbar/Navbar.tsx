import { Link } from "react-router-dom"
import "./NavBar.css"
export const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projectos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
