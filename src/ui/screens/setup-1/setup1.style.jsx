import styled from "styled-components";
import { MINI_DESKTOP, MOBILE, SMALL_DESKTOP, TABLET } from "../../../assets/size";
import { Wrapper } from "../../layout/header/header.style";
import { Input } from "../../../components/input/input";
import { COLORS } from "../../../assets/color";

export const Side = styled(Wrapper)`
     @media(max-width: ${MOBILE}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const LeftSide = styled.div`
    width: 50%;
    max-width: 480px;

    & > div:nth-child(2) {
        margin-top: 14px;
        margin-bottom: 14px;

        @media(max-width: ${MOBILE}) {
            text-align: center;
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
    padding-top: 10px;

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
    margin-top: 40px;

    & > label {
        margin-bottom: 10px;
    }

     @media(max-width: ${MOBILE}) {
        display: none;
    }
`;

export const StepContainer = styled.div`
    display: flex;

    @media(max-width: ${SMALL_DESKTOP}) {
        flex-direction: column;
    }

    .active {
        color: #000000;

        & > div {
            border: 1px solid #000000;
        }
    }

    .inactive {
        color: ${COLORS.gray3};

        & > div {
            border: 1px solid ${COLORS.gray3};
        }
    }
`;

export const Stepper = styled.div`
    margin-right: 20px;

    @media(max-width: ${SMALL_DESKTOP}) {
        display: flex;
        flex-direction: row;
        margin-right: 0px;
        margin-bottom: 10px;
    }

    @media(max-width: ${TABLET}) {
        margin-top: 10px;
    }
`;

export const StepRadio = styled.div`
    width: 38px !important;
    height: 38px !important;
    min-width: 38px;
    min-height: 38px;
    border-radius: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
    cursor: pointer;

    @media(max-width: ${SMALL_DESKTOP}) {
        margin-right: 20px;
        margin-bottom: 0px;
    }

`;

export const StepRadioActive = styled.div`
    display: none;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    background: #000000;
`;

export const StepLabel = styled.label`
    font-size: 20px;

    @media(max-width: ${MOBILE}) {
       margin-top: 10px;
    }

    @media(max-width: 600px) {
       margin-top: 0px;
    }
`;

export const StepContent = styled.div`
    margin-top: 36px;
    margin-bottom: 30px;
    height: auto;
    min-height: 246px;

    @media(max-width: ${MOBILE}) {
        min-height: auto;
        margin-bottom: 20px;
    }
`;

export const ContentOne = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 0px;

    @media(max-width: ${MINI_DESKTOP}) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
`;

export const ContentTwo = styled.div`
    width: 320px;

    @media(max-width: ${MOBILE}) {
       width: 100%;
    }
`;

export const ContentThree = styled.div`
    width: 320px;

    @media(max-width: ${MOBILE}) {
       width: 100%;
    }
`;

export const CustomInput = styled(Input)`
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
