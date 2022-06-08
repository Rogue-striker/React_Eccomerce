import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import products from './DummyProducts'
const ProductList = () => {
    return (
        <>
            {products.map((product, index) => {
                    return <ProductCard product={product}
                        key={index}
                    />
            })}
        </>
    )
}

export default ProductList