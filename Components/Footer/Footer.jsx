import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { 
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin, 
  TiSocialYoutube, 
  TiSocialInstagram
} from "react-icons/ti";

//: INTERNAL IMPORTS CSS
import Style from "./Footer.module.css";
import { Logo } from "../index";

const Footer = () => {

  const menuList = ["Home", "About", "Product", "Contact", "ICO", "Menbership"];
  return (
    <div className={Style.footer}>
      <div className={Style.footer_container}>
        <div className={Style.footer_container_social}>
          <a href="/">
            <Logo />
          </a>
          <p className={Style.footer_container_social_info}>
            Digital Marketplace for NFT creators for switch anf changong your Crypto creation
          </p>
        <div className={Style.footer_social}>
        <a href="https://www.facebook.com/">
          <TiSocialFacebook className={Style.social_icons} />
        </a>
        <a href="https://www.linkedin.com/in/benoit-cortes/">
          <TiSocialLinkedin className={Style.social_icons} />
        </a>
        <a href="https://twitter.com/bendevweb89">
          <TiSocialTwitter className={Style.social_icons} />
        </a>
        <a href="https://www.youtube.com/@bendevweb89">
          <TiSocialYoutube className={Style.social_icons} />
        </a>
        <a href="https://www.instagram.com/">
          <TiSocialInstagram className={Style.social_icons} />
        </a>
      </div>
      </div>

      <div className={Style.footer_container_help}>
        <h3>Help Center</h3>
        <div className={Style.menu}>
          {menuList.map((elem, index) => (
            <p key={index + 1}>{elem}</p>
          ))}
        </div>
      </div>

      <div className={Style.subscribe}>
        <h3>Subscribe</h3>

        <div className={Style.subscribe_container}>
          <input 
            type="email" 
            name="Email Box" 
            placeholder="Your_awesome-email *" 
          />
          <RiSendPlaneFill className={Style.subscribe_container_email} />
        </div>
        <div className={Style.subscribe_container_info}>
          <p>Discover, collect, and sell your best NFT or all your collection OpenSea</p>
        </div>
      </div>
      </div>
    </div>

  );
};

export default Footer;
