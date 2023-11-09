import React, { FC } from "react";
import styles from "./blogContent.module.css";

interface BlogContentProps{
  content:string;
}
const BlogContent:FC<BlogContentProps> = ({content}) => {
  return (
    <div className={styles.contentData} dangerouslySetInnerHTML={{__html:content}}/>
  );
};

export default BlogContent;
