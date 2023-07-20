import CartWidget from "../CartWidget/CartWidget"
import './navbar.css';
import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <nav>
            <ul className="nav-menu">            
            <h3>
                <li>
                <Link to="/"> Lego Sotre Argentina</Link>
                </li>
            </h3>

            <li className="nav-item">
                <Link className="nav-link" to="/">
                <button className="btn">Star Wars</button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/">
                <button className="btn">Marvel</button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/">
                <button className="btn">DC</button>
                </Link>
            </li>
            </ul>
            <CartWidget />

        </nav>
    )
}
