import React from 'react'
import {useContext} from 'react'
import { themeContext } from './Context'

const TextFa = () => {
    const theme = useContext(themeContext)

  return (
    <div>
        <p className={theme}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iste eaque! Rem esse ullam expedita, porro amet excepturi eius nesciunt quos? Enim officiis quas aliquid iure ducimus odit aspernatur accusamus.
        </p>
    </div>
  )
}

export default TextFa