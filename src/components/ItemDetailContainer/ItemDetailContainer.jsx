import { useState, useEffect, useContext } from "react";
import {getProductData} from "../../services/asyncMock";
import '../Item/item.css';
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

import { cartContext } from "../../App";
import ButtonComponent from "../ButtonComponent/ButtonComponent";



function ItemDetailContainer(){
    const[product, setProduct] = useState({});
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const { id } = useParams();

    const { addToCart } = useContext(cartContext)


    useEffect(() =>{
    async function requestProduct(){
        const respuesta = await getProductData(id);
        setProduct(respuesta);
    }
    

requestProduct()
    }, []);

    function handleAddToCart(clickCount){
      //cart.push(clickCount)
      addToCart(product, clickCount);
      alert(`Agregaste ${clickCount} del Set ${product.title} al Carrito`);
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
      isAddedToCart? <button>ir al carrito</button>: <ItemCount onAddToCart={handleAddToCart} stock={3} />
      }
      </>
    )
}

export default ItemDetailContainer

