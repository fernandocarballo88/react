import { useState, createContext } from "react";

const cartContext = createContext ( { cart: []} );

function CartContextProvider(props){
  const [cart, setCart] = useState([]);

  function addToCart(product, count) {
    const newCart = [...cart];
    if (isInCart(product.id)) {
      const indexUpdate = cart.findIndex((item) => item.id === product.id);
      newCart[indexUpdate].count += count;
      setCart(newCart);
    } else {
 
      const newItemInCart = {count, ...product };
      newCart.push(newItemInCart);
      setCart(newCart);
    }
    //console.log(product, count)
    /*const newCart = [...cart];
    newCart.push(product);
    setCart(newCart);*/
}

  function isInCart(id){
    return cart.some(item => item.id === id)
  }

  function getItemInCart(id){
    return cart.find(item => item.id === id)
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
      getItemInCart,
      addToCart,
      getTotalItemsInCart,
      }}>
      {props.children}
    </cartContext.Provider>
  )
}


export { cartContext, CartContextProvider };
