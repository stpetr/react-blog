import { useState } from 'react'

import styles from  './counter.module.scss'

const MIN_VALUE = 1

export const Counter = ( ) => {
  const [counter, setCounter] = useState(MIN_VALUE)

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1)
  }

  const handleDecrement = () => {
    setCounter((prevState) => {
      return Math.max(MIN_VALUE, prevState - 1)
    })
  }

  return (
    <div className={styles.counter}>
      <div className={styles.view}>Counter: {counter}</div>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={handleDecrement}>-1</button>
        <button className={styles.btn} onClick={handleIncrement}>+1</button>
      </div>
    </div>
  )
}
