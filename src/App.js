import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Root } from "./ui/root/root";
import { useEffect, useState } from "react";
import { MobileMenu } from "./ui/screens/Dashboard/header/header.style";
import { AiOutlineClose } from "react-icons/ai/index.esm";
import { useDispatch, useSelector } from "react-redux";
import { SET_OPEN_MENU } from "./ui/redux/types";
import { getStringsForAdId } from "./ui/api/server";

import defaultCopyStrings from "./assets/strings/defaults";
import "./App.css";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Dashboard = lazy(() => import("./ui/screens/Dashboard/dashboard"));
const Setup1 = lazy(() => import("./ui/screens/setup-1/setup1"));
const Setup2 = lazy(() => import("./ui/screens/setup-2/setup2"));
const Setup3 = lazy(() => import("./ui/screens/setup-3/setup3"));
const Setup4 = lazy(() => import("./ui/screens/setup-4/setup4"));
const Page404 = lazy(() => import("./ui/screens/404/404"));
function App() {
  const dispatch = useDispatch();

  const openMenu = useSelector((state) => state.openMenu);
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 1, y: "-100%" },
  };

  const [stringObjState, setStringObjState] = useState(defaultCopyStrings);
  let query = useQuery();
  useEffect(() => {
    const ad_group_id = query.get("ad_group_id");
    if (ad_group_id) {
      getStringsForAdId(dispatch, ad_group_id).then((respStringsObj) => {
        setStringObjState(respStringsObj);
      });
    }
  }, [dispatch, query]);

  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Dashboard stringsObj={stringObjState} />} />
          <Route path="/setup" element={<Root />}>
            <Route index element={<Navigate to={"/setup/step-1"} replace />} />
            <Route
              path="step-1"
              element={<Setup1 stringsObj={stringObjState} />}
            />
            <Route
              path="step-2"
              element={<Setup2 stringsObj={stringObjState} />}
            />
            <Route
              path="step-3"
              element={<Setup3 stringsObj={stringObjState} />}
            />
            <Route
              path="step-4"
              element={<Setup4 stringsObj={stringObjState} />}
            />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
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
          <AiOutlineClose size={40} color={"#FFF"} style={{ padding: 20 }} />
        </div>
      </MobileMenu>
    </>
  );
}

export default App;
