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
} from "../Components";

const layout = () => {
  return (
    <div className="home">
      <Logo />
      <Button />
      <p>FILTER</p>
      <Filter />
      <Card />
      <p>DONATE</p>
      <Donate />
      <p>FORM</p>
      <Form />
      <p>CHECKBOX</p>
      <CheckBox />
      <Footer />
    </div>
  );
};

export default layout;
