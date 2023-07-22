import React, { useEffect, useState } from "react";
import Link from "next/link";

//: INTERNAL IMPORTS
import Style from "./Header.module.css";
import { Logo, Login, SignUp } from "../index";


const Header = ({ notification, setNotification }) => {
  const menuList = [
    {
      name: 'Home',
      link: "/",
    },
    {
      name: 'About',
      link: "#",
    },
    {
      name: 'API',
      link: "/nfts-api",
    },
  ];

  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState("");

  const openModel = (el) => {
    if (el == "Login") {
      setLogin(true);
      setSignup(false);
    } else if (el == "Signup") {
      setSignup(true);
      setLogin(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("NFTApi token");
    setToken(token);
  }, []);
  
  const logout = () => {
    localStorage.removeItem("NFTApi token");
    window.location.reload();
  }

  return (
    <>
    <div className={Style.header}>
      <Logo />
      <div className={Style.menu}>
        {menuList.map((el, i) => (
          <Link className={Style.link} href={el.href} key={i + 1}>
            <p>{el.name}</p>
          </Link>
        ))}
        {token ? (
          <p onClick={() => logout()}>Logout</p>
        ) : (
          <>
          <p onClick={() => openModel("Login")}>Login</p>
          <p onClick={() => openModel("Signup")}>SignUp</p>
          </>
        ) }
      </div>
    </div>

    {/* SIGNUP */}
    {signup && (
      <div className={Style.form}>
      <div className={Style.form_inner}>
      <SignUp 
        setLogin={setLogin}
        setSignup={setSignup}
        notification={notification}
        setNotification={setNotification}
        />
      </div>
      </div>
    )}

    {/* LOGIN */}
    {login && (
      <div className={Style.form}>
      <div className={Style.form_inner}>
      <Login 
        setLogin={setLogin}
        setSignup={setSignup}
        notification={notification}
        setNotification={setNotification}
        />
      </div>
      </div>
    )}
    </>
  );
};

export default Header;
