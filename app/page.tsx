import Image from 'next/image'
import Navbar from './components/navbar'
import Footer from './components/footer'
import styles from "./homepage.module.css"
import Featured from './components/featured'
import CategoryList from './components/categoryList'
import CardList from './components/cardList'
import MenuList from './components/menuList/index '
import getAllPost from './serverActions/getAllPosts'

export default async function Home() {
  const postsDataset = await getAllPost();
  console.log('postsDataset: ', postsDataset);

  
  
  

  return (
    <main className={styles.container}>
      <Featured totalLength={postsDataset.totalLength} postData={postsDataset?.postData} />
      <CategoryList/>
      <div className={styles.content}>
        <CardList postData={postsDataset?.postData}/>
      </div>



      
    </main>
  )
}
