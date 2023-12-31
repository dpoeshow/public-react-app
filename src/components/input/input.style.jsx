import styled from "styled-components";
import { COLORS } from "../../assets/color";
import { TABLET } from "../../assets/size";

export const InputContainer = styled.div`
    width: 100%;
    margin: 10px 0;

    & > input {
        padding: 0 20px;
        width: calc(100% - 40px);
        height: 56px;
        border-radius: 30px;
        min-height: 40px;
        outline: none;
        
        border: 1px solid ${(props) => (props.iserror ? "red" : COLORS.gray1)};
        font-size: 20px;
        font-weight: 500;
        font-family: 'ProximaNovaRegular';

        &:focus {
             border: 1px solid #000000;
        }

        &::placeholder {
            color: ${COLORS.gray1};
            opacity: 1; /* Firefox */
        }

        &::-ms-input-placeholder { /* Edge 12 -18 */
            color: ${COLORS.gray1};
        }

        @media(max-width: ${TABLET}) {
            font-size: 15px;
        }
    }
`;

export const InputSuffixContainer = styled.div`
    width: 100%;
    margin: 10px 0;
    display: inline-block;
    position: relative;

    &::after {
        position: absolute;
        top: 20px;
        right: 40px;
        transition: all .05s ease-in-out;
    }

    &:hover::after,
    &:focus-within::after {
        right: 40px;
    }

    @supports (-moz-appearance:none) {
        &::after {
            right: 40px;
        }
    }

    &::after {
        content: "kW";
        font-size: 20px;
        font-weight: 500;
        font-family: 'ProximaNovaRegular';
    }

    & > input {
        padding: 0 20px;
        width: calc(100% - 40px);
        height: 60px;
        border-radius: 30px;
        min-height: 40px;
        outline: none;
        
        border: 1px solid ${(props) => (props.iserror ? "red" : COLORS.gray1)};
        font-size: 20px;
        font-weight: 500;
        font-family: 'ProximaNovaRegular';

        &:focus {
             border: 1px solid #000000;
        }

        &::placeholder {
            color: ${COLORS.gray1};
            opacity: 1; /* Firefox */
        }

        &::-ms-input-placeholder { /* Edge 12 -18 */
            color: ${COLORS.gray1};
        }

        @media(max-width: ${TABLET}) {
            font-size: 15px;
        }
    }
`;

export const InputPrefixContainer = styled.div`
    width: 100%;
    margin: 10px 0;
    display: inline-block;
    position: relative;

    &::after {
        position: absolute;
        top: 20px;
        left: 20px;
        transition: all .05s ease-in-out;
    }

    &:hover::after,
    &:focus-within::after {
        left: 20px;
    }

    @supports (-moz-appearance:none) {
        &::after {
            left: 20px;
        }
    }

    &::after {
        content: "$";
        font-size: 20px;
        font-weight: 500;
        font-family: 'ProximaNovaRegular';
    }

    & > input {
        padding: 0 40px;
        width: calc(100% - 80px);
        height: 60px;
        border-radius: 30px;
        min-height: 40px;
        outline: none;
        
        border: 1px solid ${(props) => (props.iserror ? "red" : COLORS.gray1)};
        font-size: 20px;
        font-weight: 500;
        font-family: 'ProximaNovaRegular';

        &:focus {
             border: 1px solid #000000;
        }

        &::placeholder {
            color: ${COLORS.gray1};
            opacity: 1; /* Firefox */
        }

        &::-ms-input-placeholder { /* Edge 12 -18 */
            color: ${COLORS.gray1};
        }

        @media(max-width: ${TABLET}) {
            font-size: 15px;
        }
    }
`;
