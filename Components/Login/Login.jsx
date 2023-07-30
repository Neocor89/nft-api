import axios from "axios";
import React, { useState } from "react";

//: INTERNAL IMPORTS
import { FormSVG, Lock } from "../SVG";
import Style from "./Login.module.css";
import { Notification } from "../index";
import Image from "next/image";
import imagesNFT from "../Image/index";


const Login = ({ setLogin, setSignup, notification, setNotification }) =>{

  //: API LOGIN
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleFieldChange = (filedName, e) => {
    setUser({...user, [filedName]: e.target.value });
  };

  const apiLogin = async (e) => {
    e.preventDefault();

    if (user.email == "" || user.password == "") {
      return setNotification("Please provide email and Password!");
    }

    try {
      const response = await axios({
        method: "POST",
        url: `/api/v1/user/login`,
        withCredentials: true,
        data: {
          email: user.email,
          password: user.password,
        },
      });
      if (response.data.status == "success") {
        setNotification("User successfully Login");
        localStorage.setItem("NFTApi Token", response.data.token);
        setLogin(false);
        setNotification("");
        window.location.reload();
      } else if (response.data.status == "fail") {
        setNotification(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <div class={Style.container}>
      <div class={Style.content}>
        <form class={Style.form}>
          <p id="heading" class={Style.heading}>
            Login
          </p>
          <div class={Style.field}>
            <FormSVG styleClass={Style.input_icon} />
            <input 
              type="text" 
              class={Style.input_field} 
              placeholder="Your awesome email"
              autoComplete="off"
              onChange={(e) => handleFieldChange("email", e)}
            />
          </div>
          <div class={Style.field}>
            <Lock styleClass={Style.input_icon} />
            <input 
               type={showPassword ? 'text' : 'password'} 
              required
              class={Style.input_field}
              autoComplete="off"
              onChange={(e) => handleFieldChange("password", e)}
            />
            <span>Your awesome password</span>
            <Image 
              onClick={() => setShowPassword(!showPassword)}
              width={25}
              height={18}
              style={{marginRight: '20px'}}
              src={showPassword ? imagesNFT.Hide : imagesNFT.Show}
            />
          </div>
          <div class={Style.btn_container}>
          <button 
                class={Style.first_button}
                onClick={() => setLogin(false)}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Close&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <button 
                class={Style.second_button}
                onClick={() => (setSignup(true), setLogin(false))}
              >
                Sign Up
              </button>
          </div>
          <button 
            class={Style.third_button}
            onClick={(e) => apiLogin(e)}
          >
            Login
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

export default Login;
