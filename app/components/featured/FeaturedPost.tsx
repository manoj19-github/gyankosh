import React, { FC } from 'react'
import styles from "./featured.module.css"
import Image from "next/image"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PostInterface } from '@/app/types';

interface FeaturedPostProps{
  postData:PostInterface[] | undefined;
  totalLength:number
}
const FeaturedPost:FC<FeaturedPostProps> = ({postData,totalLength}) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1199 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1200, min: 750 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 749, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      }
  return (
    <Carousel
    responsive={responsive}
    autoPlay={true}
    swipeable={true}
    draggable={false}
    showDots={false}
    arrows={false}
    infinite={true}
    partialVisible={false}
    autoPlaySpeed={3000}
  >
    {
      !!postData && Array.isArray(postData) && postData.slice(0,10).map((self,index)=>(
        <div className={styles.container} key={index}>
          <h1 className={styles.title}>
            {self.title}
          </h1>
          <button className={`${styles.button} ${styles.smallButton}`}>Read More</button>
          <div className={styles.post}>
            <div className={styles.imgContainer}>
              <Image src={self.img} alt="logo" className={styles.images} fill/>
              <div className={styles.overlay}/>
            </div>

            <div className={styles.textContainer}>
              {/* <h1 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti iure, doloribus quos dolorum cum fugiat. At nam aperiam </h1> */}
              <div className={styles.postDesc}>
                <div dangerouslySetInnerHTML={{__html:self.desc}}/>
              
              </div>
              <button className={styles.button}>Read More</button>

            </div>

          </div>
    </div>

      ))
    }
    
  </Carousel>
  )
}

export default FeaturedPost