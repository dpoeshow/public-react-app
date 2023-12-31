import {
	ButtonWrapper,
	LeftIconContainer,
	RightIconContainer,
} from "./button.style";
import ScaleLoader from "react-spinners/ScaleLoader";

export const Button = ({
	loading,
	rightIcon,
	leftIcon,
	caption,
	height,
	width,
	onClick,
	style,
	hovercolor,
	bgColor,
	color,
	href,
}) => {
	return (
		<ButtonWrapper
			onClick={loading ? null : onClick}
			hvcolor={hovercolor}
			bgcolor={bgColor}
			color={color}
			href={href}
			style={{ ...style, height: height, width: width }}
		>
			{loading ? (
				<div
					style={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<ScaleLoader color={"white"} height={24} width={3} />
				</div>
			) : (
				<>
					{leftIcon && (
						<LeftIconContainer>{leftIcon}</LeftIconContainer>
					)}
					<label>{caption || "button"}</label>
					{rightIcon && (
						<RightIconContainer>{rightIcon}</RightIconContainer>
					)}
				</>
			)}
		</ButtonWrapper>
	);
};
