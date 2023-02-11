import React from "react"


const Product = ({ menu, handlecount }) => {
    console.log(menu);
    return (

        <div className="container-sm d-flex">
            <div className="row justify-content-center align-items-center">
                {menu===[]? <h1 className="text-danger my-3"> Data Tidak Ditemukan </h1> : menu.map((item) => {
                    const { img, id, title, price } = item
                    return (
                        <div key={id} className="card1 col-2 bg-success mx-1 my-3">
                            <div className="imgBox">
                                <img src={img} alt={title} className="mouse" />
                            </div>
                            <div className="contentBox">
                                <h3 className='card-title'>{title}</h3>
                                <h2 className="price">Rp. {price}</h2>
                                <button onClick={handlecount} className="buy text-success fw-bold">Buy Now</button>
                            </div>
                        </div>
            
                    )
                }
                )}
            </div>
        </div>

    )
}

export default Product;