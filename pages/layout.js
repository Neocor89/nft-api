import React from "react";

//: INTERNAL COMPONENTS IMPORTS
import { Logo, Button, Card, Footer, CheckBox, Filter } from "../Components";

const layout = () => {
  return (
    <div className="home">
      <Logo />
      <Button />
      <p>FILTER</p>
      <Filter />
      <Card />
      <p>CHECKBOX</p>
      <CheckBox />
      <Footer />
    </div>
  );
};

export default layout;
