import React, { FC } from "react";
import styles from "./comment.module.css";
import Link from "next/link";
import Image from "next/image";
import CommentText from "./CommentText";
import {IoSendSharp} from "react-icons/io5"
interface CommentSectionProps {}
const CommentSection: FC<CommentSectionProps> = () => {
  const status = true;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {status ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment ...."
            className={styles.writeinput}
          ></textarea>
          <button className={styles.button}>Send</button>
          <button className={styles.mobButton}>
          <IoSendSharp/>
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <CommentText />
        <CommentText />
        <CommentText />
      </div>
    </div>
  );
};

export default CommentSection;
