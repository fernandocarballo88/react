import { useEffect, useState } from "react";
import getData, { getCategoryData } from "../../services/asyncMock"
import Item from "../Item/Item";
import './list.css';
import { useParams } from "react-router-dom";



const ItemListContainer = () =>{

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    async function requestProducts(){
        let respuesta = categoryId
        ? await getCategoryData(categoryId)
        : await getData()
        setProducts(respuesta);

    /*let respuesta = [];
    if( categoryId === undefined) {
        const respuesta = await getData();
    }
    else {
    respuesta = await getData(categoryId);*/

}  

useEffect(() =>{
    requestProducts();
}, []);
    
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