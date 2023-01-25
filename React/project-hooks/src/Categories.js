import React from 'react';

const Categories = ({ categories, filterItems, active, Price, filterPrice }) => {
  // const [button,setButton]=useState('filter-btn')
  return (
    <>
      <div className="btn-container">
        {categories.map((category, index) => {
          
          return (
            <button type="button"
              className={active === category ? 'filter-btn-active' : 'filter-btn'}
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
      <div className="btn-container">
        {
          Price.map((price, index) => {
            return (
              <button type="button"
                className={active === price ? 'filter-btn-active' : 'filter-btn'}
                key={index}
                onClick={() => filterPrice(price)}//mengirim value sebagi arguments
              >
                {price}
              </button>
            )
          })
        }
      </div></>


  );

};

export default Categories;
