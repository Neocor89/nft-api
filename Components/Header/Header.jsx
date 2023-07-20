import Link from "next/link";
import React, { useEffect, useState } from "react";

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
  }, [])
  
  const logout = (el) => {
    const token = localStorage.getItem("NFTApi token");
    window.location.reload();
  }

  return (
    <div className={Style.container}>
      <Logo />
      <div className={Style.menu}>
        {menuList.map((el, i) => (
          <Link className={Style.link} href={el.href} key={i + 1}>
            <p>{el.name}</p>
          </Link>
          // TODO
          //+ RESTART HERE
        ))}
      </div>
    </div>
  );
};

export default Header;
