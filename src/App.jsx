import React from "react";
import Navbar from "./components/Navbar/NavBar";
import CartPage from "./components/CartPage/CartPage";
import {Routes, Route} from 'react-router-dom';
import ProductView from "./Pages/ProductView/ProductView";
import Homepage from "./Pages/Homepage/Homepage";

function App(){
  return (
  <>

   <Navbar/> 
   <Routes>
     <Route path = "/" element = {<Homepage/>} />
     <Route path = "/products" element = {<Homepage/>} />
     <Route path = "/cart" element = {<CartPage/>} />
     <Route path = "/product/:id" element= {<ProductView/>} />
   </Routes>
  </>
  );
}

export default App;