import LogoImg from "../../../assets/imgs/LOGO.svg";
import MenuImg from "../../../assets/imgs/menu.svg";
import { Button } from "../../../components/button/button";
import {
  Container,
  LogoWrapper,
  MenuIconContianer,
  ToolsWrapper,
  Wrapper,
} from "./header.style";
import ProgressBar from "@ramonak/react-progress-bar";
import { COLORS } from "../../../assets/color";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import * as TbIcons from "react-icons/tb";
import * as LiaIcons from "react-icons/lia";
// import { BiSupport } from "react-icons/bi";

export const Header = () => {
  const location = useLocation();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (
      location.pathname === "/setup" ||
      location.pathname === "/setup/step-1"
    ) {
      setStep(1);
    } else if (location.pathname === "/setup/step-2") {
      setStep(2);
    } else if (location.pathname === "/setup/step-3") {
      setStep(3);
    } else if (location.pathname === "/setup/step-4") {
      setStep(4);
    }
  }, [location]);

  return (
    <Container>
      <Wrapper style={{ paddingTop: 34, paddingBottom: 24 }}>
        <LogoWrapper href="/">
          <img src={LogoImg} alt="logo-img" />
        </LogoWrapper>
        <ToolsWrapper>
          <Button
            caption={"Developers"}
            height={40}
            width={150}
            onClick={() => {
              window.open("https://blog.sunfoxsolar.net/developers", "_self");
            }}
            leftIcon={<TbIcons.TbUserPlus size={22} color="#FFF" />}
          />
          <Button
            caption={"Blog"}
            height={40}
            width={150}
            hovercolor={"#2b2a2a"}
            bgColor={"#000000"}
            onClick={() => {
              window.open("https://blog.sunfoxsolar.net/blog", "_self");
            }}
            leftIcon={<LiaIcons.LiaBlogSolid size={22} color="#FFF" />}
          />
          {/* <Button
						caption={"Supporters"}
						height={40}
						width={150}
						hovercolor={COLORS.gray}
						bgColor={"#FFFFFF"}
						color={"#000000"}
						onClick={() => {
							const elementToScroll =
								document.getElementById("control");
							if (!elementToScroll) return;
							window.scrollTo({
								top: elementToScroll.offsetTop,
								behavior: "smooth",
							});
						}}
						leftIcon={<BiSupport size={22} color="#000" />}
						style={{ border: "1px solid #000" }}
					/> */}
        </ToolsWrapper>
        <MenuIconContianer>
          <img src={MenuImg} alt="menu-img" />
        </MenuIconContianer>
      </Wrapper>
      <ProgressBar
        completed={step * 25}
        width="100%"
        height="10px"
        className="progress-bar"
        borderRadius="0px"
        bgColor={COLORS.primary}
        baseBgColor={COLORS.gray2}
        isLabelVisible={false}
      />
    </Container>
  );
};
