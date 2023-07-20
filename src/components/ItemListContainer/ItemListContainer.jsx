import { useState } from "react";
import getData from "../../services/asyncMock"
import Item from "../Item/Item";
import './list.css';
import { useParams } from "react-router-dom";




const ItemListContainer = () =>{

    const [products, setProducts] = useState([])

    async function requestProducts(){
    const respuesta = await getData();
    setProducts(respuesta);
}    
    requestProducts();
    
return(
    <div>
        <h1>Productos</h1>
        <div  className="legos">
        {products.map((item) => (
        <Item key={item.id} {...item} />
        ))}
        </div>
    </div>
);
}

export default ItemListContainer