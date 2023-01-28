// import { useState } from 'react';
import './App.css';
// import FetchingCustom from './FetchingCustom';
import Dragable from './Dragable';


function App() {
  
  return(
    <Dragable/>
  )
  // <Dragable/>
  // const [url,setUrl]=useState(null)
  // const [data]=FetchingCustom(url)


  // function UbahUrl() {
  //     setUrl('https://jsonplaceholder.typicode.com/todos')
  // }

  // console.log(url);
  // console.log(data);
  // console.log('render');
  // return (
  //   <>
  //     <h1>render</h1>
  //     <button onClick={UbahUrl}>click</button>
  //     {
  //       data.map((item)=>(
  //         <div>{item.title}</div>
  //       ))
  //     }
  //   </>
  // )
}


export default App;
