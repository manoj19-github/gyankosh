import React, { FC } from "react";
import Pagination from "../pagination";
import Image from "next/image";
import styles from "./cardList.module.css";
import Cards from "../cards";
import Menu from "../menu";
interface CardListProps {}
const CardList: FC<CardListProps> = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.post}>
        <div className={styles.cardContainer}>
          {[...new Array(10)].map((self, index) => (
            <Cards isLast={index !== 9} key={index} />
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
