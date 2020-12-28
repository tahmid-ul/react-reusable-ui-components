import React, { useState } from "react";
import cn from "classnames";
import "./ButtonUI.css";

const Label = ({ text }) => {
  return <label className="button__label">{text}</label>;
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
  ...props
}) => {
  const [disableShadow] = useState(props.disableShadow);

  return (
    <div className="button__wrap">
      <Label text={label} />
      <button
        style={label ? { marginTop: "1rem" } : { marginTop: "2rem" }}
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
        {startIcon && <i class="material-icons">{startIcon} </i>}
        {children}
        {endIcon && <i class="material-icons"> {endIcon}</i>}
      </button>
    </div>
  );
};

export default Button;
