"use client";
import React, { FC, useState } from "react";
import styles from "./comment.module.css";
import Link from "next/link";
import Image from "next/image";
import CommentText from "./CommentText";
import {IoSendSharp} from "react-icons/io5"
import axios from "axios";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";
interface CommentSectionProps {
  postDetails:any;
}
const CommentSection: FC<CommentSectionProps> = ({postDetails}) => {
  console.log('postDetails: ', postDetails);
  const {data,status} = useSession();
  const router = useRouter();
  const [commentText,setCommentText] = useState<string>("")
  const [commentSending,setCommentSending] = useState<boolean>(false)
  const sendComments = async()=>{
    if(commentSending) return;
    if(commentText.trim()===""){
      return toast.error("comment is empty");
    }
    const payload={
      title:commentText,postId:postDetails.id,postSlug:postDetails.slug
    }
    try{
      setCommentSending(true)
      await axios.post(`/api/comments`,payload);
      router.refresh();
      setCommentText("");
      toast.success("comment sent successfully")
    }catch(error){
      console.log("error : ",error);
      toast.error("Something went wrong")
    }finally{
      setCommentSending(false)
    }
    

  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {status ==="authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment ...."
            className={styles.writeinput}
            value={commentText}
            onChange={(e:any)=>setCommentText(e.target.value)}
          ></textarea>
          <button disabled={commentSending} onClick={sendComments} className={styles.button}>
          {commentSending ?<FaSpinner className="animate-spin" size={26} /> :`Send` }
          </button>
          <button disabled={commentSending} onClick={sendComments} className={styles.mobButton}>
          {commentSending ?<FaSpinner className="animate-spin" size={26} /> :<IoSendSharp/> }
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {
          !!postDetails && !!postDetails?.comments && 
          Array.isArray(postDetails.comments) && postDetails.comments.map((self:any,index:number)=>(
            <CommentText key={index} commentData={self} />
          ))
        }

        
      </div>
    </div>
  );
};

export default CommentSection;
