import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Job from './pages/Job'
import JobsLayout from './pages/JobsLayout'
import Navbar from './pages/Navbar'
import NewJob from './pages/NewJob'
import SearchExample from './pages/SearchExample'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/jobs' element={<JobsLayout />} >
          <Route path=':id' element={<Job />} />
          <Route path='new' element={<NewJob />} />
        </Route>
        <Route path='search' element={<SearchExample />} /> */}
        <Route element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App  
