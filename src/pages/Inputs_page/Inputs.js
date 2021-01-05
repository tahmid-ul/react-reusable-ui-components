import React from "react";
import "./Inputs.css";
import Input from "../../components/Input/InputUI";
import Footer from "../../components/Footer";

function Inputs() {
  return (
    <div className="input__container">
      <header className="input__header">Inputs</header>
      <div className="input__row">
        <Input label={`Label`} description={`<Input />`} />
        <Input label={`Label`} description={`&:hover`} hover />
        <Input label={`Label`} description={`&:focus`} focus />
      </div>

      <div className="input__row">
        <Input label={`<Input />`} />
        <Input label={`<Input />`} hover />
        <Input label={`<Input />`} focus />
      </div>

      <Footer />
    </div>
  );
}

export default Inputs;
