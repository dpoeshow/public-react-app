import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../../dashboard.style";
import { MOBILE, TABLET } from "../../../../../assets/size";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-top: 70px;

	@media (max-width: ${MOBILE}) {
		height: auto;
	}
`;

export const FragmentWrapper = styled(Wrapper)`
	padding: 50px;

	@media (max-width: ${TABLET}) {
		margin-bottom: 0px;
		padding-bottom: 0px;
	}

	@media (max-width: ${MOBILE}) {
		padding: 50px 10px;
		padding-bottom: 0px;
	}
`;

export const FragmentContentWrapper = styled(ContentWrapper)`
	align-items: flex-start;
	margin-top: 0px;
	margin-bottom: 0px;
	position: relative;
`;

export const FragmentTitle = styled.label`
	font-size: 52px;
	font-weight: bold;
	font-family: "ProximaNovaBold";

	@media (max-width: ${TABLET}) {
		text-align: center;
	}

	@media (max-width: ${MOBILE}) {
		font-size: 36px;
	}
`;

export const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: ${TABLET}) {
		align-items: center;
	}

	& > div {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;

		& > div:first-child {
			@media (max-width: ${TABLET}) {
				display: none;
			}
		}

		& > div:last-child {
			display: none;
			width: calc(80% - 40px) !important;
			max-width: 100% !important;

			@media (max-width: ${TABLET}) {
				display: flex;
			}
		}

		@media (max-width: ${TABLET}) {
			align-items: center;
		}
	}

	& > label:nth-child(2) {
		font-size: 25px;
		font-family: "ProximaNovaRegular";
		margin-top: 20px;
		max-width: 740px;

		@media (max-width: ${TABLET}) {
			text-align: center;
		}

		@media (max-width: ${MOBILE}) {
			font-size: 16px;
		}
	}

	& > img {
		width: 50%;
		position: absolute;
		right: -66px;
		bottom: -200px;

		@media (max-width: ${TABLET}) {
			width: 100%;
			position: relative;
			right: 0px;
			bottom: 0px;
		}
	}
`;
