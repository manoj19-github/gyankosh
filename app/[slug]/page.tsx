import React, { FC } from "react";
import styles from "./slugpage.module.css";
import Image from "next/image";
import Menu from "../components/menu";
import CommentSection from "../components/comments";
import BlogContent from "../components/BlogContent";
interface PostDetailsPageProps {}
const PostDetailsPage: FC<PostDetailsPageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={"/Mask-group.png"} alt="logo" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src={"/avatarimage.png"}
                alt="logo"
                fill
                className={styles.profileImage}
              />
            </div>
            <div className={styles.userTextContainer}>
              <p className={styles.username}>Manoj Santra</p>
              <p className={styles.date}>01.2.2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <BlogContent />
          <div className={styles.commentssection}>
            <CommentSection />
          </div>
        </div>
        <div className={styles.sidebar}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
