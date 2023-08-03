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
} from "../Components";

const layout = () => {
  return (
    <div className="home">
      <p>HEADER</p>
      <Header />
      <p>UPLOAD</p>
      <Upload />
      <p>LOGO</p>
      <Logo />
      <Button />
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
      <p>SIGNUP</p>
      <SignUp />
      <p>PROFILE</p>
      <Profile />
      <p>CHECKBOX</p>
      <CheckBox />
      <Footer />
    </div>
  );
};

export default layout;
