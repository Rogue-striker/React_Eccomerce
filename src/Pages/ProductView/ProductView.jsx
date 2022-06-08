import React from 'react'
import Slider from './../../components/Slider/Slider.jsx'

const ProductView = () => {
    const images = [
        "https://via.placeholder.com/720x400",
        "https://via.placeholder.com/720x500",
        "https://via.placeholder.com/720x600",
        "https://via.placeholder.com/720x700",
    ]
    return (
        <div className='container mx-auto'>
            <div className='h-100 w-100 flex flex-col sm:flex-row'>
                <div className=''>
                    <Slider images={images}/>
                   
                </div>
                <div className='p-2'>
                    <div className='pt-2'>
                        <h2 className='text-black text-2xl font-bold'>Product Name</h2>
                        <p className='text-muted text-xl'>price</p>
                    </div>
                    <div className='pt-2 sm:mb-10'>
                        <h3 className='font-medium pb-2'>Description</h3>
                        <p className='text-gray text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis autem unde dolores laborum odit, saepe cupiditate. Libero exercitationem vel voluptatibus cumque voluptas pariatur fuga accusamus?</p>
                    </div>
                    <div className='fixed bottom-0 left-0 w-full'>
                        <input type="button" value="Add to cart" className='border-none outline-none  
                    bg-blue-500 text-white p-2 w-1/2' />
                        <input type="button" value="Buy Now" className='border-none outline-none  
                    p-2 w-1/2 bg-buybutton text-white' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductView