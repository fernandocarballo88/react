import React from "react"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"


function CartContainer(){
    const { cart } = useContext(cartContext);
    
    return(
    <div>
        <h1>CART</h1>
        {cart.map((item) =>(
                <div>
                    <h2>{item.title}</h2>
                    <img src={item.img} alt="imagen" width={"200px"}></img>
                    <h2>{item.price} $</h2>
                    <h2>Total de Sets {item.count}</h2>
                </div>
        ))}
    </div>
    )
}

export default CartContainer