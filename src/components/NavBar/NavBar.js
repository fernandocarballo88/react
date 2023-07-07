import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return(
        <nav>
            <h3>Lego Sotre Argentina</h3>
            <div>
                <button>Star Wars</button>
                <button>Marvel</button>
                <button>DC</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar