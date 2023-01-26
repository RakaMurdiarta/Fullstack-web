import React, { useState } from 'react';
import ProductList from './ProductList'
import Categories from './Categories';
import items from './data';

//Get exist categories
const existCategories = [items.map(({ category }) => category)];
//create set of unique category
const myset = [...new Set(existCategories[0])];
//create array categories contains 'all' and exist categories
const listPrice=[20000,50000,100000,200000]
const allCategories = ['All', ...myset]

// const filter=(name)=>{
//   console.log(name);
// }
// const panggil=(callback)=>{
//   callback(id);
// }
// panggil(filter('raka'))

function App() {

  //create state for product items
  const [productItems, setProductItems] = useState(items);
  //create state for array categories
  const [categories, setCategories] = useState(allCategories);
  const [priceFilter,setPriceFilter]=useState(listPrice)
  const [aktif,setAktif]=useState('All')

  //Fungsi untuk active button
  const active=(category)=>{
    setAktif(category)

  }
  const filterItem = (category) => {
    console.log(category);
    // console.log(category);
    active(category) // jalankan function di filter ketika di klik untuk mendapat value dari child props sebagai arguments

    category === 'All' ? setProductItems(items) : setProductItems(items.filter((item) => item.category === category));
    // console.log('2',items.filter((item)=> item.category===category));
  }
  console.log(productItems);
  const filterPrice = (price) => {
    console.log(price);

    // console.log(category);
    active(price)// jalankan function di filter ketika di klik untuk mendapat value dari child props sebagai arguments
    setProductItems(productItems.filter((item) => item.price <= price));
    // console.log('2',items.filter((item)=> item.category===category));
  }
  console.log(productItems);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Products</h2>
          <div className="underline"></div>
        </div>
        {/* fill with state name*/}
        <Categories categories={categories} filterItems={filterItem} active={aktif} Price={listPrice} filterPrice={filterPrice}/>
      </section>
      {/* fill with state name*/}
      <ProductList items={productItems} />
    </main>
  );
}

export default App;
