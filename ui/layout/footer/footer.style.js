import styled from "styled-components";
import { Container, Wrapper } from "../header/header.style";
import { MOBILE } from "../../../assets/size";

export const FooterContainer = styled(Container)`
	height: 100px;
	margin-top: 80px;

	@media (max-width: ${MOBILE}) {
		//  height: 180px;
		padding: 40px 0px;
	}
`;

export const FooterWrapper = styled(Wrapper)`
	@media (max-width: ${MOBILE}) {
		display: none;
	}
`;

export const MobileFooterWrapper = styled(Wrapper)`
	display: none;

	& > div:first-child {
		align-items: flex-start;
	}

	& > div > div > label {
		text-align: left;

		@media (max-width: 500px) {
			font-size: 12px !important;
		}
	}

	@media (max-width: ${MOBILE}) {
		display: flex;
		flex-direction: column;
	}

	& > div:last-child {
		height: 40px !important;
	}
`;
