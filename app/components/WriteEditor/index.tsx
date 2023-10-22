"use client";
import React, { FC, useState, useEffect, Fragment } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import styles from "./writeEditor.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface WriteEditorProps {}
const WriteEditor: FC<WriteEditorProps> = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<any>("");
  const router =useRouter();
  const {data,status} = useSession();
    
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if(status==="loading") return(
    <div>Loading ...</div>
  )
    if(status==="unauthenticated") router.push("/")
  if (!isMounted) return <></>;

  return (
    <Fragment>
    <div className={styles.wrapper}>
      <input type="text" placeholder="Title"  className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen((prev)=>!prev)}>
          <Image src="/plus.png" alt="plus" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="plus" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="plus" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="plus" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          placeholder="Tell your story"
          onChange={setValue}
        />
      </div>
    </div>
    <button className={styles.publish}>
        Publish
      </button>
    </Fragment>
  );
};

export default WriteEditor;
