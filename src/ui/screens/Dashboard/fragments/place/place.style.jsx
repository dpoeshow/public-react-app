import styled from "styled-components";
import { MOBILE, TABLET } from "../../../../../assets/size";
import { COLORS } from "../../../../../assets/color";
import { ContentWrapper, Wrapper } from "../../dashboard.style";

export const Container = styled.div`
	display: flex;
	justify-content: center;

	@media (max-width: ${MOBILE}) {
		height: auto;
	}
`;

export const FragmentWrapper = styled(Wrapper)`
	margin-bottom: 50px;
`;

export const FragmentContentWrapper = styled(ContentWrapper)`
	@media (max-width: ${TABLET}) {
		justify-content: center;
	}
`;

export const FragmentTitle = styled.label`
	font-size: 52px;
	font-weight: bold;
	max-width: 600px;

	@media (max-width: ${TABLET}) {
		text-align: center;
	}

	& > label {
		color: ${COLORS.primary};
	}
`;

export const List = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin-top: 20px;
	margin-bottom: 70px;

	@media (max-width: ${TABLET}) {
		flex-direction: column;
	}
`;

export const ListItem = styled.div`
	max-width: 360px;

	@media (max-width: ${TABLET}) {
		max-width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;
	}

	@media (max-width: ${MOBILE}) {
		margin-top: 50px;
	}

	& > div {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 20px;

		@media (max-width: ${TABLET}) {
			flex-direction: column;
			align-items: center;
		}

		& > label {
			font-size: 25px;
			font-family: "ProximaNovaRegular";
			margin-left: 20px;

			@media (max-width: ${TABLET}) {
				margin-left: 0px;
				margin-top: 6px;

				& > br {
					display: none;
				}
			}
		}
	}

	& > label {
		font-size: 20px;
		font-family: "ProximaNovaThin";
		margin-top: 20px;

		@media (max-width: ${TABLET}) {
			text-align: center;
		}
	}
`;

export const ImgContainer = styled.div`
	width: 96px;
	height: 96px;
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fc782e17;
`;
