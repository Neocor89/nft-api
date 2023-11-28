import React from "react";
import Image from "next/image";

export default function AboutCreator({image, about, name, logo}) {
  return (
    <div className="about_nfts-container">
          <Image
            src={image}
            alt={`About NFTS creator`}
            className="about_nfts-image"
          />
          <section className="about_nfts-content">
            <h1 className="about_title">
              {about}
            </h1>
            <div className="creator_content">
              <Image
                src={logo}
                alt={`About NFTS creator`}
                className="creator_logo-nfts"
                width={45}
                height={45}
              />
              <p className="creator">{name}</p>
            </div>
          </section>
        </div>
    );
};
