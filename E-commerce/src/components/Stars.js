import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import './stars.css'


const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {/**
         * TODO
         */}
      </span>
    )
  })
  return (
    <div className='star-container'>
      {/**
       * TODO
       */}
    </div>
  )
}


export default Stars
