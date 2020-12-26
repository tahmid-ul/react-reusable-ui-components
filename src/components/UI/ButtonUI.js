import React, { useState } from "react";
import cn from "classnames";
import "./ButtonUI.css";

const Button = ({
  variant,
  color,
  size,
  startIcon,
  endIcon,
  children,
  ...props
}) => {
  const [hovered] = useState(props.hover);
  const [disableShadow] = useState(props.disableShadow);

  return (
    <button
      className={cn({
        [`button--variant-${variant}`]: variant,
        [`button--color-${color}`]: color,
        [`button--size-${size}`]: size,
        [`button--disabled`]: props.disabled,
        [`button--disableShadow`]: disableShadow,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
