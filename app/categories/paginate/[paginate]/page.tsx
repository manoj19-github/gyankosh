import Image from 'next/image'
import Navbar from '../../../components/navbar'
import Footer from '../../../components/footer'
import styles from "../../blogpage.module.css"
import Featured from '../../../components/featured'
import CategoryList from '../../../components/categoryList'
import CardList from '../../../components/cardList'
import MenuList from '../../../components/menuList/index '
import getAllPost from '../../../serverActions/getAllPosts'
import getSidebarPost from '@/app/serverActions/getSidebarPost'
import getCategoryPost from '@/app/serverActions/getCategoryPost'
import { redirect } from 'next/navigation'

export default async function Home({params,searchParams}:{params: { paginate:any},  searchParams: { [key: string]: string | string[] | undefined }}) {
  

  let postsDataset;
  const sidebarPosts = await getSidebarPost();
  if (Number(params.paginate) > 0 && searchParams?.cat) {
    postsDataset = await getCategoryPost(Number(params.paginate),String(searchParams.cat));
  } else if(searchParams?.cat) {
    postsDataset = await getCategoryPost(0,String(searchParams.cat));
  }else{
    return redirect(`/`)
  }
  
  

  
  
  if(!postsDataset) return <></>

  return (
    <main className={styles.container}>
       <div className={styles.title}>
            <p className={styles.catTitle}>
              {searchParams.cat} {'  '}blogs
            </p>
        </div>
      <Featured totalLength={postsDataset.totalLength} postData={postsDataset?.postData} />
      <CategoryList/>
      <div className={styles.content}>
        <CardList sidebarData={sidebarPosts as any[]} postData={postsDataset?.postData} pageIndex={postsDataset.pageIndex} totalLength={postsDataset.totalLength} searchedCategory={String(searchParams.cat)}/>
      </div>



      
    </main>
  )
}
