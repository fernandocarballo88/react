import { useEffect, useState } from "react";
import getData, { getCategoryData } from "../../services/asyncMock"
import Item from "../Item/Item";
import './list.css';
import { useParams } from "react-router-dom";
import { DotWave } from '@uiball/loaders'






const ItemListContainer = () =>{

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() =>{
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


    requestProducts();
}, [categoryId]);
    
if (products.length === 0) {
    return <DotWave size={47} speed={1}  color="black" />
}

return(
    <div>
        <h1>Productos</h1>
        <div className="contenedorCard">
        <div  className="legos">
        {products.map((item) => (
        <Item key={item.id} {...item} />
        ))}
        </div>
        </div>
    </div>
);

}
export default ItemListContainer