import {createContext, ReactNode, useContext, useState} from "react";
import {IThemeContextProps, TTheme} from "../types/theme.ts"

const ThemeContext = createContext<IThemeContextProps | undefined>(undefined)

const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<TTheme>('light');

    function switchTheme() {
        setTheme(oldTheme => oldTheme === 'light' ? 'dark' : 'light')
    }

    return <ThemeContext.Provider value={{theme, switchTheme}}>
        {children}
    </ThemeContext.Provider>
}

const useTheme = () => {
    const context = useContext(ThemeContext)
    if(!context) {
        throw new Error('useTheme must be inside ThemeProvider')
    }
    return context
}

export {ThemeProvider, useTheme}