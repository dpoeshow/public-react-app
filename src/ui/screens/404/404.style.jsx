import styled from "styled-components";
import { MOBILE } from "../../../assets/size";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    & > img {
        @media(max-width: ${MOBILE}) {
            width: 80%;
        }
    }
`;
