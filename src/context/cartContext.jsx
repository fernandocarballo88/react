import { useState, createContext } from "react";

const cartContext = createContext ( { cart: []} );

function CartContextProvider(props){
  const [cart, setCart] = useState([]);

  function addToCart(product, count) {
    //console.log(product, count)
    /*const newCart = [...cart];
    newCart.push(product);
    setCart(newCart);*/
    const newCart = cart.map((item) => item);
    const newItemInCart = {count, ...product };
    newCart.push(newItemInCart);
    setCart(newCart);

  }

  function getTotalItemsInCart(){
    let total = 0;
    cart.forEach((item) =>{
      total += item.count;
    });
    return total
  }

  return (
    <cartContext.Provider value={{
      cart,
      addToCart,
      getTotalItemsInCart,
      }}>
      {props.children}
    </cartContext.Provider>
  )
}


export { cartContext, CartContextProvider };
