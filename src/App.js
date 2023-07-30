import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContainer from "./components/Cart/CartContainer"
import { CartContextProvider } from "./context/cartContext";




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
      <Route path="/cart" element={<CartContainer />}></Route>

    <Route path="*" element={<h1>Pagina no encontrada : 404</h1>} />

    </Routes>    

    </BrowserRouter>
    </CartContextProvider>
    </div>

  );
}

export default App;


/*      <ItemDetailContainer />
*/