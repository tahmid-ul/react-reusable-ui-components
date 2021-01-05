import React from "react";
import cn from "classnames";
import "./InputUI.css";
import Label from "../Label/Label";

const Input = ({
  type,
  name,
  value,
  size,
  helperText,
  error,
  disabled,
  startIcon,
  endIcon,
  label,
  hover,
  focus,
  row,
  placeholder = "Placeholder",
  ...props
}) => {
  let setStyle = {
    marginTop: label ? "1rem" : "2rem",
  };

  return (
    <div className="input__wrap">
      <Label for={name} text={label} />
      <input
        type={type}
        name={name}
        className={cn("input__default", {
          [`input__size-${size}`]: size,
          [`input__disabled`]: disabled,
          [`input__error`]: error,
          [`input__hover`]: hover,
          [`input__focus`]: focus,
          [`input__icon_start`]: startIcon,
          [`input__icon_end`]: endIcon,
          [`input__full_width`]: props.fullWidth,
        })}
        {...props}
        value={value ? value : placeholder}
      />
    </div>
  );
};

export default Input;
