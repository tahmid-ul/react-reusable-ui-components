import React from "react";
import cn from "classnames";
import "./ButtonUI.css";

const Label = ({ text, color }) => {
  return (
    <label className="button__label" style={color}>
      {text}
    </label>
  );
};

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
  let setLabelColor = {
    color: hover ? "#828282" : "#333333",
  };

  return (
    <div className="button__wrap">
      <Label text={label} color={setLabelColor} />
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
