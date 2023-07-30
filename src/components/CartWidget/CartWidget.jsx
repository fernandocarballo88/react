import { useContext } from 'react'
import { cartContext } from '../../App'

 function CartWidget(){
    const context = useContext(cartContext);
    console.log(context)


    return (
        <div>
            🛒
            <span> {context.getTotalItemsInCart()} </span>
        </div>
    );
}

export default CartWidget

/*const CartWidget = () =>{
    return(
        <div>
            <img src={cart} width={"20px"} alt="widget"/>
            🛒
            <span>1</span>
        </div>
    )
}
export default CartWidget

*/