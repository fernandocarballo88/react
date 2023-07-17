import { useState, useEffect } from "react";
import getData from "../../services/asyncMock";

function ItemDetailContainer(){
    const[product, setProduct] = useState({});
    async function requestProduct(){
        const respuesta = await getData();
        setProduct(respuesta[0]);
    }
    
    useEffect(() =>{
requestProduct()
    }, []);

    return (
        <>
        <div>
        <img src={product.img} alt="imagen" width={"400px"}></img>
      </div>
      <div>
        <h2>{product.title}</h2>
      </div>
      <div>
        <h4>$ {product.price}</h4>
        <small>{product.description}</small>
      </div>
      </>
    )
}

export default ItemDetailContainer

