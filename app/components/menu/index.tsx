import React, { FC } from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuPost from "./MenuPost";
import MenuCategories from "./MenuCategories";
interface MenuProps {}
const Menu: FC<MenuProps> = (): JSX.Element => {
  return (
    <>
      <MenuPost
        withImage={false}
        title={`What's New`}
        subtitle={`Most Popular`}
      />

      <div className={styles.container}>
        <h2 className={styles.subtitle}>{`Choose by Topic`}</h2>
        <h1 className={styles.title}>Categories</h1>
        <MenuCategories/>
      </div>

      <MenuPost
        withImage
        subtitle={`Choosen by Editor`}
        title={`Editor Choice`}
      />
    </>
  );
};

export default Menu;
