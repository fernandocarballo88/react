import React from "react"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { createOrder } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CartContainer(){
    const { cart } = useContext(cartContext);
    
    return(
    <div>
        <h1>CART</h1>
        {cart.map((item) =>(
                <div key={item}>
                    <h2>{item.title}</h2>
                    <img src={item.img} alt="imagen" width={"200px"}></img>
                    <h2>{item.price} $</h2>
                    <h2>Total de Sets {item.count}</h2>
                    <Link to="/checkout">COMPRAR</Link> 
                </div>
        ))}
    </div>
    );
}

export default CartContainer;