import React from "react";
import "./Inputs.css";
import Input from "../../components/Input/InputUI";
import Footer from "../../components/Footer";
import PhoneIcon from "@material-ui/icons/Phone";
import LockIcon from "@material-ui/icons/Lock";

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
        <Input label={`Label`} description={`<Input error />`} error />
        <Input label={`Label`} description={`&:hover`} error hover />
        <Input label={`Label`} description={`&:focus`} error focus />
      </div>

      <div className="input__row">
        <Input label={`Label`} description={`<Input disabled />`} disabled />
      </div>

      <div className="input__row">
        <Input
          label={`Label`}
          description={`<Input helperText="Some interesting text" />`}
          helperText="Some interesting text"
        />
        <Input
          label={`Label`}
          description={`<Input helperText="Some interesting text" error />`}
          helperText="Some interesting text"
          error
        />
      </div>

      <div className="input__row">
        <Input
          label={`Label`}
          description={`<Input startIcon />`}
          startIcon={<PhoneIcon />}
        />
        <Input
          label={`Label`}
          description={`<Input endIcon />`}
          endIcon={<LockIcon />}
        />
      </div>

      <div className="input__row">
        <Input
          label={`Label`}
          description={`<Input value="text" />`}
          value="text"
        />
      </div>

      <div className="input__row">
        <Input label={`Label`} description={`<Input size="sm" />`} size="sm" />
        <Input label={`Label`} description={`<Input size="md" />`} size="md" />
      </div>

      <div className="input__row">
        <Input label={`Label`} description={`<Input fullWidth />`} fullWidth />
      </div>

      <div className="input__row">
        <Input
          label={`Label`}
          description={`<Input multiline row="4" />`}
          multiline
          row="4"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Inputs;
