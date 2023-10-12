import React, { FC } from 'react'
import styles from "./footer.module.css"
interface FooterProps{}
const Footer:FC<FooterProps> = ():JSX.Element => {
  return (
    <div className={styles.container}>Footer</div>
  )
}

export default Footer