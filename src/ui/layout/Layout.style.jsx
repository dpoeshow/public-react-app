import styled from "styled-components";
import { COLORS } from "../../assets/color";
import BackgroundImage from "../../assets/imgs/background.webp";

export const BodyWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	font-family: "ProximaNovaRegular";
	flex-direction: column;
	background: ${COLORS.gray};
	background-image: url(${BackgroundImage});
	background-size: cover;
	background-repeat: no-repeat;
`;

export const Body = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	padding: 64px 0px;
`;
