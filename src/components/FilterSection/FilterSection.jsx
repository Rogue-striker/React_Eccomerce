import React from 'react'

const FilterSection = () => {
  return (
    <div className='border border-gray-200 p-6 mt-3'>
      <h2 className='text-lg font-semibold'>Filter</h2>
        <h1 className='text-bold'>Category</h1>
        <ul className='ml-2'>
            <li>
            <input type = "checkbox" name="category" value="men"/>
             <span className='ml-1'>men</span>
            </li>
            <li>
            <input type = "checkbox" name ="category" value = "female"/>
            <span className='ml-1'>women</span>
            </li>
        </ul>
    </div>
  )
}

export default FilterSection