import Link from 'next/link';
import React, { Fragment } from 'react'
import styles from "./authLinks.module.css"
import {MdKeyboardArrowDown} from "react-icons/md"
const AuthLinks = () => {
    const isLoggedIn = false;

  return (
    <Fragment>
        {isLoggedIn ? (
            <Link href="/login">Login</Link>
        ):(
            <>
      
            <div className={styles.links}>
                <p>My Profile </p>
       
            </div>
            </>
        )}
        
        
    </Fragment>
  )
}

export default AuthLinks