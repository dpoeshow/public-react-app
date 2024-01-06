import styled from "styled-components";
import { MINI_DESKTOP, MOBILE, TABLET } from "../../assets/size";

export const LabelTitle = styled.label`
    font-size: 56px;
    font-weight: 700;
    font-family: "ProximaNovaBold";

    @media(max-width: ${MINI_DESKTOP}) {
        font-size: 52px;
    }

    @media(max-width: ${TABLET}) {
        font-size: 46px;
    }

    @media(max-width: ${MOBILE}) {
        font-size: 40px;
        text-align: center;
    }
`;

export const Label = styled.label`
    font-size: 25px;
    font-family: 'ProximaNovaRegular';

    @media(max-width: ${MOBILE}) {
        font-size: 16px !important;
        text-align: center;
        max-width: 90%;
        margin-top: 10px;
    }
`;
