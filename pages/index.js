//: EXTERNAL PACKAGE IMPORTS
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

  //: STATE DATA
  const [openProfile, setOpenProfile] = useState(false);
  const [closeForm, setCloseForm] = useState(true);
  const [file, setFile] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const [imagesCopy, setImagesCopy] = useState([]);

  //: STATE DISPLAY
  const [notification, setNotification] = useState("");
  const [display, setDisplay] = useState(null);
  const [activeSelect, setActiveSelect] = useState("Old Images");

  //: FETCH DATA
  const oldImages = [];

  const fetchImages = async () => {
    const images = await getUploadImages();
    setAllImages(images);

    //: API NFTS
    const apiImages = await getAllNftsAPI();
  };
  useEffect(() => {
    if (contract) fetchImages();
  }, [address, contract]);

  if (allImages.length == 0) {
    console.log("Loading...");
  } else {
    allImages.map((img) => oldImages.push(img));
  }

  //: FETCH DATA OF IMAGE
  const [category, setCategory] = useState("");
  const [imageInfo, setImageInfo] = useState({
    title: "",
    description: "",
    email: "",
    category: "",
    image: "",
  });

  const handleFormFieldChange = (fieldName, event) => {
    setImageInfo({ ...imageInfo, [fieldName]: event.target.value });
  };

  //: UPLOAD
  const handleSubmit = async (event) => {
    event.preventDefault();
    setCloseForm(false);
    setLoading(true);
    //: FILE AND FIELD
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "POST",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: "not-key",
            pinata_secret_api_key: `not-key`,
            "Content-Type": "multipart/form-data",
          },
        });
        // TODO
        // + RESTART HERE
      } catch (err) {
        console.log(err);
      }
    }
  };

  return <div>START BUILD INDEX PAGE</div>;
};

export default Home;
