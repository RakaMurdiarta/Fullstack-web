import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import './sort.css'

const Sort = () => {
    const {
        grid_view,
        setGridView,
        setListView,
        filtered_products: products,
        updateSort,
    } = useFilterContext()

    return (
        <div className='section-sort'>
            <div className='btn-container text-[25px]'>
                <div
                    onClick={() => setGridView()}
                    className={`${grid_view === true ? 'active' : ''}`}
                >
                    <div className='p-1 cursor-pointer'>
                        <BsFillGridFill />
                    </div>
                </div>
                <div
                    onClick={() => setListView()}
                    className={`${grid_view === false ? 'active' : ''}`}
                >
                    <div className='p-1 cursor-pointer'>
                        <BsList />
                    </div>
                </div>
            </div>
            <p>{`${products.length} Product found`}</p>
            <hr />
            <form>
                <label htmlFor='sort'>Sort By </label>

                <select onChange={(e) => updateSort(e)} name='sort' id='sort'>
                    <option value='price-lowest'>price-lowest</option>
                    <option value='price-highest'>price-highest</option>
                    <option value='name-a'>name-a</option>
                    <option value='name-z'>name-z</option>
                </select>
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
