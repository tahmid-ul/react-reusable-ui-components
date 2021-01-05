import React from "react";
import cn from "classnames";
import "./InputUI.css";

const Label = ({ text }) => {
  return <label className="input__label">{text}</label>;
};

const Description = ({ text }) => {
  return <span className="input__description">{text}</span>;
};

const Input = ({
  type = "text",
  name,
  value,
  size,
  helperText,
  startIcon,
  endIcon,
  label,
  description,
  row,
  placeholder = "Placeholder",
  ...props
}) => {
  return (
    <div className="input__wrap">
      <Description text={description} />
      <Label text={label} />
      <input
        type={type}
        name={name}
        value={value !== "" ? value : placeholder}
        className={cn("input__default", {
          [`input__size-${size}`]: size,
          [`input__disabled`]: props.disabled,
          [`input__error`]: props.error,
          [`input__hover`]: props.hover,
          [`input__focus`]: props.focus,
          [`input__icon_start`]: startIcon,
          [`input__icon_end`]: endIcon,
          [`input__full_width`]: props.fullWidth,
        })}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
