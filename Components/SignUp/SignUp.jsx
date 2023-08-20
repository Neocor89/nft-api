import axios from "axios";
import React, { useState } from "react";
import Image from "next/image";

//:INTERNAL IMPORTS
import Style from "./SignUp.module.css";
import { FormSVG, Lock } from "../SVG";
import { Notification } from "../index";
import imagesNFT from "../Image/index";

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
      user.email == "" || 
      user.password == "" || 
      user.name == "" || 
      user.passwordConfirm == ""
    ) {
      return setNotification("Please complete all fields!");
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
        setNotification("Your account his successfully created");
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

  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <>
      <div className={Style.container}>
        <div className={Style.content}>
          <form className={Style.form}>
            <p id="heading" className={Style.heading}>
              SignUp
            </p>
            <div className={Style.field}>
              <FormSVG styleClass={Style.input_icon} />
              <input 
                type="text" 
                className={Style.input_field} 
                placeholder="name"
                autoComplete="off"
                onChange={(e) => handleFormFieldChange("name", e)}
              />
            </div>
            <div className={Style.field}>
            <FormSVG styleClass={Style.input_icon} />
              <input 
                type="email" 
                className={Style.input_field} 
                placeholder="Your awesome email"
                autoComplete="off"
                onChange={(e) => handleFormFieldChange("email", e)}
              />
            </div>
            <div className={Style.field}>
            <Lock styleClass={Style.input_icon} />
              <input 
                type={showPassword ? 'text' : 'password'} 
                required
                className={Style.input_field} 
                autoComplete="off"
                onChange={(e) => handleFormFieldChange("password", e)}
              />
              <span>Your awesome password</span>
            <Image 
              onClick={() => setShowPassword(!showPassword)}
              width={25}
              height={17}
              style={{marginRight: '20px'}}
              src={showPassword ? imagesNFT.Hide : imagesNFT.Show}
            />
            </div>
            <div className={Style.field}>
              <Lock styleClass={Style.input_icon} />
              <input 
                type="text" 
                className={Style.input_field}
                placeholder="passwordConfirm"
                onChange={(e) => handleFormFieldChange("passwordConfirm", e)}
              />
            </div>

            <div className={Style.btn_container}>
              <button 
                className={Style.first_button}
                onClick={() => (setLogin(true), setSignup(false))}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <button 
                className={Style.second_button}
                onClick={() => setSignup(false)}
              >
                Close
              </button>
            </div>
              <button 
                className={Style.third_button}
                onClick={(e) => createAccount(e)}
              >
                SignUp
              </button>
          </form>
        </div>
      </div>
         {notification != "" && (
        <Notification
        notification={notification}
          setNotification={setNotification}
        />
      )}
    </>
  );
};

export default SignUp;
