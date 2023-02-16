import React from 'react'

import './gridview.css'
import Product from './Product'

const GridView = ({ products }) => {
    return (
        <div className='products-container'>
            {products.map((item) => {
                const { image, name, price, id } = item
                return (
                    
                        <Product
                            image={image}
                            price={price}
                            name={name}
                            id={id}
                        />
                    
                )
            })}
        </div>
    )
}

export default GridView
