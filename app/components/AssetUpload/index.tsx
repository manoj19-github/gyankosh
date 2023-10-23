"use client";
import React, { FC, useCallback } from "react";
import { CldUploadWidget, CldVideoPlayer } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";
import Image from "next/image";
import styles from "./assetUpload.module.css";
import { AiOutlineClose } from "react-icons/ai";
import "next-cloudinary/dist/cld-video-player.css";

declare global {
  var cloudinary: any;
}

interface ImageUploadContainerProps {
  onChange: (value: string) => void;
  value: string;
}
const ImageUploadContainer: FC<ImageUploadContainerProps> = ({
  onChange,
  value,
}): JSX.Element => {
  const imagesExtension = ["png", "jpeg", "jpg"];
  const videoExtensiion = ["mp4"];
  const handleUpload = useCallback(
    (result: any) => {
      console.log("result : ", result.info.secure_url);
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  const showWidget = () => {
    const widget = window.cloudinary?.createUploadWidget(
      {
        cloudName: `${process.env.NEXT_PUBLIC_COUDINARY_CLOUD_NAME}`,
        uploadPreset: `t5cnuesc`,
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          //console.log(result.info.url);
          console.log("result 1: ", result.info.secure_url);
          handleUpload(result);
          widget?.close();
        }
      }
    );
    widget?.open();
  };

  const handleOpen = (e: any) => {
    e.preventDefault();
    console.log("open hit");
    showWidget();
  };

  return (
    <>
      <CldUploadWidget
        onUpload={handleUpload}
        uploadPreset="t5cnuesc"
        options={{
          maxFiles: 1,
        }}
      >
        {({ open }) => {
          return (
            <div
              onClick={(e) => handleOpen(e)}
              //   className="relative cursor-pointer hover:opacity hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-700"
              className={styles.assetContainer}
            >
              <TbPhotoPlus size={50} />
              <div className={styles.uploadBtn}>click to upload</div>
            
              {!!value ? (
                value.split(".").length > 0 &&
                imagesExtension.includes(
                  value.split(".")[value.split(".").length - 1]
                ) ? (
                  <div className={styles.imageContainer}>
                    <div className={styles.closeImage}>
                      <AiOutlineClose onClick={() => onChange("")} />
                    </div>
                    <Image
                      alt="upload"
                      fill
                      style={{ objectFit: "cover" }}
                      src={value}
                    />
                  </div>
                ) : value.split(".").length > 0 &&
                  videoExtensiion.includes(
                    value.split(".")[value.split(".").length - 1]
                  ) ? (
                  <>
                    <div
                className={styles.VideoContainer}
                onClick={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                 
                <video className={styles.video} controls autoPlay loop >
                  <source
                    src={`https://res.cloudinary.com/dplwrlhqo/video/upload/v1698042014/yrl4tzbkyhtnknveughy.mp4`}
                    type="video/mp4"
                  />
                </video>
                <div className={styles.closeImage2}>
                      <AiOutlineClose onClick={() => onChange("")} />
                    </div>
                
              </div>
               
                  </>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default ImageUploadContainer;
