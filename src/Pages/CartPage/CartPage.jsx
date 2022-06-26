import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../../Components/Navbar/NavBar.jsx';
import CartItem from './../../Components/CartItem/CartItem.jsx';

const CartPage = () => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <h1 className='text-3xl text-center sm:my-20 my-12'>
          Your Cart
        </h1>
        <div className='flex flex-col px-6 '>
          <div className=' mx-auto h-[300px] sm:h-[400px] overflow-y-auto scroll'>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
          </div>
          <div className='mt-2 sm:mt-8'>
            <h2 className='text-center'> 
              Summary
            </h2>
            <div className='flex justify-around my-4 sm:my-4 sm:mx-auto sm:w-[250px] '>
              <div  className='text-gray-600'>
                <h2>Total Amount</h2>
              </div>
              <div>
                $300
              </div>
            </div>
            <div className='flex justify-center mt-2'>
              <Link to = "/checkout">
              <p className=' bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded '>
                Checkout
              </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage