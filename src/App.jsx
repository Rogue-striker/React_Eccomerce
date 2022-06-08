import React from "react";
import Navbar from "./components/Navbar/NavBar";
import CartPage from "./components/CartPage/CartPage";
import {Routes, Route} from 'react-router-dom';
import ProductView from "./Pages/ProductView/ProductView";
import Homepage from "./Pages/Homepage/Homepage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import NoMatch from "./Pages/NoMatch/NoMatch";

function App(){
  return (
  <>
   <Navbar/> 
   <Routes>
     <Route path = "/" element = {<Homepage/>} />
     <Route path = "/products" element = {<ProductPage/>} />
     <Route path = "/cart" element = {<CartPage/>} />
     <Route path = "/product/:id" element= {<ProductView/>} />
     <Route path = "*" element = {<NoMatch/>} />
   </Routes>
  </>
  );
}

export default App;