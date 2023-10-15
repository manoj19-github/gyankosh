import React, { FC } from 'react'
import styles from "./menu.module.css"
import Image from "next/image"
import Link from 'next/link'
import CategoryList from './../categoryList/index';
interface MenuProps{}
const Menu:FC<MenuProps> = ():JSX.Element => {
  return (
    <>
    <div className={styles.container}>
        <h2 className={styles.subtitle}>{`What's 
            New`}
        </h2>
        <h1 className={styles.title}>Most Popular</h1>
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
          
              <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.style}`}>
                        Styles
                    </span>
                    <p className={`${styles.postTitle} overflow_hidden_text2`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt, recusandae esse officiis nihil
                    </p>
                    <div className={styles.detail}>
                        <span className={styles.username}>
                            Manoj Santra
                        </span>
                        <span className={styles.date}>
                           -  10.03.2023
                        </span>
                    </div>
              </div>
            </Link>
            <Link href="/" className={styles.item}>
             
              <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.frontend}`}>
                        Frontend
                    </span>
                    <p className={`${styles.postTitle} overflow_hidden_text2`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt, recusandae esse officiis nihil
                    </p>
                    <div className={styles.detail}>
                        <span className={styles.username}>
                            Manoj Santra
                        </span>
                        <span className={styles.date}>
                           -  10.03.2023
                        </span>
                    </div>
              </div>
            </Link>
            <Link href="/" className={styles.item}>
             
              <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.backend}`}>
                        Backend
                    </span>
                    <p className={`${styles.postTitle} overflow_hidden_text2`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt, recusandae esse officiis nihil
                    </p>
                    <div className={styles.detail}>
                        <span className={styles.username}>
                            Manoj Santra
                        </span>
                        <span className={styles.date}>
                           -  10.03.2023
                        </span>
                    </div>
              </div>
            </Link>
            <Link href="/" className={styles.item}>
             
              <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.database}`}>
                        Database
                    </span>
                    <p className={`${styles.postTitle} overflow_hidden_text2`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt, recusandae esse officiis nihil
                    </p>
                    <div className={styles.detail}>
                        <span className={styles.username}>
                            Manoj Santra
                        </span>
                        <span className={styles.date}>
                           -  10.03.2023
                        </span>
                    </div>
              </div>
            </Link>
        </div>
    </div>

    <div className={styles.container}>
        <h2 className={styles.subtitle}>{`Choose by Topic`}
        </h2>
        <h1 className={styles.title}>Categories</h1>
        <div className={styles.categoryList}>
            <Link href={`/blog?cat=style`} className={`${styles.category} ${styles.style}`}>
                Styles
            </Link>
            <Link href={`/blog?cat=style`} className={`${styles.category} ${styles.style}`}>
                Styles
            </Link>
            <Link href={`/blog?cat=frontend`} className={`${styles.category} ${styles.frontend}`}>
                Frontend
            </Link>
            <Link href={`/blog?cat=backend`} className={`${styles.category} ${styles.backend}`}>
                Backend
            </Link>
            <Link href={`/blog?cat=database`} className={`${styles.category} ${styles.database}`}>
                Database
            </Link>
            <Link href={`/blog?cat=seo`} className={`${styles.category} ${styles.seo}`}>
                SEO
            </Link>
            <Link href={`/blog?cate=web3`} className={`${styles.category} ${styles.web3}`}>
                web3
            </Link>
            

            

            

        </div>
    </div>

    <div className={styles.container}>
        <h2 className={styles.subtitle}>{`Choosen by Editor`}
        </h2>
        <h1 className={styles.title}>{`Editor's Pick`}</h1>
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
              <div className={styles.imageContainer}>
                      <Image src={'/Mask-group.png'} alt="logo" fill />
              </div>
              <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.style}`}>
                        Styles
                    </span>
                    <p className={`${styles.postTitle} overflow_hidden_text2`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt, recusandae esse officiis nihil
                    </p>
                    <div className={styles.detail}>
                        <span className={styles.username}>
                            Manoj Santra
                        </span>
                        <span className={styles.date}>
                           -  10.03.2023
                        </span>
                    </div>
              </div>
            </Link>
            <Link href="/" className={styles.item}>
              <div className={styles.imageContainer}>
                      <Image src={'/Mask-group.png'} alt="logo" fill />
              </div>
              <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.frontend}`}>
                        Frontend
                    </span>
                    <p className={`${styles.postTitle} overflow_hidden_text2`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt, recusandae esse officiis nihil
                    </p>
                    <div className={styles.detail}>
                        <span className={styles.username}>
                            Manoj Santra
                        </span>
                        <span className={styles.date}>
                           -  10.03.2023
                        </span>
                    </div>
              </div>
            </Link>
            <Link href="/" className={styles.item}>
              <div className={styles.imageContainer}>
                      <Image src={'/Mask-group.png'} alt="logo" fill />
              </div>
              <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.backend}`}>
                        Backend
                    </span>
                    <p className={`${styles.postTitle} overflow_hidden_text2`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt, recusandae esse officiis nihil
                    </p>
                    <div className={styles.detail}>
                        <span className={styles.username}>
                            Manoj Santra
                        </span>
                        <span className={styles.date}>
                           -  10.03.2023
                        </span>
                    </div>
              </div>
            </Link>
            <Link href="/" className={styles.item}>
              <div className={styles.imageContainer}>
                      <Image src={'/Mask-group.png'} alt="logo" fill />
              </div>
              <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.database}`}>
                        Database
                    </span>
                    <p className={`${styles.postTitle} overflow_hidden_text2`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt, recusandae esse officiis nihil
                    </p>
                    <div className={styles.detail}>
                        <span className={styles.username}>
                            Manoj Santra
                        </span>
                        <span className={styles.date}>
                           -  10.03.2023
                        </span>
                    </div>
              </div>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Menu