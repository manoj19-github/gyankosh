import React, { FC } from 'react'
import styles from "./blogpage.module.css"
import CardList from '../components/cardList'
import Menu from '../components/menu'
import getSidebarPost from '../serverActions/getSidebarPost'
import getAllPost from '../serverActions/getAllPosts'
import getCategoryPost from '../serverActions/getCategoryPost'
import CategoryList from '../components/categoryList'
import Featured from '../components/featured'

interface BlogPageProps{
  searchParams: { [key: string]: string | string[] | undefined }
}
const BlogPage:FC<BlogPageProps> = async({searchParams}) => {
  console.log("props : ",searchParams);
  const sidebarPosts = await getSidebarPost();
  let postsDataset;
  if (Number(searchParams?.page) > 0 && searchParams?.cat) {
    postsDataset = await getCategoryPost(Number(searchParams?.page),String(searchParams.cat));
  } else {
    postsDataset = await getCategoryPost(0,String(searchParams.cat));
  }
  
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <p className={styles.catTitle}>
              {searchParams.cat} {'  '}blogs
            </p>
        </div>
        <div>
            {/* <CardList noPaginate /> */}
            <Featured
        totalLength={postsDataset.totalLength}
        postData={postsDataset?.postData}
      />
      <CategoryList />
      {!!postsDataset ? (
        <div className={styles.content}>
          <CardList
            sidebarData={sidebarPosts as any[]}
            postData={postsDataset?.postData}
            pageIndex={postsDataset.pageIndex}
            totalLength={postsDataset.totalLength}
            searchedCategory={String(searchParams.cat)}
          />
        </div>
      ) : (
        <></>
      )}
        </div>

    </div>
  )
}

export default BlogPage