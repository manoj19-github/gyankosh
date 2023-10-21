import React from 'react'
import styles from "./writePage.module.css"
import Image from "next/image"
import WriteEditor from '../components/WriteEditor'
const WritePage = () => {
  return (
    <div className={styles.container}>
        <WriteEditor/>
    </div>

  )
}

export default WritePage