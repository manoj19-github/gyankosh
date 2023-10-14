"use client"
import React, { useContext, useEffect, useState } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/app/context/ThemeContext";
const ThemeToggle = () => {
  const {theme,toggle} = useContext(ThemeContext)
  const [mounted,setMounted] = useState<boolean>(false)
  useEffect(()=>{
    setMounted(true)

  },[mounted])
  if(!mounted) return <></>
  return (
    <div className={styles.container} style={theme === "dark" ? {  background: "#101010" } :{background:"#9ca3af"}} onClick={toggle}>
      <Image src="/sun.png" alt="" width={14} height={14} />

      <div className={styles.ball} 
        style={theme === "dark" ? { left: "0.4%", background: "white" } : { right: "0.4%", background: "#0f172a" }} 
      />
      
      <Image src="/moon.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
