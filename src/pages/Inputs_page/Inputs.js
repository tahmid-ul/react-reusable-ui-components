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
        <Input label={`Label`} description={`<Input error />`} />
        <Input label={`Label`} description={`&:hover`} hover />
        <Input label={`Label`} description={`&:focus`} focus />
      </div>

      <div className="input__row">
        <Input label={`Label`} description={`<Input disabled />`} />
      </div>

      <div className="input__row">
        <Input
          label={`Label`}
          description={`<Input helperText="Some interesting text" />`}
        />
        <Input
          label={`Label`}
          description={`<Input helperText="Some interesting text" error />`}
        />
      </div>

      <div className="input__row">
        <Input label={`Label`} description={`<Input startIcon />`} />
        <Input label={`Label`} description={`<Input endIcon />`} />
      </div>

      <div className="input__row">
        <Input label={`Label`} description={`<Input value="text" />`} />
      </div>

      <div className="input__row">
        <Input label={`Label`} description={`<Input size="sm" />`} />
        <Input label={`Label`} description={`<Input size="sm" />`} />
      </div>

      <div className="input__row">
        <Input label={`Label`} description={`<Input fullWidth />`} />
      </div>

      <div className="input__row">
        <Input label={`Label`} description={`<Input multiline row="4" />`} />
      </div>

      <Footer />
    </div>
  );
}

export default Inputs;
