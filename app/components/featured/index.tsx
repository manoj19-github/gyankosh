"use client";
import React, { FC } from 'react'


import FeaturedPost from './FeaturedPost';
import { PostInterface } from '@/app/types';
interface FeaturedProps{
  postData:PostInterface[] | undefined;
  totalLength:number
}
const Featured:FC<FeaturedProps> = ({postData,totalLength}) => {
 
  return (
    <FeaturedPost postData={postData} totalLength={totalLength}/>
    
  )
}

export default Featured