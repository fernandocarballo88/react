import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOrder } from "../../services/firebase"

function OrderConfirm(){
    const [orderData, setOrderData] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getOrder(id).then((order) => {
            setOrderData(order);
            });

    },[])

    return (
    <div>
        <h2>Gracias por comprar</h2>
        {orderData ? (
            <div>
                <p>Productos Comprados:
                {orderData.items.map((item) => {
                return (
                <small>
                {item.title} - {item.count} unidades
                </small>
                );
                })}
                </p>
            </div>
            ) : (
            <p>cargando</p>
            )}
    </div>
    );

}

export default OrderConfirm;