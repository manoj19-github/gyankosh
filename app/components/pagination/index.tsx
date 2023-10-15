import React, { FC } from 'react'
import styles from "./pagination.module.css"
import {HiOutlineArrowNarrowLeft,HiOutlineArrowNarrowRight} from "react-icons/hi"
interface PaginationProps{}
const Pagination:FC<PaginationProps> = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <HiOutlineArrowNarrowLeft  className={styles.icons}/>
        <span className={styles.btnText}>Prev</span>
      </button>
      <button className={styles.button}>
        <HiOutlineArrowNarrowRight  className={styles.icons}/>
        <span className={styles.btnText}>Next</span>
        
      </button>
    </div>
  )
}

export default Pagination