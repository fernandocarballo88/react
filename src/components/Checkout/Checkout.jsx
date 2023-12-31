import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import { useContext, useState } from "react";


function Checkout(){

    const [buyer, setBuyer] = useState({
        firstname: "",
        lastname: "",
        age: "",
    });

const navigate = useNavigate();
const { cart, getTotalPriceInCart } = useContext(cartContext);

async function handleCheckOut(evt){
    evt.preventDefault();
    const orderData = {
        items: cart,
        buyer: buyer,
        date: new Date(),
        total: getTotalPriceInCart(),
    };

    try {
    const idOrder = await createOrder(orderData);
    console.log(`tu numero de compra es ${idOrder}`)
    navigate(`/order-confirmation/${idOrder}`);
    } catch (error) {
        alert(`no se pudo realizar compra`)
    }
}

    function onInputChange(evt) {
        const value = evt.target.value;
        const field = evt.target.name;
        //buyer["firstname"] -> buyer.firstname
        const newState = {...buyer}
        newState[field] = value;
        setBuyer(newState);
    }
    
    function resetForm(e) {
        e.preventDefault();
        setBuyer({
        firstname: "",
        lastname: "",
        age: "",
        })
    }
    
    return (
        <form>
        <h2>Completa tus datos para completar la compra</h2>
        
        <div style={{ display: 'flex', marginBottom: 8 }}>
            <label htmlFor="lastname" style={{ width: '100px', marginRight: 4 }}>Nombreo</label>
            <input value={buyer.firstname} name="firstname" type="text" onChange={onInputChange} />
        </div>

        <div style={{ display: 'flex', marginBottom: 8 }}>
            <label htmlFor="lastname" style={{ width: '100px', marginRight: 4 }}>Apellido</label>
            <input value={buyer.lastname} name="lastname" type="text" onChange={onInputChange} />
        </div>
    
        <div style={{ display: 'flex', marginBottom: 8 }}>
            <label style={{ width: '100px', marginRight: 4 }}>Edad</label>
            <input value={buyer.age}  name="age" type="number" onChange={onInputChange} />
        </div>

            <button
            disabled={!(buyer.firstname !== '' && buyer.lastname !== '' && buyer.age !== '')}
            onClick={handleCheckOut}
            >
            Confirmar compra
            </button>
            <button onClick={resetForm}>Cancelar</button>

        </form>
    );
    }
    
    function InputForm(props){
    const { label, value, name, onChange } = props;
    return (
        <div style={{ display: 'flex', marginBottom: 8 }}>
        <label htmlFor={name} style={{ width: '100px', marginRight: 4 }}>{ label }</label>
        <input value={value} name={name} type="text" onChange={onChange} />
        </div>
    )
    }


export default Checkout

