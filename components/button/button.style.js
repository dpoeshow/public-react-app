import styled from "styled-components";
import { COLORS } from "../../assets/color";
import { MOBILE } from "../../assets/size";

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 128px;
    min-height: 40px;
    font-size: 15px;
    color: ${(props) => (props.color ? props.color : "#FFF")};
    font-family: 'ProximaNovaSemibold';
    cursor: pointer;
    border-radius: 100px;
    background: ${(props) => (props.bgcolor ? props.bgcolor : COLORS.primary)};

    & > label {
        cursor: pointer;
    }

    &:hover {
        background: ${(props) => (props.hvcolor ? props.hvcolor : COLORS.primary1)};
    }

    @media(max-width: ${MOBILE}) {
        width: calc(80% - 40px) !important;
    }
`;

export const LeftIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
`;

export const RightIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
`;
