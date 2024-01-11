import Image from "next/image";
import MenuImg from "../../../public/imgs/menu.svg";
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
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TbUserPlus } from "react-icons/tb";
import { LiaBlogSolid } from "react-icons/lia";
// import { BiSupport } from "react-icons/bi";

export const Header = () => {
  const pathname = usePathname();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (pathname === "/setup" || pathname === "/setup/step-1") {
      setStep(1);
    } else if (pathname === "/setup/step-2") {
      setStep(2);
    } else if (pathname === "/setup/step-3") {
      setStep(3);
    } else if (pathname === "/setup/step-4") {
      setStep(4);
    }
  }, [pathname]);

  return (
    <Container>
      <Wrapper style={{ paddingTop: 34, paddingBottom: 24 }}>
        <LogoWrapper href="/">
          <Image
            src={"/imgs/logo.svg"}
            width={199}
            height={40}
            alt="logo-img"
          />
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
          <Image src={"/imgs/menu.svg"} alt="menu-img" width={50} height={50} />
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
