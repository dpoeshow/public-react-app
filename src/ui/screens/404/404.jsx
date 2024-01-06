import { useNavigate } from "react-router-dom";
import Img404 from "../../../assets/imgs/404.webp";
import { Button } from "../../../components/button/button";
import { Container } from "./404.style";

const Page404 = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    };
    return (
        <Container>
            <img src={Img404} alt="no-result" />
            <Button caption={"Go Home"} height={60} style={{ maxWidth: 300, marginTop: 70 }} onClick={goHome} />
        </Container>
    );
};

export default Page404;
