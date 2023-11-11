import Link from "next/link";
import React from "react";

//: INTERNAL IMPORTS
import Images from "../Components/Image/index";
import Image from "next/image";
import AboutInfo from "/Components/Image/22.jpg";
import AboutCreator from "/Components/Image/23.jpg";

const nftsapi = () => {
  const images = Object.values(Images).slice(0, 6);

  return (
    <>
      <div className="nfts-api_container">
        <Link href="/" className="home_link">
          Home
        </Link>

        <div className="image_container">
          {images.map((allImages, index) => (
            <Image
              key={index}
              src={allImages}
              alt={`Description de l'image`}
              width={300}
              height={300}
              className="nfts_image"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default nftsapi;
