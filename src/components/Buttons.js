import React from "react";
import "./Buttons.css";
import Button from "./UI/ButtonUI";
import Footer from "./Footer";

function Buttons() {
  return (
    <div className="button__container">
      <header className="button__header">Buttons</header>

      <div className="button__row">
        <Button label={`<Button />`}>Default</Button>

        <Button label={`&:hover, &:focus`} hover>
          Default
        </Button>
      </div>

      <div className="button__row">
        <Button label={`<Button variant="outline" />`} variant="outline">
          Default
        </Button>
        <Button label={`&:hover, &:focus`} hover>
          Default
        </Button>
      </div>

      <div className="button__row">
        <Button label={`<Button variant="text" />`} variant="text">
          Default
        </Button>
        <Button label={`&:hover, &:focus`} hover>
          Default
        </Button>
      </div>
      <Button disableShadow>Default</Button>
      <Button disabled>Default</Button>
      <Button variant="text" color="danger" size="m">
        Default
      </Button>

      <Footer />
    </div>
  );
}

export default Buttons;
