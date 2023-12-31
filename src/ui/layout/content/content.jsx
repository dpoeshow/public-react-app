import { Outlet } from "react-router-dom";
import { Container } from "./content.style";

export const Content = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    );
};
