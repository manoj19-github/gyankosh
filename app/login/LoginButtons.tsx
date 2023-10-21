"use client";
import React, { FC, useEffect, useState } from 'react'
import styles from "./loginPage.module.css"
import { useSession,signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
interface LoginButtonsProps{}
const LoginButtons:FC<LoginButtonsProps> = ():JSX.Element => {
    const router = useRouter();
    const [isMounted,setIsMounted] = useState<boolean>(false);
    useEffect(()=>{
        setIsMounted(true);
    },[])
    const {data,status} = useSession();
    if(!isMounted) return <></>
    if(status==="authenticated") router.push("/")
  return (
    <div className={styles.wrapper}>
    <div className={styles.socialButton}>
        <div onClick={()=>signIn("google")} className={`${styles.socialButton} ${styles.googleBtn}`}>
            Sign in with Google

        </div>
        <div className={`${styles.socialButton} ${styles.githubBtn}`}   onClick={()=>signIn("github")}>
            Sign in with Github

        </div>


    </div>

</div>
  )
}

export default LoginButtons

