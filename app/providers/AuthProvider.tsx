"use client";

import React, { FC, ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface AuthProviderProps{
    children:ReactNode
}
const AuthProvider:FC<AuthProviderProps> = ({children}):JSX.Element => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default AuthProvider