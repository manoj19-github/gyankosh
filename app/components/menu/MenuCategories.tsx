import React from 'react'
import styles from "./menu.module.css";
import Link from "next/link";
const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
    <Link
      href={`/blog?cat=style`}
      className={`${styles.category} ${styles.style}`}
    >
      Styles
    </Link>
    <Link
      href={`/blog?cat=style`}
      className={`${styles.category} ${styles.style}`}
    >
      Styles
    </Link>
    <Link
      href={`/blog?cat=frontend`}
      className={`${styles.category} ${styles.frontend}`}
    >
      Frontend
    </Link>
    <Link
      href={`/blog?cat=backend`}
      className={`${styles.category} ${styles.backend}`}
    >
      Backend
    </Link>
    <Link
      href={`/blog?cat=database`}
      className={`${styles.category} ${styles.database}`}
    >
      Database
    </Link>
    <Link
      href={`/blog?cat=seo`}
      className={`${styles.category} ${styles.seo}`}
    >
      SEO
    </Link>
    <Link
      href={`/blog?cate=web3`}
      className={`${styles.category} ${styles.web3}`}
    >
      web3
    </Link>
  </div>
  )
}

export default MenuCategories