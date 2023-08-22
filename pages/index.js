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

const index = () => {
  return <div>START BUILD INDEX PAGE</div>;
};

export default index;
