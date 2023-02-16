import React from 'react'
import { createContext } from 'react'
import { ThemeProvider, useTheme } from './components/context/Theme'
import Login from './components/Login'
import TopBar from './components/TopBar'
import Home from './page/Home'
import LoginContexPage from './page/LoginContexPage'
import LoginReducer from './reducer/LoginReducer'


export const UserContext = createContext({
  email: `raka@gmail.com`,
  id: 1,
  name: `raka`
})

const App = () => {
  const context = useTheme()
  const { theme } = context



  return (

    <div className={`${theme==='dark' && 'bg-red-600'}`}>
      <TopBar />
      <Home />
      {/* <Login/> */}
      {/* <LoginReducer/> */}
      <LoginContexPage/>

    </div>

  )
}

export default App
