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
  disabled,
  disableShadow,
  ...props
}) => {
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
          [`button__disabled`]: disabled,
          [`button__disableShadow`]: disableShadow,
          [`button__hover`]: hover,
          [`button__icon_start`]: startIcon,
          [`button__icon_end`]: endIcon,
        })}
        {...props}
      >
        {startIcon && <span className="material-icons">{startIcon}</span>}
        {children}
        {endIcon && <span className="material-icons">{endIcon}</span>}
      </button>
    </div>
  );
};

export default Button;
