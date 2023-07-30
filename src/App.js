import { createContext, useState } from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Item from './components/Item/Item';


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

function App() {
  return (
    <div className="App">
    <CartContextProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer />}/>
      
      <Route path="/product/:id" element={<ItemDetailContainer />} />

    <Route path="*" element={<h1>Pagina no encontrada : 404</h1>} />

    </Routes>    

    </BrowserRouter>
    </CartContextProvider>
    </div>

  );
}

export default App;

export { cartContext }

/*      <ItemDetailContainer />
*/