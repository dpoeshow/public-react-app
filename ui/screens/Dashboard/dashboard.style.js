import styled from "styled-components";
import {
	DESKTOP,
	MINI_DESKTOP,
	MOBILE,
	SMALL_DESKTOP,
	TABLET,
} from "../../../assets/size";
import { COLORS } from "../../../assets/color";
import ReactGoogleAutocomplete from "react-google-autocomplete";

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url("/imgs/background.webp");
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom-right-radius: 60px;
  border-bottom-left-radius: 60px;

  @media (max-width: ${MOBILE}) {
    height: auto;
  }
`;

export const Wrapper = styled.div`
	padding: 34px 50px 50px 50px;
	width: 90%;
	max-width: ${DESKTOP};
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 120px;
	z-index: 10;

	@media (max-width: ${SMALL_DESKTOP}) {
		padding: 34px 20px 50px 20px;
	}

	@media (max-width: ${MOBILE}) {
		padding: 34px 10px 30px 10px;
	}

	@media (max-width: ${SMALL_DESKTOP}) {
		width: 90%;
	}

	@media (max-width: ${TABLET}) {
		width: 94%;
	}

	@media (max-width: ${MOBILE}) {
		width: 90%;
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 70px;
	margin-bottom: 70px;

	@media (max-width: ${MOBILE}) {
		justify-content: center;
		margin-top: 16px;
		margin-bottom: 40px;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 480px;
	min-width: 480px;
	z-index: 4;

	@media (max-width: ${MINI_DESKTOP}) {
		max-width: 400px;
		min-width: 400px;
	}

	@media (max-width: ${TABLET}) {
		max-width: 360px;
		min-width: 360px;
	}

	@media (max-width: ${MOBILE}) {
		align-items: center;
	}
`;

export const MobileImageContainer = styled.div`
	display: none;

	& > img {
		width: 100%;
	}

	@media (max-width: ${MOBILE}) {
		display: block;
	}
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 122%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;

  @media (max-width: ${MOBILE}) {
    display: none;
  }

  @media (max-width: ${DESKTOP}) {
    height: 108% !important;
  }

  @media (max-width: ${SMALL_DESKTOP}) {
    height: 96% !important;
  }

  @media (max-width: ${MINI_DESKTOP}) {
    height: 85% !important;
  }

  @media (max-width: ${TABLET}) {
    height: 80% !important;
  }

  & > img {
    width: 96% !important;
    position: absolute;
    margin-left: 200px !important;

    @media (max-width: ${DESKTOP}) {
      width: 96% !important;
      margin-left: 160px !important;
    }

    @media (max-width: ${SMALL_DESKTOP}) {
      width: 100% !important;
      margin-left: 140px !important;
    }

    @media (max-width: ${MINI_DESKTOP}) {
      width: 110% !important;
      margin-left: 80px !important;
    }

    @media (max-width: ${TABLET}) {
      width: 105% !important;
      margin-left: 40px !important;
    }
  }
`;

export const Background = styled.div`
	position: fixed;
	height: 120%;
	width: 86%;
	background: #f6f6f659;
	top: 0px;
	left: 0px;
	border-top-right-radius: 30%;
	border-bottom-right-radius: 100%;
	z-index: 0;

	@media (max-width: ${TABLET}) {
		position: absolute;
		width: 100%;
		height: 50%;
		border-radius: 0px;
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
	}
`;

export const InputContainer = styled.div`
	width: 100%;

	@media (max-width: ${MOBILE}) {
		width: 90%;
	}
`;

export const PlaceInput = styled(ReactGoogleAutocomplete)`
	height: 56px;
	width: calc(100% - 40px);
	border-radius: 30px;
	border: 1px solid ${(props) => (props.iserror ? "red" : COLORS.gray1)};
	padding: 0 20px;
	background: #ffffff;
	min-height: 40px;
	outline: none;
	font-size: 20px;
	font-weight: 500;
	font-family: "ProximaNovaRegular";
	margin-top: 20px;

	&:focus {
		border: 1px solid #000000;
	}

	&::placeholder {
		color: ${COLORS.gray1};
		opacity: 1; /* Firefox */
	}

	&::-ms-input-placeholder {
		/* Edge 12 -18 */
		color: ${COLORS.gray1};
	}

	@media (max-width: ${TABLET}) {
		font-size: 15px;
	}
`;
