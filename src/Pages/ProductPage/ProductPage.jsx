import React from 'react'
import ProductList from '../../components/ProductLists/ProductList'
import FilterSection from '../../components/FilterSection/FilterSection'
import { FaFilter } from 'react-icons/fa'

const ProductPage = () => {
  return (
    <>
      <div>
        <div className="sm:hidden container mx-auto px-5 flex items-center sm:flex-none sm:items-baseline" >
          <FaFilter className='h-4 w-4 pr-1 hover:cursor-pointer'/>
          <p className='text-black hover:cursor-pointer'>
            Filter
          </p>
        </div>
      </div>
      <div className='sm:flex sm:container sm:mx-auto sm:mt-20 mt-5 sm:px-5'>
        <div className='sm:w-1/6 hidden sm:block'>
          <FilterSection/>
        </div>
        <div className='w-full flex flex-wrap sm:gap-7 sm:ml-2'>
          <ProductList/>
        </div>
      </div>
    </>
  );
}

export default ProductPage