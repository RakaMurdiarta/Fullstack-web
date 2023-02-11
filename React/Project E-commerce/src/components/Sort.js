import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import './sort.css'

const Sort = () => {
  
  /***use the context***/

  return (
    <div className='section-sort'>
      <div className='btn-container'>
        {/** add button gridview and listview, 
         *   use the imported icon above 
         */}
      </div>
      <p>
        {/** add info number of products found */}
      </p>
      <hr />
      <form>
        
        {/** add the label and dropdown select
         *   use this value :
         *   - price-lowest
         *   - price-highest
         *   - name-a
         *   - name-z
         */}
          
      </form>
    </div>
  )
}


export default Sort
