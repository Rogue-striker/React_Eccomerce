import React from 'react'
import PriceRangeCard from '../PriceRangeCard/PriceRangeCard'

const PriceRange = () => {
  const prices = [
    '200', '300', '400', '500', '600', '700'
  ]
  return (
    <div className='bg-zinc-100 py-10'>
      <div className='container mx-auto my-10 sm:px-0 '>
        <div className='flex flex-wrap gap-4 sm:gap-0 justify-center sm:justify-between'>{prices.map((price) => <PriceRangeCard value={price} />)}</div>
      </div>
    </div>
  )
}

export default PriceRange