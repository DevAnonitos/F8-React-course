import clsx from 'clsx'
import styles from './Button.module.scss'

import React from 'react'

const Button = ({primary}) => {
  const classes = clsx(styles.btnn, {
    [styles.primary]: primary
  })

  return (
    <div>
        <button className={classes}> 
            Click me!
        </button>
        <button className={clsx(styles.btnn, styles.active)}> 
            Click me!
        </button>
    </div>
  )
}

export default Button