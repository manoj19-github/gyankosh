import React from 'react'
import styles from "./menu.module.css";
import Link from "next/link";
import getAllCategories from '@/app/serverActions/getCategories';
const MenuCategories = async() => {
  const categories = await getAllCategories();
  return (
    <div className={styles.categoryList}>
      {
        Array.isArray(categories) && categories.map((self,index)=>(
          <Link
          href={`/categories?cat=${self.slug}`}
          className={`${styles.category} ${styles.style}`}
          key={index}
        >
          {self.title}
        </Link>

        ))
      }
  </div>
  )
}

export default MenuCategories