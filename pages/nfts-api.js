import Link from "next/link";
import React from "react";

//: INTERNAL IMPORTS
import Images from "../Components/Image/index";
import Image from "next/image";
import AboutInfo from "/Components/Image/22.jpg";
import Creator from "/Components/Image/23.jpg";

//: COMPONENTS IMPORTS
import AboutCreator from "../Components/AboutCreator/AboutCreator";

const nftsapi = () => {
  const images = Object.values(Images).slice(0, 9);

  return (
    <>
      <div className="nfts-api_container">
        <Link href="/" className="home_link">
          Home
        </Link>

        {/* TODO : 
        Modify the component for displaying all information of Creators and logo creators
        Grab the saving content for creators presentations and complete the modification process */}
        <AboutCreator
          image={AboutInfo}
          about="Welcome to the NFT market, where you can discover the latest
          creations and NFTs designers."
          logo={Creator}
          name="Ben webdeveloper"
        />

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
