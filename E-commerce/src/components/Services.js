import React from 'react'
import { services } from '../utils/constants'
import './services.css'

const Services = () => {
    return (
        <div className='section-center'>
            <h3>Product Custom Sesuai Keinginanmu</h3>
            <div className='services-center'>
                {services.map((set) => (
                    <div className='service'>
                        <span>{set.icon}</span>
                        <h4>{set.title}</h4>
                        <p>{set.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
