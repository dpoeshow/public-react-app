import styled from "styled-components";
import { MOBILE, SMALL_DESKTOP } from "../../../assets/size";

export const LogoWrapper = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const ToolsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	& > div:nth-child(2) {
		margin: 0 20px;
	}

	@media (max-width: ${MOBILE}) {
		display: none;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: calc(90% - 100px);
	padding: 0 50px;
	max-width: 1600px;

	@media (max-width: ${SMALL_DESKTOP}) {
		padding: 0 20px;
		width: calc(90% - 40px);
	}

	@media (max-width: ${MOBILE}) {
		padding: 0 10px;
		width: calc(90% - 20px);
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: #ffffff;
	width: 100%;

	& > .progress-bar {
		width: 100%;
	}
`;

export const MenuIconContianer = styled.div`
	display: none;
	align-items: center;
	justify-content: center;

	& > img {
		cursor: pointer;
	}

	@media (max-width: ${MOBILE}) {
		display: flex;
	}
`;
