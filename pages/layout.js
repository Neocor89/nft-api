import React from "react";

//: INTERNAL COMPONENTS IMPORTS
import { Logo, Button, Card, Footer, CheckBox } from "../Components";

const layout = () => {
  return (
    <div className="home">
      <Logo />
      <Button />
      <Card />
      <p>CHECKBOX</p>
      <CheckBox />
      <Footer />
    </div>
  );
};

export default layout;
