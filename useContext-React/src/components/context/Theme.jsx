import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const setDark = () => setTheme('dark')
    const setLight = () => setTheme('light')

    useEffect(() => {
        console.log(`useEffect`, theme);
    }, [theme])


    return (
        <ThemeContext.Provider value={{ theme, setDark, setLight }}>
            {children}
        </ThemeContext.Provider>
    )
}