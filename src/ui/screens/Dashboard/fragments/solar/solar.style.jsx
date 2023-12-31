import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../../dashboard.style";
import { MOBILE, TABLET } from "../../../../../assets/size";
import { COLORS } from "../../../../../assets/color";
import BackgroundImage from "../../../../../assets/imgs/background1.webp";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;

	@media (max-width: ${MOBILE}) {
		height: auto;
	}
`;

export const FragmentWrapper = styled(Wrapper)`
	background-image: url(${BackgroundImage});
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 60px;
	padding: 50px;

	@media (max-width: ${TABLET}) {
		padding-top: 100px;
		padding-bottom: 100px;
	}

	@media (max-width: ${MOBILE}) {
		padding: 0px;
		padding-top: 100px;
		padding-bottom: 100px;
		border-radius: 30px;
		width: 100%;
	}
`;

export const FragmentContentWrapper = styled(ContentWrapper)`
	align-items: flex-start;
	margin-top: 0px;
	margin-bottom: 0px;
	position: relative;

	@media (max-width: ${TABLET}) {
		flex-direction: column;
		align-items: center;
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
	display: flex;
	flex-direction: column;
	max-width: 540px;

	@media (max-width: ${TABLET}) {
		align-items: center;
		max-width: 100%;
	}

	& > label:nth-child(2) {
		font-size: 25px;
		font-family: "ProximaNovaRegular";
		margin-top: 20px;

		@media (max-width: ${TABLET}) {
			max-width: 640px;
			text-align: center;
			margin-top: 30px;
		}

		@media (max-width: ${MOBILE}) {
			font-size: 16px;
			max-width: 90%;
		}
	}

	& > img {
		margin-top: 0px;
		position: absolute;
		bottom: -50px;
		left: -50px;
		height: 80%;
		border-bottom-left-radius: 60px;

		@media (max-width: ${TABLET}) {
			display: none;
		}
	}
`;

export const MobileImageContainer = styled.div`
	display: none;

	@media (max-width: ${TABLET}) {
		display: flex;
		margin-left: -46px;
		margin-bottom: -100px;
	}

	@media (max-width: ${MOBILE}) {
		margin-left: 0px;
	}

	& > img {
		width: 90%;
		border-bottom-left-radius: 60px;

		@media (max-width: ${MOBILE}) {
			width: 80%;
			border-bottom-left-radius: 30px;
		}
	}
`;

export const RightContainer = styled.div`
	width: 50%;
	max-width: 540px;

	@media (max-width: ${TABLET}) {
		max-width: 540px;
		width: 100%;
		margin-top: 40px;
	}
`;

export const List = styled.div`
	@media (max-width: ${MOBILE}) {
		padding: 10px;
	}
`;
export const ListItem = styled.div`
	background-color: #ffffff8c;
	padding: 20px 40px;
	margin-bottom: 20px;
	border-radius: 20px;

	@media (max-width: ${MOBILE}) {
		padding: 10px 20px;
	}
`;
export const ImgContainer = styled.div`
	border-radius: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${COLORS.primary};

	& > img {
		padding: 18px;
		width: 40px;
		height: 40px;
	}

	@media (max-width: ${MOBILE}) {
		border-radius: 14px;

		& > img {
			width: 34px;
			height: 34px;
		}
	}
`;

export const ListTitle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;

	& > div {
		display: flex;
		flex-direction: row;
		align-items: center;

		& > label {
			font-size: 20px;
			font-family: "ProximaNovaRegular";
			margin-left: 20px;
			font-weight: 500;
			cursor: pointer;
		}
	}
`;

export const ListLabel = styled.label`
	font-size: 18px;
	font-family: "ProximaNovaThin";
	margin-left: 90px;

	@media (max-width: ${MOBILE}) {
		margin-left: 0px;
		margin-top: 20px;
	}
`;
