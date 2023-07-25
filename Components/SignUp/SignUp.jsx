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
      return setNotification("Please provide your all detail!");
    }
    setNotification("Wait your AWESOME account is being created...");
    try {
      //: API CALL IMPLEMENTATION
      const response = await axios({
        method: "POST",
        url: `/api/v1/user/signup`,
        withCredentials: true,
        data: {
          name: user.name,
          email: user.email,
          password: user.password,
          passwordConfirm: user.passwordConfirm
        },
      });
      if (response.data.status == "success") {
        setNotification("Your AWESOME account his successfully created");
        localStorage.setItem("NFTApi Token", response.data.token);
        setSignup(false);
        setNotification("");
        window.location.reload();
      } else {
        setNotification("Something went wrong, check and try again later")
      }
    } catch (error) {
      console.error(error);
    }
  };
  // TODO
  //+ RESTART HERE
  return (
    <>
      <div class={Style.container}>
        <div class={Style.content}>
          <form class={Style.form}>
            <p className={Style.heading}>
              <SignUp />
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
