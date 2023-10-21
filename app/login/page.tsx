import React from 'react'
import styles from "./loginPage.module.css"
import LoginButtons from './LoginButtons'

const LoginPage = () => {
  return (
    <div className={styles.container}>
       <LoginButtons/>
    </div>
  )
}

export default LoginPage