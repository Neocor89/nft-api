import axios from "axios";
import React, { useState } from "react";

//: INTERNAL IMPORTS
import { FormSVG, Lock } from "../SVG";
import Style from "./Login.module.css";
import { Notification } from "../index";


const Login = ({ setLogin, setSignup, notfication, setNotification }) =>{

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
              type="text" 
              class={Style.input_field}
              autoComplete="off"
              placeholder="Your awesome password"
              onChange={(e) => handleFieldChange("password", e)}
            />
          </div>
          <div class={Style.button}>
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

    //: NOTIFICATION PART
    </>
  );
};

export default Login;
