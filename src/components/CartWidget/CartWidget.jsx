import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom';

 function CartWidget(){
    const context = useContext(cartContext);
    console.log(context)


    return (
        <Link to="/cart">
        <div>
            🛒
            <span> {context.getTotalItemsInCart()} </span>
        </div>
        </Link>
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