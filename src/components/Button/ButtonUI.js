import React, { useState } from "react";
import cn from "classnames";
import "./ButtonUI.css";
import Label from "../Label/Label";

const Button = ({
  variant,
  color,
  size,
  startIcon,
  endIcon,
  children,
  label,
  hover,
  ...props
}) => {
  const [disableShadow] = useState(props.disableShadow);

  let setStyle = {
    marginTop: label ? "1rem" : "2rem",
  };

  return (
    <div className="button__wrap">
      <Label text={label} />
      <button
        style={setStyle}
        className={cn("button__default", {
          [`button__variant-${variant}`]: variant,
          [`button__color-${color}`]: color,
          [`button__size-${size}`]: size,
          [`button__disabled`]: props.disabled,
          [`button__disableShadow`]: disableShadow,
          [`button__hover`]: hover,
        })}
        {...props}
      >
        {startIcon && <i className="material-icons">{startIcon}</i>}
        {children}
        {endIcon && <i className="material-icons">{endIcon}</i>}
      </button>
    </div>
  );
};

export default Button;
