import LogoImg from "../../../assets/imgs/LOGO.svg?react";
import MenuImg from "../../../assets/imgs/menu.svg?react";
import { Button } from "../../../components/button/button";
import {
  Container,
  LogoWrapper,
  MenuIconContianer,
  ToolsWrapper,
  Wrapper,
} from "./header.style";
// TO-DO Required
import ProgressBar from "@ramonak/react-progress-bar";
import { COLORS } from "../../../assets/color";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TbUserPlus } from "react-icons/tb";
import { LiaBlogSolid } from "react-icons/lia";
import { isBrowser } from "../../../utils/isBrowser";
// import { BiSupport } from "react-icons/bi";

export const Header = () => {
  const location = useLocation();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isBrowser()) {
      return;
    }
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
        <LogoWrapper
          href="/"
          aria-label="Navigate to Home screen of SunfoxSolar.net"
        >
          <LogoImg />
        </LogoWrapper>
        <ToolsWrapper>
          <Button
            caption={"Developers"}
            height={40}
            width={150}
            onClick={() => {
              window.open("https://blog.sunfoxsolar.net/developers", "_self");
            }}
            leftIcon={<TbUserPlus size={22} color="#FFF" />}
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
            leftIcon={<LiaBlogSolid size={22} color="#FFF" />}
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
          <MenuImg />
        </MenuIconContianer>
      </Wrapper>
      {/* <ProgressBar
        completed={step * 25}
        width="100%"
        height="10px"
        className="progress-bar"
        borderRadius="0px"
        bgColor={COLORS.primary}
        baseBgColor={COLORS.gray2}
        isLabelVisible={false}
      /> */}
    </Container>
  );
};
