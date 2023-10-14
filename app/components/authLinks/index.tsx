"use client";
import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import styles from "./authLinks.module.css"
import {MdKeyboardArrowDown} from "react-icons/md"
import {GiHamburgerMenu} from "react-icons/gi"

const AuthLinks = () => {
    const isLoggedIn = false;
    const [open,setOpen] = useState<boolean>(false)

  return (
    <Fragment>
        <div style={{marginLeft:'10px',marginTop:'6px',position:'absolute' ,right:'6%',top:"0.5%",cursor:"pointer"}}>
            <GiHamburgerMenu size={20}/>
        </div>
        {isLoggedIn ? (
            <Link href="/login" className={styles.link}>Login</Link>
        ):(
            <>
      
            <div className={styles.link}>
                <p>My Profile </p>
       
            </div>
            </>
        )}
        
        
    </Fragment>
  )
}

export default AuthLinks