import React from 'react'
import TextFa from './TextFa'
import {useState, createContext} from 'react';
import './App.css'

export const themeContext = createContext();


const Context = () => {
  const [theme, setTheme ]  = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <themeContext.Provider value={theme}>
      <div style={{padding: 20}} className="style">
          <button className="btn" onClick={toggleTheme}>Toggle theme</button>
          <TextFa/>
      </div>
    </themeContext.Provider>
  )
}

export default Context