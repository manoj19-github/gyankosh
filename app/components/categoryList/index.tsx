import React, { FC, Fragment } from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getCurrentUser from "@/app/serverActions/getCurrentUser";
import getAllCategories from "@/app/serverActions/getCategories";
interface CategoryListProps {}
const CategoryList: FC<CategoryListProps> = async () => {
  const categories = await getAllCategories();
  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {!!categories &&
          Array.isArray(categories) &&
          categories.map((self, index) => (
            <Fragment key={self.id}>
              <Link
                href={`/blog?cat=${self.slug}`}
                className={`${styles.category} ${styles[`${self.slug}`]}`}
              >
                <Image
                  width={42}
                  height={32}
                  src={String(self.img)}
                  alt="logo"
                  className={styles.image}
                />
                {self.title}
              </Link>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
