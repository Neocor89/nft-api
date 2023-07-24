import axios from "axios";
import React, { useState } from "react";

//:INTERNAL IMPORTS
import Style from "./SignUp.module.css";
import { FormSVG, Lock } from "../SVG";
import Notification from "../index";

const SignUp = ({ setLogin, setSignup, notification, setNotification }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setUser({ ...user, [fieldName]: e.target.value });
  };

  const createAccount = async (e) => {
    e.preventDefault();
    if (
      user.name == "" || 
      user.email == "" || 
      user.password == "" || 
      user.passwordConfirm
    ) {
      return setNotification("Please provide your all awesome detail!");
    }
    setNotification("Wait your AWESOME account is being created...");
    try {
      const response = await axios({
        method: "POST",
        url: `/api/v1/user/signup`,
        withCredentials: true,
      })
    } catch (error) {
      console.error(error);
    }
  }
  return <div>SignUp</div>;
};

export default SignUp;
