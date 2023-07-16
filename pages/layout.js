import React from "react";

//: INTERNAL COMPONENTS IMPORTS
import {
  Logo,
  Button,
  Card,
  Footer,
  CheckBox,
  Filter,
  Donate,
  Form,
  Notification,
  Profile,
} from "../Components";

const layout = () => {
  return (
    <div className="home">
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
      <p>PROFILE</p>
      <Profile />
      <p>CHECKBOX</p>
      <CheckBox />
      <Footer />
    </div>
  );
};

export default layout;
