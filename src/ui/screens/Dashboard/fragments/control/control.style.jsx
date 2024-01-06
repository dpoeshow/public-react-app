import styled from "styled-components";
import { ContentWrapper } from "../../dashboard.style";
import { MOBILE } from "../../../../../assets/size";
import BackgroundImage1 from "../../../../../assets/imgs/control-background1.webp";
import BackgroundImage2 from "../../../../../assets/imgs/control-background2.webp";

export const Container = styled.div`
	display: flex;
	justify-content: center;

	@media (max-width: ${MOBILE}) {
		height: auto;
	}
`;

export const FragmentContentWrapper = styled(ContentWrapper)`
	align-items: flex-start;
	margin-top: 0px;
	margin-bottom: 50px;
	position: relative;
	width: 100%;
	max-width: 1550px;
	margin-top: 100px;

	@media (max-width: 1650px) {
		width: calc(100% - 46px);
	}

	@media (max-width: 1350px) {
		flex-direction: column;
	}

	@media (max-width: ${MOBILE}) {
		width: 100%;
		margin-top: 0px;
	}
`;

export const FragmentTitle = styled.label`
	font-size: 52px;
	font-weight: bold;
	max-width: 600px;
	font-family: "ProximaNovaBold";

	@media (max-width: ${MOBILE}) {
		text-align: center;
		font-size: 36px;
	}
`;

export const LeftContainer = styled.div`
	background-image: url(${BackgroundImage1});
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 60px;
	display: flex;
	flex-direction: column;
	width: calc(48% - 100px);
	padding: 50px;

	@media (max-width: 1350px) {
		width: calc(100% - 100px);
	}

	@media (max-width: ${MOBILE}) {
		align-items: center;
		padding: 50px 10px;
		width: calc(100% - 20px);
		border-radius: 30px;
	}

	& > label:nth-child(2) {
		font-size: 25px;
		font-family: "ProximaNovaRegular";
		margin-top: 30px;

		@media (max-width: ${MOBILE}) {
			text-align: center;
			font-size: 16px;
		}
	}

	& > img {
		margin-top: 0px;
		position: absolute;
		bottom: -50px;
		left: -50px;
		height: 80%;
		border-bottom-left-radius: 60px;
	}

	& > div:last-child {
		@media (max-width: ${MOBILE}) {
			max-width: 100% !important;
		}
	}
`;

export const RightContainer = styled.div`
	width: calc(48% - 100px);
	background-image: url(${BackgroundImage2});
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 60px;
	display: flex;
	flex-direction: column;
	padding: 50px;

	@media (max-width: 1350px) {
		width: calc(100% - 100px);
		margin-top: 30px;
	}

	@media (max-width: ${MOBILE}) {
		align-items: center;
		padding: 50px 10px;
		width: calc(100% - 20px);
		margin-top: 50px;
		border-radius: 30px;
	}

	& > label:nth-child(2) {
		font-size: 25px;
		font-family: "ProximaNovaRegular";
		margin-top: 30px;

		@media (max-width: ${MOBILE}) {
			text-align: center;
			font-size: 16px;
		}
	}
`;

export const SubmitContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 29px;

	@media (max-width: 1350px) {
		& > div {
			max-width: 100%;
		}
	}

	@media (max-width: ${MOBILE}) {
		flex-direction: column;
		width: 100%;

		& > div {
			width: calc(100% - 40px) !important;
		}

		& > div:last-child {
			max-width: 100% !important;
			width: calc(80% - 40px) !important;
			margin-left: 0px !important;
		}
	}
`;
