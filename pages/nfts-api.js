//: INTERNAL IMPORTS
import Images from "../Components/Image/index";
import Image from "next/image";

//: COMPONENTS IMPORTS
import AboutCreator from "../Components/AboutCreator/AboutCreator";
import { Header } from "../Components";

const nftsapi = () => {
  const images = Object.values(Images).slice(0, 11);
  const imagesTwo = Object.values(Images).slice(11, 15);

  return (
    <>
      <div className="nfts-api_container">
        <Header />
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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <AboutCreator
          image={Images.img25}
          about="I'm a passionate NFT creator who seeks to explore the boundaries of digital art. Discover my unique creations and be inspired!"
          logo={Images.img16}
          name="Ben webdeveloper"
        />
        <div className="image_container">
          {imagesTwo.map((allImages, index) => (
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
