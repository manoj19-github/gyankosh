

import React, { FC, useEffect, useState } from 'react'
import styles from "./relatedBlog.module.css"
import { PostInterface } from '@/app/types';
import Image from "next/image"
import { useRouter } from 'next/navigation';

interface BlogItemProps{
    postData:PostInterface;
    
}
const BlogItem:FC<BlogItemProps> = ({postData}) => {
  const [isMounted,setIsMounted] = useState<boolean>(false);
  const router = useRouter();
  
  useEffect(()=>{
    setIsMounted(true);

  },[]);
  if(!isMounted) return <></>
  const handleOnClick=()=>{
    router.push(`/${postData.id}`)

  }
  return (
    <div className={styles.blogContainer} onClick={handleOnClick}>
        <Image src={postData.img} alt="img" fill/>
        <div className={`${styles.titleBlog} overflow_hidden_text2`}>
            {postData.title}
        </div>
    </div>
  )
}

export default BlogItem