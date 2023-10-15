import React, { FC } from 'react'
import styles from "./cards.module.css"
import Image from "next/image"
import Link from 'next/link'
interface CardsProps {
  isLast:boolean;
}
const Cards:FC<CardsProps> = ({isLast}) => {
  return (
    <div className={styles.container} >
        <div className={styles.imageContainer}>
          <Image src={'/Mask-group.png'} alt="logo" fill />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.details}>
                <span className={styles.date}>1/10/2023</span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing </h3>
            </Link>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta deserunt tenetur quis labore error ea ut architecto veniam quae? Accusamus fuga cum optio perferendis neque doloribus vitae, libero numquam.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus culpa sit neque laboriosam, ut voluptatum officiis eos qui, saepe molestias voluptatem? Porro perspiciatis cum quis enim at natus nam quos!
            </p>
            <Link href="/blog" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Cards