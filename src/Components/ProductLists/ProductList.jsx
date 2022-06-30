import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import products from './DummyProducts'
const ProductList = (props) => {
    var newproducts = [];
    useEffect(()=>{
        console.log(products);
    },[])
   
    return (
        <>
            {
                products.map((product, index) => {
                    return <ProductCard product={product}
                        key={index}
                    />
                })
            }
        </>
    )
}

export default ProductList