import React, { FC } from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import { PostInterface } from "@/app/types";
import moment from "moment";
interface MenuPostProps {
  withImage: boolean;
  title: string;
  dataset:PostInterface[];
  subtitle: string;
}
const MenuPost: FC<MenuPostProps> = ({ withImage, title, subtitle,dataset }) => {
  
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.items}>
        {
          !!dataset && Array.isArray(dataset) && dataset.map((self,index)=>(
            
        <Link href={`/${self.id}`} className={styles.item} key={index}>
        {withImage ? (
          <div className={styles.imageContainer}>
            <Image src={self.img} alt="logo" fill />
          </div>
        ) : (
          <></>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.backend}`}>
            {self.cat.title}
          </span>
          <p className={`${styles.postTitle} overflow_hidden_text2`}>
            {self.title}
          </p>
          <div className={styles.detail}>
            <span className={styles.username}>{self.user.name}</span>
            <span className={styles.date}>- {moment(self.updatedAt).format('ll')}</span>
          </div>
        </div>
      </Link>   

          ))
        }
      </div>
    </div>
  );
};

export default MenuPost;
