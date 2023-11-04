import React, { FC } from 'react'
import styles from "./relatedBlog.module.css"
import { PostInterface } from '@/app/types';
import Image from "next/image"

interface BlogItemProps{
    postData:PostInterface;
    
}
const BlogItem:FC<BlogItemProps> = ({postData}) => {
  return (
    <div className={styles.blogContainer}>
        <Image src={postData.img} alt="img" fill/>
        <div className={styles.titleBlog}>
            {postData.title}
        </div>
    </div>
  )
}

export default BlogItem