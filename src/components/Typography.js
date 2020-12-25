import React from "react";
import TypographyUI from "./UI/TypographyUI";
import "./Typography.css";
import Footer from "./Footer";

const Label = ({ text }) => {
  return <label className="component__label">{text}</label>;
};

function Typography() {
  return (
    <div className="typography__container">
      <header className="typography__header">Typography</header>

      <Label text={`<TypographyUI variant="h1" />`} />
      <TypographyUI variant="h1">h1. heading</TypographyUI>

      <Label text={`<TypographyUI variant="h2" />`} />
      <TypographyUI variant="h2">h2. heading</TypographyUI>

      <Label text={`<TypographyUI variant="h3" />`} />
      <TypographyUI variant="h3">h3. heading</TypographyUI>

      <Label text={`<TypographyUI variant="h4" />`} />
      <TypographyUI variant="h4">h4. heading</TypographyUI>

      <Label text={`<TypographyUI variant="h5" />`} />
      <TypographyUI variant="h5">h5. heading</TypographyUI>

      <Label text={`<TypographyUI variant="h6" />`} />
      <TypographyUI variant="h6">h6. heading</TypographyUI>

      <Label text={`<TypographyUI variant="subheading1" />`} />
      <TypographyUI variant="subheading1">Subheading 1</TypographyUI>

      <Label text={`<TypographyUI variant="subheading2" />`} />
      <TypographyUI variant="subheading2">Subheading 2</TypographyUI>

      <Label text={`<TypographyUI variant="body1" />`} />
      <TypographyUI variant="body1">BodyText 1</TypographyUI>

      <Label text={`<TypographyUI variant="body2"/>`} />
      <TypographyUI variant="body2">BodyText 2</TypographyUI>

      <Label text={`<TypographyUI variant="body1" color="primary"/>`} />
      <TypographyUI variant="body1" color="primary">
        BodyText 1
      </TypographyUI>

      <Label text={`<TypographyUI variant="body2" color="error" />`} />
      <TypographyUI variant="body2" color="error">
        BodyText 2
      </TypographyUI>

      <Footer />
    </div>
  );
}

export default Typography;
