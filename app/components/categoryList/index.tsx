import React, { FC } from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
interface CategoryListProps {}
const CategoryList: FC<CategoryListProps> = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>

          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
          >
            <Image
              width={42}
              height={32}
              src={"/style34.png"}
              alt="logo"
              className={styles.image}
            />
            Style
          </Link>
   

          <Link
            href="/blog?cat=frontend"
            className={`${styles.category} ${styles.frontend}`}
          >
            <Image
              width={32}
              height={32}
              src={"/frontend23.png"}
              alt="logo"
              className={styles.image}
            />
            Frontend
          </Link>


          <Link
            href="/blog?cat=backend"
            className={`${styles.category} ${styles.backend}`}
          >
            <Image
              width={32}
              height={32}
              src={"/node22.png"}
              alt="logo"
              className={styles.image}
            />
            Backend
          </Link>


          <Link
            href="/blog?cat=database"
            className={`${styles.category} ${styles.database}`}
          >
            <Image
              width={32}
              height={32}
              src={"/database22.png"}
              alt="logo"
              className={styles.image}
            />
            Database
          </Link>


          <Link
            href="/blog?cat=android"
            className={`${styles.category} ${styles.android}`}
          >
            <Image
              width={32}
              height={32}
              src={"/and-remove.png"}
              alt="logo"
              className={styles.image}
            />
            Android
          </Link>


          <Link
            href="/blog?cat=seo"
            className={`${styles.category} ${styles.seo}`}
          >
            <Image
              width={32}
              height={32}
              src={"/seo22.png"}
              alt="logo"
              className={styles.image}
            />
            SEO
          </Link>
     

          <Link
            href="/blog?cat=web3"
            className={`${styles.category} ${styles.web3}`}
          >
            <Image
              width={32}
              height={32}
              src={"/web33.jpg"}
              alt="logo"
              className={styles.image}
            />
            WEB 3
          </Link>
          </div>
    </div>
  );
};

export default CategoryList;
