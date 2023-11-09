import React, { FC } from "react";
import styles from "./slugpage.module.css";
import Image from "next/image";
import Menu from "../components/menu";
import CommentSection from "../components/comments";
import BlogContent from "../components/BlogContent";
import BlogItem from "../components/RelatedBlog/BlogItem";
import RelatedBlog from "../components/RelatedBlog";
import getSidebarPost from "../serverActions/getSidebarPost";
import getPostDetails from "../serverActions/getPostDetails";
import moment from "moment";
interface PostDetailsPageProps {
  params:{slug:string}
}
const PostDetailsPage: FC<PostDetailsPageProps> = async({params}) => {

  const sidebarPosts = await getSidebarPost();
  const postDetails = await getPostDetails(params.slug)
  console.log('postDetails: ', postDetails);
  if(!postDetails?.id) return(
    <div className={styles.container}>
      No Post found
    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={String(postDetails.img)} alt="logo" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {postDetails?.title}
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src={String(postDetails.user.image)}
                alt="logo"
                fill
                className={styles.profileImage}
              />
            </div>
            <div className={styles.userTextContainer}>
              <p className={styles.username}>{postDetails.user.name}</p>
              <p className={styles.date}>{moment(postDetails.createdAt).format('lll')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <BlogContent content={postDetails.desc} />
          <div className={styles.commentssection}>
            <CommentSection />
          </div>
          <div className={styles.relatedContent}>
            <RelatedBlog postData={postDetails.relatedPosts}/>

          </div>
        </div>
        <div className={styles.sidebar}>
          <Menu postData={sidebarPosts as any[]} />
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
