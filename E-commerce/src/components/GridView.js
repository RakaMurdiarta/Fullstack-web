import React from 'react'
import { formatPrice } from '../utils/helpers'
import './gridview.css'
import Product from './Product'

const GridView = ({ products }) => {
    return (
        <div className='products-container'>
            {products.map((set) => {
                const { image, name, price, id } = set
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
