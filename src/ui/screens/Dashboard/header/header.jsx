import LogoImg from "../../../../assets/imgs/LOGO.svg";
import { SpaceBetween } from "../../../../assets/styles/global.style";
import { Button } from "../../../../components/button/button";
import { LogoWrapper, MenuIconContianer, ToolsWrapper } from "./header.style";
import MenuImg from "../../../../assets/imgs/menu.svg";
import { COLORS } from "../../../../assets/color";
import { TbUserPlus } from "react-icons/tb";
import { LiaBlogSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { SET_OPEN_MENU } from "../../../context/types";
import { useDispatch } from "../../../context/context";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <SpaceBetween style={{ width: "100%" }}>
      <LogoWrapper href="/">
        <img src={LogoImg} alt="logo-img" width={150} height={100} />
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
        <Button
          caption={"Supporters"}
          height={40}
          width={150}
          hovercolor={COLORS.gray}
          bgColor={"#FFFFFF"}
          color={"#000000"}
          onClick={() => {
            const elementToScroll = document.getElementById("control");
            if (!elementToScroll) return;
            window.scrollTo({
              top: elementToScroll.offsetTop,
              behavior: "smooth",
            });
          }}
          leftIcon={<BiSupport size={22} color="#000" />}
          style={{ border: "1px solid #000" }}
        />
      </ToolsWrapper>
      <MenuIconContianer
        onClick={() => {
          dispatch({
            type: SET_OPEN_MENU,
            payload: true,
          });
        }}
      >
        <img src={MenuImg} alt="menu-img" />
      </MenuIconContianer>
    </SpaceBetween>
  );
};
