import { useState } from 'react';
import './App.css';
import Category from './components/Category';
import Navbar from './components/Navbar';
import Product from './components/Product';

import menu from './data'


function App() {
  const category=['All', ...new Set(menu.map(({category})=>category))]
  const [counter,setCounter]=useState(0)
  const[MenuData,setMenuData]=useState(menu)
  const [searchTerm,setSearchTerm]=useState('');

  const handlecount=()=>{
    const counter1=counter+1
      setCounter(counter1)
  }

  const handleFilter=(item)=>{
    const filterData=menu.filter(({category})=>category===item)
    item === 'All' ? setMenuData(menu) : setMenuData(filterData)

  }

  const handleSubmit=()=>{
    const searchfilter=menu.filter(({title})=>title.toLowerCase()===searchTerm.toLowerCase())
    
    searchTerm ==='' ? setMenuData(menu):setMenuData(searchfilter)

  }



  const handleSearch=(e)=>{
        setSearchTerm(e.target.value)
        e.preventDefault();
        console.log(e.target.value);
  }
  // console.log(menu);
  return (
    <div className="App">
      <Navbar counter={counter} handleSubmit={handleSubmit} handleSearch={handleSearch}/>
      <Category datas={category} handleFilter={handleFilter}/>
      <Product menu={MenuData} handlecount={handlecount}/>
    </div>
  );
}

export default App;
