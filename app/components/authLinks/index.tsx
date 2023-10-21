"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import styles from "./authLinks.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
const AuthLinks = () => {
  const isLoggedIn = false;
  const {data,status} = useSession();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const Icon = open ? AiOutlineClose : GiHamburgerMenu;
  const navigateToWritePage = () => {
    router.push("/write");
  };
  if(status ==="loading"){
    return <div className={styles.loading}>
      Loading ...
    </div>
  }
  return (
    <Fragment>
      <div onClick={() => setOpen((prev) => !prev)} className={styles.burger}>
        <Icon size={20} />
      </div>
      {status ==="authenticated" ? (
        
         <>
         <div className={styles.link} onClick={navigateToWritePage}>
           <p>Write your blog </p>
         </div>
         <div className={styles.link} onClick={() => signOut()}>
           <p>Logout </p>
         </div>
       </>
      ) : (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
       
      )}
      {!!open ? (
        <div className={styles.responsiveMenu}>
          <Link href="/" className={styles.smallLink}>
            Home
          </Link>
         
          <Link href="/abot" className={styles.smallLink}>
            About
          </Link>
          {status ==="authenticated" ? (
             <>
             <div className={styles.smallLink} onClick={navigateToWritePage}>
               <p>Write your blog </p>
             </div>
             <div className={styles.link} onClick={() => signOut()}>
               <p>Logout </p>
             </div>
           </>
            
          ) : (
            <Link href="/login" className={styles.smallLink}>
              Login
            </Link>
           
          )}
        </div>
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default AuthLinks;
