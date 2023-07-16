import { useState } from "react";
import getData from "../../services/asyncMock"
import Item from "../Item/Item";


const ItemListContainer = ({ greeting }) =>{

    const [products, setProducts] = useState([])

    async function requestProducts(){
    const respuesta = await getData();
    setProducts(respuesta);
}    
    requestProducts();
    
return(
    <div>
        <h1>Productos</h1>
        {products.map((item) => (
        <Item key={item.id} {...item} />
        ))}
    </div>
);
}

export default ItemListContainer