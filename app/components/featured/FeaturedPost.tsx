import React, { FC } from 'react'
import styles from "./featured.module.css"
import Image from "next/image"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface FeaturedPostProps{}
const FeaturedPost:FC<FeaturedPostProps> = () => {
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
      [...new Array(4)].map((self,index)=>(
        <div className={styles.container} key={index}>
          <h1 className={styles.title}>
            Hey I am MERN Stack developer
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </h1>
          <button className={`${styles.button} ${styles.smallButton}`}>Read More</button>
          <div className={styles.post}>
            <div className={styles.imgContainer}>
              <Image src={"/myimage.jpg"} alt="logo" className={styles.images} fill/>
              <div className={styles.overlay}/>
            </div>

            <div className={styles.textContainer}>
              <h1 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti iure, doloribus quos dolorum cum fugiat. At nam aperiam </h1>
              <p className={styles.postDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eaque nam soluta eveniet ea impedit nisi dolorem possimus numquam aspernatur earum fugit cumque pariatur accusamus voluptatem repellat laboriosam exercitationem voluptates!
              </p>
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