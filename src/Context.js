import React from 'react'
import TextFa from './TextFa'
import {useState, createContext} from 'react';

export const themeContext = createContext();


const Context = () => {
  const [theme, setTheme ]  = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <themeContext.Provider value={theme}>
      <div style={{padding: 20}}>
          <button button className="btn" onClick={toggleTheme}>Toggle theme</button>
          <TextFa/>
      </div>
    </themeContext.Provider>
  )
}

export default Context