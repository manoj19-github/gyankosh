import Image from 'next/image'
import Navbar from './components/navbar'
import Footer from './components/footer'
import styles from "./homepage.module.css"
import Featured from './components/featured'
import CategoryList from './components/categoryList'
import CardList from './components/cardList'
import MenuList from './components/menuList/index '
export default function Home() {
  return (
    <main className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList/>
        <MenuList/>
      </div>



      
    </main>
  )
}
