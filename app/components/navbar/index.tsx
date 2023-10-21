import React, { FC } from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle'
import AuthLinks from '../authLinks'
interface NavbarProps{}
const Navbar:FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
        <div className={styles.links}>
            <ThemeToggle/>
          <Link href="/"  className={styles.link}>Home</Link>
          <Link href="/abut" className={styles.link}>About</Link>
          <AuthLinks/>


        </div>
      
        <div className={styles.logo}>
            Gyankosh
        </div>
        <div className={styles.social}>
            <Image src="/facebook.png" alt="facebook" width={24} height={24} />
            <Image src="/instagram.png" alt="instagram" width={24} height={24} />
            <Image src="/youtube.png" alt="facebook" width={24} height={24} />
        </div>
        
        
    </div>
  )
}

export default Navbar