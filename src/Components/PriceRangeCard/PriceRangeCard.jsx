import React from 'react'
import { Link } from 'react-router-dom';

const PriceRangeCard = (props) => {
  const value = props.value;
  return (
    <>
    <Link to = "/products">
    <div className='h-fit w-fit sm:px-10 sm:py-5 my-2 px-8 py-2 rounded-xl bg-blue-500 text-white 
    hover:cursor-pointer'>
    <p className='sm:text-5xl font-bold'>under</p>
    <p className='
    mt-1 ml-1 text-4xl
    sm:mt-1 sm:ml-3 sm:text-6xl font-lato font-extrabold 
    '
    >{`₹${value}`}</p></div>
    </Link>
    </>
  )
}

export default PriceRangeCard