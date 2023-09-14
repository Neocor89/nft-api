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
  SignUp,
  Upload,
  Product,
} from "../Components";

const layout = () => {
  return (
    <div className="home">
      <Header />
      <Product />
      <Upload />
      <Logo />
      <Button />
      <Notification />
      <Filter />
      <Card />
      <Donate />
      <Form />
      <Login />
      <SignUp />
      <Profile />
      <CheckBox />
      <Footer />
    </div>
  );
};

export default layout;
