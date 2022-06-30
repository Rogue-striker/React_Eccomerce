import React , { useEffect, useState } from 'react';
import { FaChevronUp, FaFilter } from 'react-icons/fa';
import FilterSection from '../../Components/FilterSection/FilterSection';
import NavBar from '../../Components/Navbar/NavBar';
import ProductList from '../../Components/ProductLists/ProductList';

const ProductPage = () => {
  const [ShowTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    },[]);

  })
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  const filterOptions = [ "Category 2" ]
  return (
    <>
      <NavBar />
      <div>
        <div className="sm:hidden container mx-auto px-5 flex items-center sm:flex-none sm:items-baseline" >
          <FaFilter className='h-4 w-4 pr-1 hover:cursor-pointer' />
          <p className='text-black hover:cursor-pointer'>
            Filter
          </p>
        </div>
      </div>
      <div className='sm:flex sm:container sm:mx-auto sm:mt-20 mt-5 sm:px-5'>
        <div className='sm:w-1/6 hidden sm:block'>
          <FilterSection />
        </div>
        <div className='w-full flex flex-wrap sm:gap-7 sm:ml-2'>
          <ProductList  filterOptions={filterOptions}/>
        </div>
        {
          ShowTopBtn ? <div className='fixed bottom-14 right-12 z-50 h-14 w-14 bg-white
        shadow-[0_3px_15px_rgb(59,130,246,1)] 
          rounded-full flex items-center justify-center cursor-pointer'  
            onClick={ScrollToTop}>
            <FaChevronUp />
          </div>
            : ""
        }
      </div>
    </>
  );
}

export default ProductPage