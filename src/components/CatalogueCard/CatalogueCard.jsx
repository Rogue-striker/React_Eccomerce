import React from 'react'

const CatalogueCard = (props) => {
  const cat = props.category;
  return (
   <div className='w-11/12 relative md:group-hover:shadow-2xl group-hover:bg-slate-200 group'>
     <img src={cat.image} alt="..."  className='group-hover:opacity-25 '/>
     <div className='w-full bg-white hidden group-hover:block'>
        <h1 className='group-hover:absolute group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:top-1/2 group-hover:left-1/2
        group-hover:text-3xl
        '>{cat.category}</h1>
     </div>

   </div>
  )
}

export default CatalogueCard