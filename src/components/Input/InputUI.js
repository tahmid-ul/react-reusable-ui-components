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

const HelperText = ({ text, color }) => {
  return (
    <span className="input__helper_text" style={color}>
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
  multiline,
  ...props
}) => {
  const Component = multiline ? "textarea" : "input";

  let setLabelColor = {
    color: props.hover
      ? "#333333"
      : props.error
      ? "#D32F2F"
      : props.focus
      ? "#2962FF"
      : "#333333",
  };
  let setDescColor = {
    color: props.focus || props.hover ? "#828282" : "#333333",
  };
  let setHelperColor = {
    color: props.error ? "#D32F2F" : "#828282",
  };

  return (
    <div
      className={cn("input__wrap", {
        [`input__wrap_fullwidth`]: props.fullWidth,
      })}
    >
      <Description text={description} color={setDescColor} />
      <Label text={label} color={setLabelColor} />
      {startIcon ? (
        <span className="input__icon start__icon">{startIcon}</span>
      ) : (
        ""
      )}
      {endIcon ? <span className="input__icon end__icon">{endIcon}</span> : ""}
      <Component
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
      {helperText ? (
        <HelperText text={helperText} color={setHelperColor} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
