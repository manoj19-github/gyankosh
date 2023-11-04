import React, { FC } from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuPost from "./MenuPost";
import MenuCategories from "./MenuCategories";
import { PostInterface } from "@/app/types";
import getAllCategories from "@/app/serverActions/getCategories";
interface MenuProps {
  postData:PostInterface[]
}
const Menu: FC<MenuProps> = async({postData}) => {

  return (
    <>
      <MenuPost
        withImage={false}
        title={`What's New`}
        subtitle={`Most Popular`}
        dataset={postData}
      />

      <div className={styles.container}>
        <h2 className={styles.subtitle}>{`Choose by Topic`}</h2>
        <h1 className={styles.title}>Categories</h1>
        <MenuCategories/>
      </div>

      {/* <MenuPost
        withImage
        subtitle={`Choosen by Editor`}
        title={`Editor Choice`}
        dataset={postData}
      /> */}
    </>
  );
};

export default Menu;
