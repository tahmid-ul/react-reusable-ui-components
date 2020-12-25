import React from "react";
import cn from "classnames";
import "./ButtonUI.css";

const variantsMapping = {
  outline: "outline",
  text: "text",
  default: "default",
};

const Button = ({ variant, color, size, children, ...props }) => {
  const button = variant ? variantsMapping[variant] : "default";

  return (
    <button
      className={cn({
        [`button--variant-${variant}`]: variant,
        [`button--color-${color}`]: color,
        [`button--size-${size}`]: size,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
