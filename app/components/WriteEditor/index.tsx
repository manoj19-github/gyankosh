"use client";
import React, { FC, useState, useEffect, Fragment } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import styles from "./writeEditor.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ActionModal from "../ActionModal";
import { AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";
import { ICategories } from "@/app/types";
interface WriteEditorProps {
  categoryList:ICategories[]
}
const WriteEditor: FC<WriteEditorProps> = ({categoryList}): JSX.Element => {
  console.log('categoryList: ', categoryList);
  const imagesExtension = ["png", "jpeg", "jpg"];
  const videoExtensiion = ["mp4"];
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [postTitle, setPostTitle] = useState<string>("");
  const [postCat, setPostCat] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<any>("");
  const router =useRouter();
  const {data,status} = useSession();
  const [openModal,setOpenModal] = useState<boolean>(false);
  const [assetUrl,setAssetUrl]= useState<any>()

  console.log("value : ",value);
  console.log("user data  : ",data);
    
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const handleOnSubmit=()=>{
    if(!value || value.trim() === "") return toast.error(`post description not provided`);
    if(!postCat || postCat.trim()==="")return toast.error(`post category not provided`);
    const userData:any = data;
    const payload={
      userId:userData?.id,
      title:postTitle,
      description:value,
      assetUrl


    }
  }
  if(status==="loading") return(
    <div>Loading ...</div>
  )
    if(status==="unauthenticated") router.push("/")
  if (!isMounted) return <></>;

  return (
    <Fragment>
      <ActionModal isOpen={openModal} setIsOpen={setOpenModal} width={"md"} assetUrl={assetUrl} setAssetUrl={setAssetUrl}/>
    <div className={styles.wrapper}>
      {
         !openModal && !!assetUrl ? (
          assetUrl.split(".").length > 0 &&
          imagesExtension.includes(
            assetUrl.split(".")[assetUrl.split(".").length - 1]
          ) ? (
            <div className={styles.assetContainer}>
            <Image src={assetUrl} alt="plus" fill />
            <div className={styles.closeImage}>
                      <AiOutlineClose onClick={() => setAssetUrl("")} />
                    </div>
            
          </div>
          ):
            assetUrl.split(".").length > 0 &&
                  videoExtensiion.includes(
                    assetUrl.split(".")[assetUrl.split(".").length - 1]
                  ) ? (
                  <>
                <div className={styles.assetContainer}
                onClick={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                 
                <video className={styles.video} controls autoPlay loop >
                  <source
                    src={assetUrl}
                    type="video/mp4"
                  />
                </video>
                <div className={styles.closeImage2}>
                      <AiOutlineClose onClick={() => setAssetUrl("")} />
                    </div>
                
              </div>
               
              </>
          ):(<></>)
         ):(<></>)
      }


 
      <input type="text" placeholder="Title"  className={styles.input} value={postTitle} onChange={(e:any)=>setPostTitle(e.target.value)} />
      <div className={styles.categoryWrapper}>
        <select className={styles.categorySelect} value={postCat} onChange={(e:any)=>setPostCat(e.target.value)}>
        <option value={""}>Select 
        Post Category</option>
          {categoryList?.map((self,index)=>(
            <option className={styles.options} value={self.slug} key={index}>{self.title}</option>
          ))}
        </select>

      </div>
      <div className={styles.editor}>
     
      
        <button className={styles.button} onClick={()=>setOpenModal((prev)=>!prev)}>
          <Image src="/plus.png" alt="plus" width={16} height={16} />
        </button>

        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          placeholder="Tell your story"
          onChange={setValue}
        />
      </div>
    </div>
    <button className={styles.publish} onClick={handleOnSubmit}>
        Publish
      </button>
    </Fragment>
  );
};

export default WriteEditor;
