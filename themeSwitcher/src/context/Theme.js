import { createContext,useContext } from "react";

// Creating the Theme Context
export const ThemeContext =createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

// here we return default value 
// return two method also with variable 
export const ThemeProvider=ThemeContext.Provider

// Creating a Custom Hook for Using the Context
export default function useTheme(){
    return  useContext(ThemeContext)
}

// ThemeContext (named export)
// ThemeProvider (named export)
// useTheme (default export)
