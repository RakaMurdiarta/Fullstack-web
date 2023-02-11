import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import styles from './featured.css'

const FeaturedProducts = () => {
    const {
        products_loading: loading,
        products_error: error,
        featured_products: featured,
    } = useProductsContext()

    //use loading component, while fetch data

    //use error component, if error thrown

    //return featured products
    console.log(featured)

    return (
        <>
            {loading === true ? (
                <Loading />
            ) : error === true ? (
                <Error />
            ) : (
                <>
                    <div className='section-featured'>
                        <h1>Product Pilihan</h1>
                        <div className='featured'>
                            {featured.map((item) => {
                                return (
                                    <div>
                                        <img src={item.image} alt={item.name} />
                                        <div>{item.name}</div>
                                        <div>{item.price}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default FeaturedProducts
