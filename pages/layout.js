import React from "react";

// TODO
//+ RESTART LIGNE 34 & 35 AND ADDING LOGIN COMPONENT

//: INTERNAL COMPONENTS IMPORTS
import {
  Header,
  Logo,
  Button,
  Card,
  Footer,
  CheckBox,
  Filter,
  Donate,
  Form,
  Login,
  Notification,
  Profile,
} from "../Components";

const layout = () => {
  return (
    <div className="home">
      <p>HEADER</p>
      <Header />
      <p>LOGO</p>
      <Logo />
      <Button />
      <p>NOTIFICATION</p>
      <Notification />
      <p>FILTER</p>
      <Filter />
      <Card />
      <p>DONATE</p>
      <Donate />
      <p>FORM</p>
      <Form />
      <p>LOGIN</p>
      <Login />
      <p>PROFILE</p>
      <Profile />
      <p>CHECKBOX</p>
      <CheckBox />
      <Footer />
    </div>
  );
};

export default layout;
