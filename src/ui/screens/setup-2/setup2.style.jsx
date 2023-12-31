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
     @media(max-width: ${MOBILE}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const LeftSide = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    max-width: 480px;

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
    margin-top: 120px;

    & > label {
        margin-bottom: 10px;
    }

     @media(max-width: ${MOBILE}) {
        display: none;
    }
`;

export const StepContent = styled.div`
    height: auto;
    min-height: 250px;

    & > p {
        font-size: 32px;
        font-family: 'ProximaNovaThin';
        margin-top: 0px;

        & > label {
            font-family: 'ProximaNovaSemibold';

            &:nth-child(2) {
                color: ${COLORS.primary};
            }
        }


        &:nth-child(2) {
            font-size: 15px;
            font-family: 'ProximaNovaThin';
        }

        @media(max-width: ${MOBILE}) {
            text-align: center;
            font-size: 22px;

            &:nth-child(2) {
                 font-size: 12px;
            }
        }
    }

    & > div {
        margin-top: 30px;
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

export const AmountInput = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    position: relative;
    max-width: 520px;

    & > label {
        font-size: 20px;
        color: ${COLORS.gray1};
        position: absolute;
        left: 40px;
    }

    & > input {
        outline: none;
        border: none;
        width: 100%;
        height: 90%;
        font-size: 20px;
        text-align: end;
        border-radius: 30px;
        border: 1px solid ${COLORS.gray1};
        background: #FFFFFF;
        padding: 0 40px;

        &:focus {
             border: 1px solid #000000;
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;

    @media(max-width: ${MOBILE}) {
        flex-direction: column;
        align-items: center;

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
