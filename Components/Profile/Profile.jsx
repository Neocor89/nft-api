import React from "react";
import Image from "next/image";

//: INTERNAL CSS IMPORT
import Style from "./Profile.module.css";
import { YouTube, Twitter, Instagram, GitHub } from "../SVG";
import images from "../Image/client/index";

const Profile = ({ setOpenProfile, userBalance, address }) => {
  return (
    <>
    <div className={Style.container}>
    <div className={Style.image}>
        <Image 
          className="avatar_image"
          style={{borderRadius: "50px"}}
          src={images.client1}
          width={80}
          height={80}
          onClick={() => setOpenProfile(true)}
        />
      </div>

      <span>{address.slice(0, 25)}</span>
      <p className={Style.info}>
        {userBalance} HI, and Welcome to the NFTs place... Discover a platform that offers free decentralized storage and the ability to share your NFTs (non-fungible tokens) over IPFS (InterPlanetary File System) between creators. NFT data is stored by NFT. Storage and is accessible over the decentralized IPFS network.  
      </p>

      <div className={Style.share_container}>
        <a href="https://github.com/Neocor89">
          <GitHub />
        </a>
        <a href="https://twitter.com/Bendevweb89">
          <Twitter />
        </a>
        <a href="https://instagram.com">
          <Instagram />
        </a>
        <a href="https://www.youtube.com/@bendevweb89">
          <YouTube />
        </a>
      </div>
      <button 
        className={Style.button}
        onClick={() => setOpenProfile(false)}
      >
        Close
      </button>
    </div>
    </>
  );
};

export default Profile;
