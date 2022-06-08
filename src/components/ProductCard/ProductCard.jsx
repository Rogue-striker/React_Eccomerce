import React from 'react'

const ProductCard = (props) => {
    const product = props.product
    return (
        <div className="container flex flex-col w-1/2 sm:w-fit mb-3 p-3 hover:shadow-xl hover:cursor-pointer relative group" key={product.id}>
            <div className='flex justify-center items-center w-full'>
            <img src='https://via.placeholder.com/200x250' className=" h-full w-full" alt="..." />

            </div>
            <div className="flex justify-between group-hover:scale-105 pt-2">
                <h5 className="pl-3 font-poppins my-0.5 ">{product.name}</h5>
                <p className='pr-3'>$200</p>
            </div>
        </div>
    )
}

export default ProductCard