import React from 'react';

import cartimg from './../../Assets/slider1.jpg';


//   <img  src = {cartimg} alt = "#" className='h-32 w-32'/>
const CartItem = () => {
    return (
        <>
            <div className='flex   w-[300px]  sm:w-[400px] m-2 p-1 shadow shadow-grey overflow-y'>
                <div>
                    <img src={cartimg} alt="#" className='h-32 w-36' />
                </div>
                <div className='w-full flex flex-col'>
                    <div >
                        <h2 className='p-2'>title</h2>
                    </div>
                    <div className='h-full p-2'>
                        <div className=' h-full flex flex-col justify-end items-end'>
                            <div >
                                quantity
                            </div>
                            <div >
                                price
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem