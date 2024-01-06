import { MobileMenu } from "./ui/screens/Dashboard/header/header.style";
import * as AiICons from "react-icons/ai";
import { SET_OPEN_MENU } from "./ui/context/types";

import { useDispatch, useSelector } from "./ui/context/context";
import { AppRoutes } from "./route";

function App() {
  const dispatch = useDispatch();

  const openMenu = useSelector((state) => state.openMenu);
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 1, y: "-100%" },
  };

  return (
    <>
      <AppRoutes />
      <MobileMenu
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        animate={openMenu ? "open" : "closed"}
        variants={variants}
        style={{ display: openMenu ? "flex" : "none" }}
      >
        <div
          onClick={() => {
            dispatch({
              type: SET_OPEN_MENU,
              payload: false,
            });
            window.open("https://blog.sunfoxsolar.net/developers", "_self");
          }}
        >
          Developers
        </div>
        <div
          onClick={() => {
            dispatch({
              type: SET_OPEN_MENU,
              payload: false,
            });
            window.open("https://blog.sunfoxsolar.net/blog", "_self");
          }}
        >
          Blog
        </div>
        <div
          onClick={() => {
            dispatch({
              type: SET_OPEN_MENU,
              payload: false,
            });
            const elementToScroll = document.getElementById("control");
            if (!elementToScroll) return;
            window.scrollTo({
              top: elementToScroll.offsetTop,
              behavior: "smooth",
            });
          }}
        >
          Supporters
        </div>
        <div
          onClick={() => {
            dispatch({
              type: SET_OPEN_MENU,
              payload: false,
            });
          }}
        >
          <AiICons.AiOutlineClose
            size={40}
            color={"#FFF"}
            style={{ padding: 20 }}
          />
        </div>
      </MobileMenu>
    </>
  );
}

export default App;
