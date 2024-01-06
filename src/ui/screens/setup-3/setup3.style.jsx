import styled from "styled-components";
import { MINI_DESKTOP, MOBILE, SMALL_DESKTOP, TABLET } from "../../../assets/size";
import { Container, Wrapper } from "../../layout/header/header.style";
import { COLORS } from "../../../assets/color";

export const ContentContainer = styled(Container)`
    @media(max-width: ${MOBILE}) {
        max-width: 450px;
        margin: auto;
    } 
`;

export const Side = styled(Wrapper)`
    margin-bottom: 40px;
     @media(max-width: ${MOBILE}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const LeftSide = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    max-width: 45%;

    & > label {
        @media(max-width: ${MOBILE}) {
            max-width: 100%;
        }
    }

    @media(max-width: ${MINI_DESKTOP}) {
        width: 420px;
    }

    @media(max-width: ${TABLET}) {
        width: 360px;
    }

    @media(max-width: ${MOBILE}) {
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 100%;
    }
`;

export const RightSide = styled.div`
    width: 50%;

    @media(max-width: ${SMALL_DESKTOP}) {
        padding-top: 0px;
    }

      @media(max-width: ${MOBILE}) {
        width: 100%;
        margin-top: 50px;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 90px;

    & > label {
        margin-bottom: 10px;
    }

     @media(max-width: ${MOBILE}) {
        display: none;
    }
`;

export const StepContent = styled.div`
    height: auto;
    min-height: 426px;

    & > p {
        font-size: 32px;
        font-family: 'ProximaNovaThin';
        margin-top: 0px;

        & > label {
            font-family: 'ProximaNovaSemibold';

            &:last-child {
                color: ${COLORS.primary};
            }
        }

        @media(max-width: ${MOBILE}) {
            text-align: center;
            font-size: 22px;
        }
    }

    & > div {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    @media(max-width: ${MOBILE}) {
        min-height: auto;
        margin-bottom: 20px;

        & > div {
            max-width: 100% !important; 
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;

    @media(max-width: ${MOBILE}) {
        flex-direction: column;
        align-items: center;
        margin-top: 50px;

        & > div:first-child {
            width: calc(100% - 80px) !important;
            max-width: 100% !important;
        }

        & > div:nth-child(2) {
            margin-left: 0px;
            margin-top: 10px;
        }
    }
`;
