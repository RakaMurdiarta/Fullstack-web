import React from 'react'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import './listview.css'
import Product from './Product'

const ListView = ({ products }) => {
    return (
        <section className='grid gap-[3rem]'>
            {products.map((set) => (
                <article key={set.id} className='isi-content gap-6'>
                    <img
                        className='h-[200px] w-[300px] block object-cover mb-[1rem]'
                        src={set.image}
                        alt={set.name}
                    />
                    <div className='grid gap-4'>
                        <div>
                            <h5 className='text-[28px] font-bold'>
                                {set.name}
                            </h5>
                            <h4 className='text-[#AB7A5F] text-lg'>
                                {formatPrice(set.price)}
                            </h4>
                        </div>
                        <p>{set.description}</p>
                        <Link
                            to={`/products/${set.id}`}
                            className='inline-block w-20 text-center cursor-pointer bg-slate-600 text-white p-2 rounded-lg hover:bg-[#AB7A5F] transition-all duration-300'
                        >
                            Details
                        </Link>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default ListView
