import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/firebase";
import '../Item/item.css';
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

import { cartContext } from "../../context/cartContext"
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Swal from "sweetalert2";



function ItemDetailContainer(){
    const[product, setProduct] = useState({});
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const { id } = useParams();

    const { addToCart, getItemInCart } = useContext(cartContext);

    const itemInCart = getItemInCart(id);
  
    const maxItems = itemInCart
      ? product.stock - itemInCart.count
      : product.stock;
    useEffect(() =>{
    async function requestProduct(){
        const respuesta = await getProductData(id);
        setProduct(respuesta);
    }
    

requestProduct()
    }, [id]);

    const handleAddToCart = (clickCount) => {
      //cart.push(clickCount)
      addToCart(product, clickCount);
      //alert(`Agregaste ${clickCount} del Set ${product.title} al Carrito`);
      Swal.fire({
        icon: 'success',
        text: 'Producto Agregado al Carrito',
      });
      setIsAddedToCart(true)
    }

    return (
        <>
        <div>
        <img src={product.img} alt="imagen" width={"500px"}></img>
      </div>
      <div>
        <h2>{product.title}</h2>
      </div>
      <div>
        <h4>$ {product.price}</h4>
        <small>{product.description}</small>
      </div>
      {
      isAddedToCart? <button>ir al carrito</button>: <ItemCount onAddToCart={handleAddToCart} stock={maxItems} />
      }
      </>
    )
}

export default ItemDetailContainer

