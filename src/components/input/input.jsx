import { forwardRef } from "react";
import { InputContainer } from "./input.style";

export const Input = forwardRef(
  ({ style, iserror, placeholder, value, name, id, type, onChange }, ref) => {
    return (
      <InputContainer style={style} iserror={iserror}>
        <input
          placeholder={placeholder}
          value={value}
          name={name}
          id={id}
          type={type}
          ref={ref}
          onChange={onChange}
        />
      </InputContainer>
    );
  }
);
