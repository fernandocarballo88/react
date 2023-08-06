import React from "react"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { createOrder } from "../../services/firebase";


function CartContainer(){
    const { cart } = useContext(cartContext);



    
    async function handleCheckOut(){
        const orderData = {
            items: cart,
            buyer: { name:"Fernando", email: "fercarballo@live.com", phone: " 34263443434"},
            date: new Date(),
            total: undefined,
        };

        try{
        const idOrder = await createOrder(orderData);
        alert(`gracias por comprar , nro de ordern ${idOrder}`);
        } catch (error) {
            alert(`no se pudo realizar compra`)
        }
    }

    return(
    <div>
        <h1>CART</h1>
        {cart.map((item) =>(
                <div key={item}>
                    <h2>{item.title}</h2>
                    <img src={item.img} alt="imagen" width={"200px"}></img>
                    <h2>{item.price} $</h2>
                    <h2>Total de Sets {item.count}</h2>
                    <button onClick={handleCheckOut}>COMPRAR</button>
                </div>
        ))}
    </div>
    )
}

export default CartContainer