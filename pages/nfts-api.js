import Link from "next/link";
import React from "react";

//: INTERNAL IMPORTS
import Images from "../Components/Image/index";
import Image from "next/image";

//: COMPONENTS IMPORTS
import AboutCreator from "../Components/AboutCreator/AboutCreator";

const nftsapi = () => {
  const images = Object.values(Images).slice(0, 11);

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
          image={Images.img22}
          about="Welcome to the NFT market, where you can discover the latest
          creations and NFTs designers."
          logo={Images.img23}
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

        <AboutCreator
          image={Images.img25}
          about="I'm a passionate NFT creator who seeks to explore the boundaries of digital art. Discover my unique creations and be inspired!"
          logo={Images.img16}
          name="Ben webdeveloper"
        />
      </div>
    </>
  );
};

export default nftsapi;
