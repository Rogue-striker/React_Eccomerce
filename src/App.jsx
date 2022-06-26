import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/Register/Register';
import CartPage from "./Pages/CartPage/CartPage.jsx";
import Checkout from './Pages/Checkout/Checkout';
import Homepage from "./Pages/Homepage/Homepage";
import NoMatch from "./Pages/NoMatch/NoMatch";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ProductView from "./Pages/ProductView/ProductView";

function App(){
  return (
  <>
   <Routes>
     <Route path = "/" element = {<Homepage/>} />
     <Route path = "/login"  element = {<LoginPage/>}/>
     <Route path = "/register"  element = {<RegisterPage/>}/> 
     <Route path = "/forgotpassword" element = {<ForgotPassword/>}/>
     <Route path = "/products" element = {<ProductPage/>} />
     <Route path = "/cart" element = {<CartPage/>} />
     <Route path = "/product/:id" element= {<ProductView/>} />
     <Route path = "/checkout"  element = {<Checkout/>} />
     <Route path = "*" element = {<NoMatch/>} />
   </Routes>
  </>
  );
}

export default App;