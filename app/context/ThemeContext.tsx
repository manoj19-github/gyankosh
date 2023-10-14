"use client";
import {FC, ReactNode, createContext, useEffect, useState} from "react"
import { initialState } from "./initialState"
interface ThemeContextProviderProps{
    children:ReactNode
}
export const ThemeContext = createContext({theme:initialState.theme,toggle:()=>{}});

const getFormLocalStorage = ()=>{
    if(typeof window !== "undefined")
    return localStorage.getItem('theme') || 'dark'


}

export const ThemeContextProvider:FC<ThemeContextProviderProps> = ({children})=>{
    const [theme,setTheme] = useState<typeof initialState.theme>("dark");
    const handleToggle=()=>{
        setTheme((theme)=>theme === "dark"?"light":"dark");    
    }
    
    useEffect(()=>{
        const theme = getFormLocalStorage();
        setTheme(theme as typeof initialState.theme)

    },[])
    useEffect(()=>{
        localStorage.setItem("theme",theme)

    },[theme])
    return <ThemeContext.Provider value={{theme,toggle:handleToggle}}>
        {children}
    </ThemeContext.Provider>
}