import { saveAs } from "file-saver";
import React, { useState } from "react";

//: INTERNAL IMPORTS
import Style from "./Product.module.css";
import BTNStyle from "../Button/Button.module.css";
import images from "../Image/index";
import client from "../Image/client";
import { Donate } from "../index";


const Product = ({
  setNotification, setSupport, 
  donateAmount, setLoading, image
}) => {
  const handleClick = () => {
    let url = `${image?.imageURL}`;
    saveAs(url, `${image?.title}`);
  };

  return (<div></div>);
};

export default Product;
