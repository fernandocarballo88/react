import CartWidget from "../CartWidget/CartWidget"
import './navbar.css';

const NavBar = () => {
    return(
        <nav>
            <h3>Lego Sotre Argentina</h3>
            <div>
                <button className="btn">Star Wars</button>
                <button className="btn">Marvel</button>
                <button className="btn">DC</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar