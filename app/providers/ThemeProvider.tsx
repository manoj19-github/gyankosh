"use client";
import React, { FC, ReactNode, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

interface ThemeProviderProps{
    children:ReactNode;
}
const ThemeProvider:FC<ThemeProviderProps> = ({children}) => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={theme}>
        {children}
    </div>
  )
}

export default ThemeProvider