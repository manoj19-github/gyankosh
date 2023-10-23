"use client";

import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./actionModal.module.css";
import ImageUploadContainer from "../AssetUpload";
import { AiOutlineClose } from "react-icons/ai";
interface ActionModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  width: "sm" | "md" | "lg";
  assetUrl: string;
  setAssetUrl: any;
}
const ActionModal: FC<ActionModalProps> = ({
  isOpen,
  setIsOpen,
  width = "md",
  setAssetUrl,
  assetUrl,
}) => {
    
  if (!isOpen) return <></>;
  return (
    <div className={styles.modalOverlay} onClick={()=>setIsOpen(prev=>!prev)}>
      <div className={`${styles.container} ${styles[width]}`} onClick={(e:any)=>{
        e.preventDefault();
        e.stopPropagation();
      }}>
      <div className={styles.close}>
                      <AiOutlineClose onClick={() => setIsOpen(prev=>!prev)} />
                    </div>
        <ImageUploadContainer onChange={(value:string)=>setAssetUrl(value)} value={assetUrl} />
      </div>
    </div>
  );
};

export default ActionModal;
