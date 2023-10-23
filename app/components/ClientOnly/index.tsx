"use client";
import React, { FC, Fragment, ReactNode, useEffect, useState } from 'react'


interface ClientOnlyProps{
    children:ReactNode
}
const ClientOnly:FC<ClientOnlyProps> = ({children}):JSX.Element => {
    const [isMounted,setIsMounted] = useState<boolean>(false);
    useEffect(()=>{
        setIsMounted(true);

    },[])
    if(!isMounted) return<></>

  return (
    <Fragment>
        {children}
    </Fragment>
  )
}

export default ClientOnly