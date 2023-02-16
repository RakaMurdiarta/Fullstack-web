import React from 'react'
import { useTheme } from '../components/context/Theme'

const Home = () => {
    const themeContext = useTheme()
    const { theme, setDark, setLight } = themeContext
    console.log(themeContext);
    return (
        <div>
            <h1>{theme}</h1>
            <div className='flex gap-5'>
                <button className='bg-slate-500 p-2 rounded-sm' onClick={setDark}>Dark Mode</button>
                <button className='bg-slate-500 p-2 rounded-sm' onClick={setLight}>Light Mode</button>
            </div>
        </div>
    )
}

export default Home