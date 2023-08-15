import { saveAs } from "file-saver";
import React, { useState } from "react";

//: INTERNAL IMPORTS
import Style from "./Product.module.css";
import BTNStyle from "../Button/Button.module.css";
import images from "../Image/index";
import client from "../Image/client";
import { Donate } from "../index";


const Product = ({
  setNotification, setSupport, 
  donateAmount, setLoading, image
}) => {
  const handleClick = () => {
    let url = `${image?.imageURL}`;
    saveAs(url, `${image?.title}`);
  };

  const [donate, setDonate] = useState(false);

  return (
    <div className={Style.image_container}>
      <div className={Style.image_content}>
        <img 
          className={Style.image} 
          src={image?.imageURL} 
          alt="NFT image"
        />
      </div>

      <div className={Style.details_container}>
        <div className={Style.details_content}>
          <h1>{image?.title}</h1>
          <p>{image?.description}</p>

          <p className={Style.details_img_info}> {/* info */}
            <span>Category: {image?.category}</span> {""}{" "}
            <span>Image ID: # {image?.imageId}</span> {""}{" "}
            <span>
              CreatedAt: {new Date(image?.createdAt * 1000).toDateString()}
            </span>
          </p>

          <p className={Style.details_img_info}> {/* info */}
            <span>Donation:{""} {image?.fundRaised} MATIC</span>{" "}{""}{" "}
          </p>

          <p>Contact Creator: {image?.email}</p>
            <span className={Style.details_creator}> {/* para */}
              <Image 
                className="avatar_img_creator"
                src={client[`client${1}`]} 
                width={40}
                height={40}
              />

              <small 
                className={Style.creator_notification}
                onClick={() => (
                  setNotification("NFT image successfully copied")
                )}
              > {/* para_small */}
                {image?.creator.slice(0,30)}..
              </small>
            </span>
        </div>

      </div>
    </div>
  );
};

export default Product;
