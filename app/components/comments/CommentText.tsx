import React, { FC } from "react";
import styles from "./comment.module.css";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

interface CommentTextProps{
  commentData:any;
}
const CommentText:FC<CommentTextProps> = ({commentData}):JSX.Element => {
  console.log('commentData: ', commentData);
  return (
 
    <div className={styles.comment}>
      <div className={styles.user}>
        <div className={styles.userImageContainer}>
          <Image
            src={commentData?.user?.image?commentData.user.image:"/avatarimage.png"}
            alt="logo"
            fill
            className={styles.profileImage}
          />
        </div>
        <div className={styles.userTextContainer}>
          <p className={styles.username}>{commentData?.user?.name}</p>
          <p className={styles.date}>{moment(commentData.createdAt).format('lll')}</p>
        </div>
      </div>
      <div className={styles.commentText}>
      {commentData.title}
      </div>
    </div>
  
  
  )
}

export default CommentText