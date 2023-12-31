import React, { FC } from "react";
import styles from "./cards.module.css";
import Image from "next/image";
import Link from "next/link";
import { PostInterface } from "@/app/types";
import moment from "moment";
interface CardsProps {
  isLast: boolean;
  postData: PostInterface;
}
const Cards: FC<CardsProps> = ({ isLast, postData }) => {
  return (
    <div>
      <div
      
        className={`${styles.container}  `}
      >
        <div className={styles.imageContainer}>
          <Image src={postData.img} alt="logo" fill />
        </div>
        <div className={styles.imageContainerMob}>
          <Image src={postData.img} alt="logo" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.details}>
            <span className={styles.date}>
              {moment(postData.createdAt).format("lll")}
            </span>
            <span className={styles.category}>
              {postData.cat.title.toUpperCase()}
            </span>
          </div>

          <h3>{postData.title} </h3>

          <div className={styles.desc}>
            <div dangerouslySetInnerHTML={{ __html: postData.desc }} />
          </div>
          <Link  href={`/${postData.id}`} className={styles.link}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
