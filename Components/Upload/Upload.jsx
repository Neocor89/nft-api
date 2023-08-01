import Image from "next/image";
import React from "react";

//: INTERNAL IMPORTS
import { Delete, File, UploadIcon } from "../SVG";
import Style from "./Upload.module.css";


const Upload = ({ onImageChange, display, retrieveFile }) => {
  return (
    <div className={Style.container}>
      <div className={Style.header}>
        {display == null ? (
          <>
            <UploadIcon />
            <p>Browse file Upload!</p>
          </>
        ): (
          <p>
            <Image 
              className={Style.image}
              src={display}
              alt="NFT image"
              width={200}
              height={200}
            />
          </p>
        )}
      </div>
      <label htmlFor="file" className={Style.footer}>
        <File />
        <p>You have not selected a file!</p>
        <Delete />
      </label>
      <input 
        id="file"
        type="file" 
        placeholder="Add your awesome image"
        onChange={(e) => (onImageChange(e), retrieveFile(e))}
        className={Style.file}
      />
    </div>
  );
};

export default Upload;
