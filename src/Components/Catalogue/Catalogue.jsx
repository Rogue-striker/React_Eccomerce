import React from 'react'
import CatalogueCard from './../CatalogueCard/CatalogueCard'
import mencat from './../../Assets/mencat.jpg'
import womencat from './../../Assets/womencat.jpg'
import { Link } from 'react-router-dom'

const category = [
  {
    id: 1,
    category: 'Men',
    image :mencat,
  },
  {
    id: 2,
    category: 'women',
    image: womencat,
  },
]

const Catalogue = () => {
  return (
    <div className='w-full bg-white'>
      <div className='container mx-auto pt-6 sm:py-10 flex flex-col'>
        <div className='flex justify-between items-center mx-4 sm:mx-0'>
          <div className='text-2xl font-lato'>
            <h1>Catalogue</h1>
          </div>
          <div className='text-md sm:text-xl font-lato hover:underline hover:text-blue-700 '>
            <h1>view all</h1>
          </div>
        </div>
        <div className='flex gap-6  mt-3 sm:gap-10 flex-wrap justify-center sm:flex-nowrap'>
          {
            category.map((cat) => <CatalogueCard category={cat} />)
          }
        </div>
        <div className='flex items-center justify-center sm:mt-10 my-6'>
          <Link to = '/products'>
          <button className='bg-blue-500 rounded text-white sm:px-3 sm:py-2 px-2 py-1'>View All</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Catalogue