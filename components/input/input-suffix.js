import { InputPrefixContainer, InputSuffixContainer } from "./input.style";

export const InputSuffix = ({ placeholder, value, onChange, iserror, type, style }) => {
    return (
        <InputSuffixContainer style={style} iserror={iserror}>
            <input placeholder={placeholder} type={type ? type : "text"} value={value} onChange={onChange} />
        </InputSuffixContainer>
    );
};

export const InputPrefix = ({ placeholder, value, onChange, iserror, type, style }) => {
    return (
        <InputPrefixContainer style={style} iserror={iserror}>
            <input placeholder={placeholder} type={type ? type : "text"} value={value} onChange={onChange} />
        </InputPrefixContainer>
    );
};
