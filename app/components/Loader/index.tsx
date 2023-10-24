import React, { FC } from 'react'
import { ThreeDots } from "react-loader-spinner";
import styles from "./loader.module.css"

interface LoaderProps{
    isLoading:boolean;
}
const Loader:FC<LoaderProps> = ({isLoading}):JSX.Element => {
if(!isLoading) return <></>
  return (
    <div className={styles.wrapper}>
        <div className={styles.loader}>
        <ThreeDots
          height="40"
          width="120"
          radius="9"
          color="gray"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
        </div>
    </div>
  )
}

export default Loader