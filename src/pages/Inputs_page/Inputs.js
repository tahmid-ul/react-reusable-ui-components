import React from "react";
import "./Inputs.css";
import Input from "../../components/Input/InputUI";
import Footer from "../../components/Footer";

function Inputs() {
  return (
    <div className="input__container">
      <header className="input__header">Inputs</header>
      <div className="input__row">
        <Input label={`<Input />`}>Default</Input>
      </div>
      <Footer />
    </div>
  );
}

export default Inputs;
