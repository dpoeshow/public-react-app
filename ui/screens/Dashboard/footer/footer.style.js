import styled from "styled-components";
import { MOBILE, TABLET } from "../../../../assets/size";
import { ContentWrapper } from "../dashboard.style";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
	background-color: #f6f6f6;

	@media (max-width: ${TABLET}) {
		margin-top: 0px;
	}

	@media (max-width: ${MOBILE}) {
	}
`;

export const FragmentContentWrapper = styled(ContentWrapper)`
	align-items: flex-start;
	margin-top: 0px;
	margin-bottom: 0px;
	position: relative;
	width: 100%;
	max-width: 1550px;
	padding: 50px;

	@media (max-width: 1650px) {
		width: calc(100% - 46px);
	}

	@media (max-width: ${MOBILE}) {
		padding: 50px 10px;
	}
`;

export const FooterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	@media (max-width: ${MOBILE}) {
		flex-direction: column;

		& > div {
			text-align: center;
		}

		& > div:first-child {
			margin-bottom: 10px;
		}
	}
`;
