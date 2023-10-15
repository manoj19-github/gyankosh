import React, { FC } from 'react'
import styles from "./blogpage.module.css"
import CardList from '../components/cardList'
import Menu from '../components/menu'

interface BlogPageProps{}
const BlogPage:FC<BlogPageProps> = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            Style Blog
        </div>
        <div>
            <CardList/>
        </div>

    </div>
  )
}

export default BlogPage