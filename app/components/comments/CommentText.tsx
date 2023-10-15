import React, { FC } from "react";
import styles from "./comment.module.css";
import Link from "next/link";
import Image from "next/image";

const CommentText = () => {
  return (
 
    <div className={styles.comment}>
      <div className={styles.user}>
        <div className={styles.userImageContainer}>
          <Image
            src={"/avatarimage.png"}
            alt="logo"
            fill
            className={styles.profileImage}
          />
        </div>
        <div className={styles.userTextContainer}>
          <p className={styles.username}>Manoj Santra</p>
          <p className={styles.date}>01.2.2023</p>
        </div>
      </div>
      <div className={styles.commentText}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur nam excepturi quasi eos doloremque obcaecati qui
        voluptatem libero, asperiores possimus ducimus eveniet molestias
        minima atque ut tempore commodi ea! Aliquid.
      </div>
    </div>
  
  
  )
}

export default CommentText