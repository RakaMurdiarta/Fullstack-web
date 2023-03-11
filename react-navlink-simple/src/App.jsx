import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
import SingleContact from './components/SingleContact'

const App = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />}>
                    <Route path=':id' element={<SingleContact />} />
                </Route>
                <Route path='*' element={<PageNotFound />} />


            </Routes>
        </BrowserRouter>
    )


}

export default App