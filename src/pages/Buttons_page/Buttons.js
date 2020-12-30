import React from "react";
import "./Buttons.css";
import Button from "../../components/Button/ButtonUI";
import Footer from "../../components/Footer";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

function Buttons() {
  return (
    <div className="button__container">
      <header className="button__header">Buttons</header>

      <div className="button__row">
        <Button label={`<Button />`} color="default">
          Default
        </Button>

        <Button label={`&:hover, &:focus`} color="default" hover>
          Default
        </Button>
      </div>

      <div className="button__row">
        <Button label={`<Button variant="outline" />`} variant="outline">
          Default
        </Button>
        <Button label={`&:hover, &:focus`} variant="outline" hover>
          Default
        </Button>
      </div>

      <div className="button__row">
        <Button label={`<Button variant="text" />`} variant="text">
          Default
        </Button>
        <Button label={`&:hover, &:focus`} variant="text" hover>
          Default
        </Button>
      </div>

      <div className="button__row">
        <Button
          label={`<Button disableShadow />`}
          color="primary"
          disableShadow
        >
          Default
        </Button>
      </div>

      <div className="button__row">
        <Button label={`<Button disabled />`} disabled>
          Default
        </Button>
        <Button
          label={`<Button variant="text" disabled />`}
          variant="text"
          disabled
        >
          Default
        </Button>
      </div>

      <div className="button__row">
        <Button
          label={`<Button startIcon=”local_grocery_store” />`}
          startIcon={<AddShoppingCart />}
          color="primary"
        >
          Default
        </Button>
        <Button
          label={`<Button endIcon=”local_grocery_store” />`}
          endIcon={<AddShoppingCart />}
          color="primary"
        >
          Default
        </Button>
      </div>

      <div className="button__row">
        <Button label={`<Button size="sm" />`} size="sm" color="primary">
          Default
        </Button>
        <Button label={`<Button size="md" />`} size="md" color="primary">
          Default
        </Button>
        <Button label={`<Button size="lg" />`} size="lg" color="primary">
          Default
        </Button>
      </div>

      <div className="button__row">
        <Button label={`<Button color="default" />`} color="default">
          Default
        </Button>
        <Button label={`<Button color="primary" />`} color="primary">
          Default
        </Button>
        <Button label={`<Button color="secondary" />`} color="secondary">
          Default
        </Button>
        <Button label={`<Button color="danger" />`} color="danger">
          Default
        </Button>
      </div>

      <div className="button__row">
        <Button label={`&:hover, &:focus`} color="default" hover>
          Default
        </Button>
        <Button lable={""} color="primary" hover>
          Default
        </Button>
        <Button color="secondary" hover>
          Default
        </Button>
        <Button color="danger" hover>
          Default
        </Button>
      </div>

      <Footer />
    </div>
  );
}

export default Buttons;
