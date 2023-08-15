import React, { useState } from 'react'
import style from './Counter.module.scss'

export const Counter = () => {
 const [counter, setCounter] = useState<number>(0);

 const increase = () => {
    setCounter((prevueValue: number) => prevueValue + 1)
 }

 const decrease = () => {
    setCounter((prevueValue: number) => prevueValue - 1)
 }


  return (
    <div>
          <div className={style.main}> Counter</div>
          <p className={style.counter}>{counter}</p>
          <button onClick={increase}> increase </button>
          <button onClick={decrease}> decrease </button>
    </div>
  )
}

