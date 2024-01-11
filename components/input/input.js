import { InputContainer } from "./input.style";

export const Input = ({
	placeholder,
	value,
	onChange,
	iserror,
	ref,
	style,
	name,
	type,
	id,
}) => {
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
};
