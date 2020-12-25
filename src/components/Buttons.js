import React from "react";
import "./Buttons.css";
import Button from "./UI/ButtonUI";
import Footer from "./Footer";

function Buttons() {
  return (
    <div className="buttons__container">
      <header className="button__header">Buttons</header>

      <Button>Default</Button>
      <Button variant="outline">Default</Button>
      <Button variant="text">Default</Button>
      <Button disableShadow>Default</Button>
      <Button disabled>Default</Button>
      <Button variant="text" disabled>
        Default
      </Button>

      <Footer />
    </div>
  );
}

export default Buttons;
