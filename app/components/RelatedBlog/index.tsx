"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import BlogItem from "./BlogItem";
import styles from "./relatedBlog.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PostInterface } from "@/app/types";
interface RelatedBlogProps {
    postData:PostInterface[];
}

const RelatedBlog: FC<RelatedBlogProps> = ({postData}): JSX.Element => {
  console.log('postData: ', postData);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const rowRef = useRef<any>();
  const handleClick = (direction: string) => {
    // setIsMoved(true);
    console.log("HIT DATA");
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  if (!isMounted) return <></>;
  return (
    <div className={styles.container}>
      <div className={styles.backArrow} onClick={() => handleClick("left")}>
        <IoIosArrowBack size={25} />
      </div>
      <div className={styles.container} ref={rowRef}>
        {
            Array.isArray(postData) && postData.map((self,index)=>(
                <BlogItem key={index} postData={self}  />

            ))
        }
      </div>
      <div className={styles.forwardArrow} onClick={() => handleClick("right")}>
        <IoIosArrowForward size={25} />
      </div>
    </div>
  );
};

export default RelatedBlog;
