import React from 'react'
import styles from "./writePage.module.css"
import Image from "next/image"
import WriteEditor from '../components/WriteEditor'
import getAllCategories from '../serverActions/getCategories'
import CategoryList from './../components/categoryList/index';
const WritePage = async() => {
  const categories = await getAllCategories();
  return (
    <div className={styles.container}>
        <WriteEditor categoryList={categories}/>
    </div>

  )
}

export default WritePage