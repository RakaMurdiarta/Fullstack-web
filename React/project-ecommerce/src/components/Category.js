import React from 'react'

const Category = ({ datas, handleFilter }) => {
    return (
        <>
            <div className='container d-flex justify-content-center bg-success py-4 rounded-4 mb-2' style={{ marginTop: '120px' }}>
                {
                    datas.map((item, index) => (

                        <button onClick={() => handleFilter(item)} className='filter mx-5' key={index}>{item}</button>

                    ))
                }
            </div>
        </>
    )
}

export default Category