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
 searchedCategory?:string;
}
const CardList: FC<CardListProps> = ({postData,totalLength,pageIndex,noPaginate,sidebarData,searchedCategory}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.post}>
        <div className={styles.cardContainer}>
          {!!postData && Array.isArray(postData) &&  postData.map((self, index) => (
            <Cards isLast={index !== 9} key={index} postData={self} />
  
          ))}
          {
            Array.isArray(postData) && postData.length ===0 ?(
              <h1 style={{textAlign:"center",marginTop:"20px",fontSize:"18px"}}>No Post Found</h1>
            ):(<></>)
          }
          {
            !noPaginate ? (
              <Pagination totalLength={totalLength} pageIndex={pageIndex} searchedCategory={searchedCategory}/>

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
