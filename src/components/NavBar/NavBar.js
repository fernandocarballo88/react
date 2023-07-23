import CartWidget from "../CartWidget/CartWidget"
import './navbar.css';
import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <nav>
            <ul className="nav-menu">            
            <h3>
                <li>
                <Link to="/"> Lego Store Argentina</Link>
                </li>
            </h3>

            <li className="nav-item">
                <Link className="nav-link btn" to="/category/Star Wars">
                    Star Wars
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link btn" to="/category/Marvel">
                Marvel
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link btn" to="/category/DC">
                    DC
                </Link>
            </li>
            </ul>
            <CartWidget />

        </nav>
    )
}
