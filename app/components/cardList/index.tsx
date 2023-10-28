import React, { FC } from "react";
import Pagination from "../pagination";
import Image from "next/image";
import styles from "./cardList.module.css";
import Cards from "../cards";
import Menu from "../menu";
import { PostInterface } from "@/app/types";
interface CardListProps {
  postData:PostInterface[] | undefined
}
const CardList: FC<CardListProps> = ({postData}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.post}>
        <div className={styles.cardContainer}>
          {!!postData && Array.isArray(postData) &&  postData.map((self, index) => (
            <Cards isLast={index !== 9} key={index} postData={self} />
          ))}
          <Pagination />
        </div>
        <div className={styles.sidebar}>
          <Menu/>
        </div>
      </div>
      
    </div>
  );
};

export default CardList;
