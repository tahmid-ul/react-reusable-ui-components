import React from "react";
import "./Buttons.css";
import Button from "./UI/ButtonUI";
import Footer from "./Footer";

const Label = ({ text }) => {
  return <label className="component__label">{text}</label>;
};

function Buttons() {
  return (
    <div className="button__container">
      <header className="button__header">Buttons</header>

      <Label text={`<Button />`} />
      <Button>Default</Button>

      <Label text={`&:hover, &:focus`} />
      <Button hover>Default</Button>

      <Label text={`<Button variant="text" />`} />
      <Button variant="outline">Default</Button>
      <Button variant="text">Default</Button>
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
