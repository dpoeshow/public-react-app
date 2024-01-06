import { Label, LabelTitle } from "./title.style";

export const Title = ({ caption, style }) => {
	return <LabelTitle style={style}>{caption || "label"}</LabelTitle>;
};

export const Text = ({ caption, fontSize, fontWeight, style }) => {
	return (
		<Label
			style={{
				...style,
				fontSize: fontSize || 22,
				fontWeight: fontWeight || 500,
				fontFamily: "ProximaNovaRegular",
			}}
		>
			{caption || "label"}
		</Label>
	);
};

export const Description = ({
	caption,
	fontSize,
	fontWeight,
	style,
	onClick,
}) => {
	return (
		<Label
			onClick={onClick}
			style={{
				...style,
				fontSize: fontSize || 18,
				fontWeight: fontWeight || 300,
				fontFamily: "ProximaNovaThin",
			}}
		>
			{caption || "label"}
		</Label>
	);
};
