import React, { FC } from "react";
import Pagination from "../pagination";
import Image from "next/image";
import styles from "./cardList.module.css";
import Cards from "../cards";
import Menu from "../menu";
import { PostInterface } from "@/app/types";
interface CardListProps {
 postData:PostInterface[] | undefined;
 totalLength:number;
 pageIndex:number;
 noPaginate?:boolean;
 sidebarData:PostInterface[] ;
}
const CardList: FC<CardListProps> = ({postData,totalLength,pageIndex,noPaginate,sidebarData}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.post}>
        <div className={styles.cardContainer}>
          {!!postData && Array.isArray(postData) &&  postData.map((self, index) => (
            <Cards isLast={index !== 9} key={index} postData={self} />
  
          ))}
          {
            !noPaginate ? (
              <Pagination totalLength={totalLength} pageIndex={pageIndex} />

            ):(<></>)
          }
          
        </div>
        <div className={styles.sidebar}>
          <Menu  postData={sidebarData }/>
        </div>
      </div>
      
    </div>
  );
};

export default CardList;
