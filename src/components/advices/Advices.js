import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Advices.module.css'

function Advices() {

  const [newAdvice, setNewAdvice] = useState('')
  const [counter, setCounter] = useState(0)


  useEffect(() => {
    const fetchedAdvice = async () => {
      //as API's link is static, added timestamp params to avoid cached get queries
      const params = new URLSearchParams();
      params.append('timestamp', new Date().getTime())

      const responce = await axios('https://api.adviceslip.com/advice', { params });
      setNewAdvice(responce.data.slip.advice)
    }
    fetchedAdvice()
  }, [counter])

  //simple counter for triggering new queries to API
  const updateCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div className={styles.content}>
      <h1 className={styles.fonts}>{newAdvice}</h1>
      <button className={styles.myButton} onClick={updateCounter}>New Advice!</button>
    </div>
  )
}

export default Advices
