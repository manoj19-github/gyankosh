import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import styles from "./homepage.module.css";
import Featured from "./components/featured";
import CategoryList from "./components/categoryList";
import CardList from "./components/cardList";
import MenuList from "./components/menuList/index ";
import getAllPost from "./serverActions/getAllPosts";
import getSidebarPost from "./serverActions/getSidebarPost";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  let postsDataset;
  const sidebarPosts = await getSidebarPost();
  if (Number(searchParams?.page) > 0) {
    postsDataset = await getAllPost(Number(searchParams?.page));
  } else {
    postsDataset = await getAllPost();
  }

  if (!postsDataset) return <></>;
  console.log('postsDataset: ', postsDataset);


  return (
    <main className={styles.container}>
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
          />
        </div>
      ) : (
        <></>
      )}
    </main>
  );
}
