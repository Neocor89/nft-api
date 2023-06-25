import { axios } from "axios";
import React, { useState, useEffect, useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useDisconnect,
  useMetamask,
  useSigner,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0xcf092Ac214EF30adaF79582842f4EcD563Ed3304"
  );

  const address = useAddress();
  const connect = useMetamask();

  //: FROM FRONTEND
  const disconnect = useDisconnect();
  const signer = useSigner();
  const [userBalance, setUserBalance] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const balance = await signer?.getBalance();
      const userBalance = address
        ? ethers.utils.formatEther(balance?.toString())
        : "";
      setUserBalance(userBalance);
    } catch (error) {
      console.log(error);
    }
  };

  //: FETCH USER INFORMATION
  useEffect(() => {
    fetchData();
  }, []);

  // CONTRACT FUNCTION

  //: UPLOAD NFT IMAGE
  const UploadImage = async (imageInfo) => {
    const { title, description, email, category, image } = imageInfo;
    try {
      const listingPrice = await contract.call("listingPrice");

      const createNFTs = await contract.call(
        "uploadIPFS",
        [address, image, title, description, email, category],
        {
          value: listingPrice.toString(),
        }
      );

      //: API CALL
      const response = await axios({
        method: "POST",
        url: `/api/v1/NFTs`,
        data: {
          title: title,
          description: description,
          category: category,
          image: image,
          address: address,
          email: email,
        },
      });

      console.log(response);
      console.info("Contract call success!", createNFTs);

      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.error("Contract calling failded!", error);
    }
  };

  //: GET DATA IN CONTRACT
  const getUploadedImages = async () => {
    //: GET ALL IMAGES
    const images = await contract.call("getAllNFTs");

    //: TOTAL UPLOAD IMAGES
    const totalUpload = await contract.call("imagesCount");

    //: LISTING PRICE OF IMAGES
    const listingPrice = await contract.call("listingPrice");

    //: GET DETAIL OF ALL IMAGES
    const allImages = images.map((image, i) => ({
      owner: images.creator,
      title: images.title,
      description: images.description,
      email: images.email,
      category: images.category,
      fundraised: images.fundraised,
      image: images.image,
      imageID: images.id.toNumber(),
      createdAt: images.timestamp.toNumber(),
      listedAmount: ethers.utils.formatEther(listingPrice).toString(),
      totalUpload: totalUpload.toNumber(),
    }));

    return allImages;
  };

  //: GET ONE IMAGE
  const singleImage = async (id) => {
    try {
      const data = await contract.call("getImage", [id]);

      const image = {
        title: data[0],
        description: data[1],
        email: data[2],
        category: data[3],
        fundraised: ethers.utils.formatEther(data[4].toString()),
        creator: data[5],
        imageURL: data[6],
        createdAt: data[7].toNumber(),
        imageID: data[8].toNumber(),
      };

      return image;
    } catch (error) {
      console.error(error);
    }
  };

  const donateFund = async ({ amount, Id }) => {
    try {
      console.log(amount, Id);
      const transaction = await contract.call("donateToImage", [Id], {
        value: amount.toString(),
      });
      console.log(transaction);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //: GET DATA FORM API
  const getAllNftsAPI = async () => {
    const response = await axios({
      method: "GET",
      url: "/api/v1/NFTs",
    });
    console.log(response);
  };

  //: GET ONE NFTS API
  const getSingleNftsAPI = async (id) => {
    const response = await axios({
      method: "GET",
      url: `/api/v1/NFTs${id}`,
    });
    console.log(response);
  };

  return (
    <StateContext.Provider
      value={{
        //: CONTRACT DATA
        address,
        contract,
        connect,
        disconnect,
        userBalance,
        setLoading,
        loading,
        //: FUNCTION
        UploadImage,
        getUploadedImages,
        donateFund,
        singleImage,
        //: API
        getAllNftsAPI,
        getSingleNftsAPI,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
