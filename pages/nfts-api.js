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

        <div className="about_nfts-container">
          <Image
            src={AboutInfo}
            alt={`About NFTS creator`}
            className="about_nfts-image"
          />
          <section className="about_nfts-content">
            <h1 className="about_title">
              Welcome to the NFT market, where you can discover the latest
              creations and NFTs designers.
            </h1>
            <div className="creator_content">
              <Image
                src={AboutCreator}
                alt={`About NFTS creator`}
                className="creator_logo-nfts"
                width={45}
                height={45}
              />
              <p className="creator">Ben webdeveloper</p>
            </div>
          </section>
        </div>

        <div className="image_container">
          {images.map((allImages, index) => (
            <div className="nfts_box-image" key={index}>
              <Image
                src={allImages}
                alt={`Description de l'image`}
                width={320}
                height={320}
                className="nfts_image"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default nftsapi;
