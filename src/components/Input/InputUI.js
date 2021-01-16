import React from "react";
import cn from "classnames";
import "./InputUI.css";

const Label = ({ text, color }) => {
  return (
    <label className="input__label" style={color}>
      {text}
    </label>
  );
};

const Description = ({ text, color }) => {
  return (
    <span className="input__description" style={color}>
      {text}
    </span>
  );
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
  let setLabelColor = {
    color: props.error ? "#D32F2F" : props.focus ? "#2962FF" : "#333333",
  };
  let setDescColor = {
    color: props.focus || props.hover ? "#828282" : "#333333",
  };

  return (
    <div
      className={cn("input__wrap", {
        [`input__wrap_fullwidth`]: props.fullWidth,
      })}
    >
      <Description text={description} color={setDescColor} />
      <Label text={label} color={setLabelColor} />
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
