import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//: INTERNAL STYLE AND COMPONENTS IMPORTS
import Style from "./Card.module.css";
import images from "../Image/client/index";

const Card = ({ setNotification, image, index }) => {
  return <div className={Style.card}>
    <div className={Style.content}>
      <a href={`/image/${image.imageID}`}>
        <p>
          
          <Image
            className={Style.image}
            src={image.image} 
            alt={image.owner}
            width={250}
            height="200" 
          />
        </p>
      </a>
      <span className={Style.para}>
        <Image 
          className="avatar_image"
          src={images[`client${index + 1}`]}
          width={50}
          height={50}
        />

        <small
          className={Style.para_small}
          onClick={() => (
            setNotification("Successfully Copied!"),
            navigator.clipboard.writeText(image.owner)
          )}
        >
          {image.owner.slice(0, 25)}...
        </small>
      </span>

      <span>
        CreatedAt : {new Date(image.createdAt * 1000).toDateString()}
        <small className={Style.number}>#{image.imageID}..</small>
      </span>
        <small className={Style.para}>{image.description.slice(0, 80)}..</small>
        <button
          onClick={() => (
            setNotification("Image URL is Successfully Copied!"),
            navigator.clipboard.writeText(image.image)
          )}
          className={Style.button}
        >
          Copy URL
        </button>
    </div>
  </div>;
};

export default Card;
