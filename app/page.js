"use client";
import styles from "./page.module.css";

import { Dashboard } from "../ui/screens/Dashboard/dashboard";
import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { MobileMenu } from "../ui/screens/Dashboard/header/header.style";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { SET_OPEN_MENU } from "../redux/types";
import { getStringsForAdId } from "../api/server";
import defaultCopyStrings from "../assets/strings/defaults";

import { useSearchParams } from "next/navigation";

function useQuery() {
  const search = useSearchParams();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Home() {
  const dispatch = useDispatch();

  const openMenu = useSelector((state) => state.openMenu);
  //const openMenu = false;
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
    <Suspense fallback={<h1>Loading...</h1>}>
      <Dashboard stringsObj={stringObjState} />
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
    </Suspense>
  );
}
