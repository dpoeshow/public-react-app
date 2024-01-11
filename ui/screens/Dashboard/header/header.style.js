import styled from "styled-components";
import { MOBILE } from "../../../../assets/size";
import { motion } from "framer-motion";

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

export const MenuIconContianer = styled.div`
	display: none;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	@media (max-width: ${MOBILE}) {
		display: flex;
	}
`;

export const MobileMenu = styled(motion.div)`
	display: none;
	background: white;
	width: calc(100% - 50px);
	z-index: 1000;
	align-self: self-end;
	margin-right: -20px;
	position: fixed;
	top: 0px;
	display: flex;
	flex-direction: column;
	padding: 30px;
	box-shadow: 0px 18px 31px 0px rgba(0, 0, 0, 0.1);
	border-bottom-left-radius: 50%;
	border-bottom-right-radius: 50%;
	height: 200px;
	align-items: center;

	& > div {
		margin-top: 6px;
		margin-bottom: 14px;
		font-family: "ProximaNovaRegular";
		font-size: 20px;
	}

	& > div:last-child {
		width: 70px;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #9e260f;
		border-radius: 50%;
		cursor: pointer;
		position: absolute;
		bottom: -6px;
	}

	@media (max-width: ${MOBILE}) {
		display: flex;
	}
`;
