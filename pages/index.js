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
        const image = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
        await UploadImage({
          ...imageInfo,
          image: image,
          category: category,
        });
        setFile(null);
      } catch (err) {
        console.log(err);
      }
    }
    setFile(null);
  };
  const retrievFile = (e) => {
    const data = e.target.files[0];

    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    e.preventDefault();
  };

  //: RETRIEVE AN IMAGE
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setDisplay(URL.createObjectURL(event.target.files[0]));
    }
  };

  // TODO
  //+ RESTART HERE ADDING COMPONENTS
  return (
    <div className="home">
      <Header notification={notification} setNotification={setNotification} />
      <div className="header">
        <h1>Create 100 NFTs for free</h1>
      </div>

      {/* UPLOAD COMPONENT */}
      <div className="upload">
        <Upload
          onImageChange={onImageChange}
          display={display}
          address={address}
          retrieveFile={retrievFile}
        />
        <div className="upload_info">
          <h1>Welcome to NFTs IPFS Upload</h1>
          <p>
            This software allows you to distribute any type of media in total
            security, without any restrictions that might limit your creative
            freedom.
          </p>
          <div className="avatar">
            <Button
              address={address}
              disconnect={disconnect}
              connect={connect}
              file={file}
            />

            {address && (
              <p>
                <Image
                  className="avatar_img"
                  src={images.client10}
                  width={50}
                  height={50}
                  onClick={() => setOpenProfile(true)}
                />
              </p>
            )}
          </div>
        </div>
      </div>
      <h1 className="sub_title">All NFTs of the Marketplace</h1>

      {/* CARD COMPONENT */}
      {allImages.length == 0 ? (
        <Logo />
      ) : allImages == undefined ? (
        <h1 className="no_images">No images available 😯</h1>
      ) : (
        <>
          <Filter
            setImagesCopy={setImagesCopy}
            imagesCopy={imagesCopy}
            setAllImages={setAllImages}
            allImages={allImages}
            oldImages={oldImages}
            activeSelect={activeSelect}
            setActiveSelect={setActiveSelect}
          />
          <div className="card">
            {allImages.map((image, i) => (
              <Card
                key={i + 1}
                index={i}
                image={image}
                setNotification={setNotification}
              />
            ))}
          </div>
        </>
      )}

      {/* FOOTER COMPONENT */}
      <Footer />

      {/* NOTIFICATION COMPONENT */}
      {notification != "" && (
        <Notification
          notification={notification}
          setNotification={setNotification}
        />
      )}

      {/* PROFILE COMPONENT */}
      {openProfile && (
        <div className="profile">
          <Profile
            setOpenProfile={setOpenProfile}
            userBalance={userBalance}
            address={address}
          />
        </div>
      )}

      {/* LOADER COMPONENT */}
      {loading && (
        <div className="loader">
          <Logo />
        </div>
      )}

      {/* FORM */}
      {file && closeForm && (
        <div className="form">
          <div className="form_inner">
            <Form
              setFile={setFile}
              setDisplay={setDisplay}
              handleFormFieldChange={handleFormFieldChange}
              handleSubmit={handleSubmit}
              setCategory={setCategory}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
