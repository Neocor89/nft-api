import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// INTERNAL STYLE AND COMPONENTS IMPORTS
import Style from "./Card.module.css";
import images from "../Image/client/index";
import imagesNFT from "../Image/index";

const Card = ({ setNotification, image, index }) => {
  return <div className={Style.card}>
    <div className={Style.content}>
      {/* <a href={`/image/${image.imageID}`}> */}
      <a href={`/image/1`}>
        <p>
          {/* <img  */}
          <Image
            className={Style.image}
            // src={image.image} 
            src={imagesNFT.img1} 
            // alt={image.owner}
            width={250}
            height="200" 
          />
        </p>
      </a>
      <span className={Style.para}>
        <Image 
          className="avatar_image"
          // src={images[`client${index + 1}`]}
          src={images[`client1`]}
          width={50}
          height={50}
        />

        <small
          className={Style.para_small}
          onClick={() => (
            setNotification("Successfully Copied!"),
            // navigator.clipboard.writeText(image.owner)
            navigator.clipboard.writeText("Successfully Copied!")
          )}
        >
          0xffeakgampjwdi...
          {/* {image.owner.slice(0, 25)}... */}
        </small>
      </span>

      <span>
        {/* CreatedAt : {new Date(image.createdAt * 1000).toDateString()} */}
        CreatedAt : Juily 07 2023
        {/* <small className={Style.number}>#{image.imageID}..</small> */}
        <small className={Style.number}># 1..</small>
      </span>
        {/* <small className={Style.para}>{image.description.slice(0, 80)}..</small> */}
        <small className={Style.para}>NFT most popular bofore APES MONKEYS..</small>
        <button
          onClick={() => (
            setNotification("Image URL is Successfully Copied!"),
            // navigator.clipboard.writeText(image.image)
            navigator.clipboard.writeText("Image URL is Successfully Copied!")
          )}
          className={Style.button}
        >
          Copy URL
        </button>
    </div>
  </div>;
};

export default Card;
