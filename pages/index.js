import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

//: INTERAL IMPORTS
import {
  Card,
  Upload,
  Button,
  Profile,
  Header,
  Footer,
  Notification,
  Logo,
  Filter,
  Form,
} from "../Components";
import { useStateContext } from "../Context/NFTs";
import images from "../Components/Image/client/index";

const Home = () => {
  //: STATE VARIABLES
  const {
    address,
    disconnect,
    contract,
    connect,
    userBalance,
    UploadImage,
    getUploadImages,
    setLoading,
    loading,
    //: API
    getAllNftsAPI,
  } = useStateContext();

  const [openProfile, setOpenProfile] = useState(false);
  const [closeForm, setCloseForm] = useState(true);
  const [file, setFile] = useState(null);

  return <div>START BUILD INDEX PAGE</div>;
};

export default Home;
