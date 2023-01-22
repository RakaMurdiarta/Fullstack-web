
// import { useState } from 'react';
import './App.css';
import ListMovie from './components/Assignment/ListMovie';
// import Movie from './components/Assignment/Movie';
// import Search from './components/callback handler jsx/CallbackHandlers';
// import ChangeState from './components/ChangeState';
// import Clock from './components/Clock';
// import LifeCycle from './components/ComponenLifeCycle/lifeCycle';

// const handleSearch = (event) => {
//   console.log(event.target.value);
// }



function App() {

  return (
    <div className="container">
      <nav className="navbar sticky-top navbar-light bg-dark">
        <h1 className="navbar-brand text-light">IMBD Movies</h1>
      </nav>
      <ListMovie />
    </div>
    // <div className="App">
    //   <ListMovie/>

    //   {/* <Cari onSearch={handleSearch} />
    //   <h1>{searchTerm.toLowerCase()}</h1>
    //   <List list={searchFilter} /> */}
    //   {/* <Clock name="Raka" />
    //   <ChangeState />
    //   <LifeCycle />
    //   <Search onSearch={handleSearch}/> */}
    // </div>
  );
}

export default App;
