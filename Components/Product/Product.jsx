import { saveAs } from "file-saver";
import React, { useState } from "react";

//: INTERNAL IMPORTS
import Style from "./Product.module.css";
import BTNStyle from "../Button/Button.module.css";
import images from "../Image/index";
import client from "../Image/client";
import { Donate } from "../index";
import Image from "next/image";


const Product = ({
  setNotification, 
  setSupport, 
  donateAmount, 
  setLoading, 
  image
}) => {
  const handleClick = () => {
    let url = `${image?.imageURL}`;
    saveAs(url, `${image?.title}`);
  };

  const [donate, setDonate] = useState(false);

  return (
    <div className={Style.image_container}> 
      <div className={Style.image_content}> 
        {/* <Image 
          className={Style.image} 
          src={images.img4} 
          alt="NFT image"
        />  */}
        <img 
          className={Style.image} 
          src={image?.imageURL} 
          alt="NFT image"
        /> 
      </div>

      {/* INFO IMAGE SECTION */}
      <div className={Style.detail_container}> 
        <div className={Style.details_content}> 
          <h1>{image?.title}</h1>
          <p>{image?.description}</p>

          <p className={Style.details_img_info}> 
            <span>Category: {image?.category}</span> {""}{" "}
            <span>Image ID: # {image?.imageId}</span> {""}{" "}
            <span>
              CreatedAt: {new Date(image?.createdAt * 1000).toDateString()}
            </span>
          </p>

          <p className={Style.details_img_info}> 
            <span>
              Donation:{""} {image?.fundRaised} MATIC
            </span>{" "}{""}{" "}
          </p>

          <p>Contact Creator: {image?.email}</p>
            <span className={Style.details_creator}>
              <Image 
                className="avatar_img_creator"
                src={client[`client${1}`]} 
                width={40}
                height={40}
              />

              <small 
                className={Style.creator_notification}
                onClick={() => (
                  setNotification("Successfully copied"),
                  navigator.clipboard.writeText(image?.creator)
                )}
              > 
                {image?.creator.slice(0,30)}..
              </small>
            </span>
        </div>

        <button
          onClick={() => (
            setNotification("NFT Image URL is successfully copied"),
            navigator.clipboard.writeText(image?.imageURL)
          )}
          className={BTNStyle.button}
        >

          <span className={`${BTNStyle.button_content} ${BTNStyle.btn}`}>
            Copy Image URL{" "}
          </span>
        </button>

        {/* DOWLOAD SECTION */}
        <span className={Style.section}></span>
        <button 
          onClick={() => (
            navigator.clipboard.writeText(
              setNotification("Thanks for downloading!")
            )
          )}
          className={BTNStyle.button}
        >
          <span
            onClick={handleClick} 
            className={`${BTNStyle.button_content} ${BTNStyle.btn}`}
          >
            Dowloading Image{" "}
          </span>
        </button>

        {/* DONATE SECTION */}
        <span className={Style.section}></span>
        <button 
          onClick={() => setDonate(true)}
          className={BTNStyle.button}
        >
          <span 
            className={`${BTNStyle.button_content} ${BTNStyle.btn}`}
          >
            Donate
          </span>
        </button>
      </div>

      {donate && (
        <div className={Style.form}>
          <div className={Style.form_content}>
          <Donate 
            setLoading={setLoading}
            donateAmount={donateAmount}
            setDonate={setDonate}
            setSupport={setSupport}
          />
          </div> 
        </div>
      )}
    </div>
  );
};

export default Product;
