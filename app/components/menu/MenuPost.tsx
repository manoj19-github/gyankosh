import React, { FC } from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
interface MenuPostProps {
  withImage: boolean;
  title: string;
  subtitle: string;
}
const MenuPost: FC<MenuPostProps> = ({ withImage, title, subtitle }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          {withImage ? (
            <div className={styles.imageContainer}>
              <Image src={"/Mask-group.png"} alt="logo" fill />
            </div>
          ) : (
            <></>
          )}

          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.style}`}>Styles</span>
            <p className={`${styles.postTitle} overflow_hidden_text2`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              nesciunt, recusandae esse officiis nihil
            </p>
            <div className={styles.detail}>
              <span className={styles.username}>Manoj Santra</span>
              <span className={styles.date}>- 10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage ? (
            <div className={styles.imageContainer}>
              <Image src={"/Mask-group.png"} alt="logo" fill />
            </div>
          ) : (
            <></>
          )}

          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.frontend}`}>
              Frontend
            </span>
            <p className={`${styles.postTitle} overflow_hidden_text2`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              nesciunt, recusandae esse officiis nihil
            </p>
            <div className={styles.detail}>
              <span className={styles.username}>Manoj Santra</span>
              <span className={styles.date}>- 10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage ? (
            <div className={styles.imageContainer}>
              <Image src={"/Mask-group.png"} alt="logo" fill />
            </div>
          ) : (
            <></>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.backend}`}>
              Backend
            </span>
            <p className={`${styles.postTitle} overflow_hidden_text2`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              nesciunt, recusandae esse officiis nihil
            </p>
            <div className={styles.detail}>
              <span className={styles.username}>Manoj Santra</span>
              <span className={styles.date}>- 10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage ? (
            <div className={styles.imageContainer}>
              <Image src={"/Mask-group.png"} alt="logo" fill />
            </div>
          ) : (
            <></>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.database}`}>
              Database
            </span>
            <p className={`${styles.postTitle} overflow_hidden_text2`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              nesciunt, recusandae esse officiis nihil
            </p>
            <div className={styles.detail}>
              <span className={styles.username}>Manoj Santra</span>
              <span className={styles.date}>- 10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuPost;
