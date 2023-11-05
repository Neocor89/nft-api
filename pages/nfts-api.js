import Link from "next/link";
import React from "react";

//: INTERNAL IMPORTS
import Images from "../Components/Image/index";
import Image from "next/image";

const nftsapi = () => {
  const images = Object.values(Images).slice(0, 6);

  return (
    <div>
      <Link href="/">Home</Link>

      <div>
        {images.map((allImages, index) => (
          <Image
            key={index}
            src={allImages}
            alt={`Description de l'image`}
            width={300}
            height={300}
          />
        ))}
      </div>
    </div>
  );
};

export default nftsapi;
