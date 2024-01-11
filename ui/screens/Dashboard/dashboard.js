import { Header } from "./header/header";
import Image from "next/image";
import envStrings from "../../../assets/strings/env";
import {
  Body,
  Container,
  Content,
  ContentWrapper,
  ImageContainer,
  InputContainer,
  MobileImageContainer,
  PlaceInput,
  Wrapper,
} from "./dashboard.style";
import { Description, Text, Title } from "../../../components/title/title";
import { Button } from "../../../components/button/button";
import { Input } from "../../../components/input/input";
import { Footer } from "./footer/footer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { validateEmail } from "../../../utils/validate";
import { useDispatch } from "react-redux";
import {
  SET_ADDRESS,
  SET_EMAIL,
  SET_STEP,
  SET_MODEL_ID,
} from "../../../redux/types";
import { useRouter } from "next/navigation";
import { PlaceFragment } from "./fragments/place/place";
import { SolarFragment } from "./fragments/solar/solar";
import { ControlFragment } from "./fragments/control/control";
import { NetworkFragment } from "./fragments/network/network";
import { createModel, updateModel } from "../../../api/server";

import ReactGA from "react-ga4";
import useWindowSize from "@/utils/hooks/use-window-size";
import { MOBILE } from "@/assets/size";
ReactGA.initialize(envStrings.google_analytics_id);

const options = {
  componentRestrictions: { country: "us" },
  fields: [
    "address_components",
    "geometry",
    "icon",
    "name",
    "formatted_address",
  ],
  types: ["address"],
};

export const Dashboard = ({ stringsObj }) => {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addr, setAddr] = useState({});
  const [errMail, setErrMail] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [errAddress, setErrAddress] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { width } = useWindowSize();

  const goModel = () => {
    if (!address || !addr) {
      toast("Please enter an address.", { type: "error" });
      setErrAddress(true);
      return;
    }
    if (!email) {
      toast("Please enter an email.", { type: "error" });
      setErrMail(true);
      return;
    }
    if (!validateEmail(email)) {
      toast("Please enter valid email.", { type: "error" });
      setErrMail(true);
      return;
    }

    dispatch({
      type: SET_EMAIL,
      payload: email,
    });
    dispatch({
      type: SET_STEP,
      payload: 1,
    });
    dispatch({
      type: SET_ADDRESS,
      payload: {
        address,
        addr,
      },
    });
    router.push("/setup");
    createModel(dispatch).then((model_id) => {
      dispatch({
        type: SET_MODEL_ID,
        payload: model_id,
      });

      ReactGA.event({
        category: "react_flow_addresses_entered",
        action: "react_flow_addresses_entered",
      });
      updateModel(dispatch, model_id, {
        email: email,
        address: address,
        should_recalculate: true,
      }).then(() => {});
    });
    router.push("/setup");
  };

  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setPageLoaded(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <Body>
      <Container>
        <Wrapper>
          <Header />
          <ContentWrapper id="main-page">
            <Content>
              <Title caption={stringsObj.hero_heading_1} />
              <Text caption={stringsObj.hero_heading_2} />
              {width <= parseInt(MOBILE.trimEnd("px")) && (
                <MobileImageContainer>
                  <Image
                    src={"/imgs/solar-panel-mobile.webp"}
                    alt="solar-panel"
                    width={360}
                    height={242}
                    priority={true}
                    loading="eager"
                  />
                </MobileImageContainer>
              )}
              <Description
                caption={stringsObj.hero_body}
                style={{ marginTop: 30, marginBottom: 10 }}
              />
              <InputContainer>
                {pageLoaded && (
                  <PlaceInput
                    apiKey={"AIzaSyDLs8yb_ANP72I7nKNkiYd51P6zh_R5_4Q"}
                    libraries={["places"]}
                    placeholder={stringsObj.hero_enter_address}
                    iserror={errAddress ? 1 : 0}
                    options={options}
                    onPlaceSelected={(place) => {
                      if (place) {
                        const components = place.address_components;
                        const street_number = components?.filter((plc, i) =>
                          plc.types?.includes("street_number")
                        );
                        const state = components?.filter(
                          (plc, i) =>
                            plc.types?.includes(
                              "administrative_area_level_1"
                            ) && plc.types?.includes("political")
                        );
                        const zip = components?.filter((plc, i) =>
                          plc.types?.includes("postal_code")
                        );
                        const city = components?.filter((plc, i) =>
                          plc.types?.includes("neighborhood")
                        );
                        const street = components?.filter((plc, i) =>
                          plc.types?.includes("route")
                        );

                        const addr = {
                          street: street?.length ? street[0].short_name : "",
                          city: city?.length ? city[0].short_name : "",
                          state: state?.length ? state[0].short_name : "",
                          zip: zip?.length ? zip[0].short_name : "",
                          street_number: street_number?.length
                            ? street_number[0].short_name
                            : "",
                        };
                        setAddr(addr);
                        setAddress(place?.formatted_address);
                        setErrAddress(false);
                      }
                    }}
                  />
                )}
                <Input
                  iserror={errMail ? 1 : 0}
                  placeholder={stringsObj.hero_enter_email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrMail(false);
                  }}
                />
              </InputContainer>
              <Button
                caption={stringsObj.cta_text}
                height={56}
                width={"calc(100% - 80px)"}
                onClick={goModel}
                rightIcon={
                  <Image
                    src={"/imgs/arrow-right-white.svg"}
                    alt="arrow"
                    width={21}
                    height={23}
                  />
                }
                style={{
                  fontSize: 20,
                  justifyContent: "space-between",
                  padding: "0 40px",
                  marginTop: 10,
                }}
              />
            </Content>
            {width > parseInt(MOBILE.trimEnd("px")) && (
              <ImageContainer>
                <Image
                  src={"/imgs/solar-panel.webp"}
                  alt="solar-panel"
                  fill={true}
                  objectFit="cover"
                  style={{ inset: "unset" }}
                  priority={true}
                />
              </ImageContainer>
            )}
          </ContentWrapper>
        </Wrapper>
      </Container>
      <PlaceFragment stringsObj={stringsObj} />
      <SolarFragment stringsObj={stringsObj} width={width} />
      <ControlFragment stringsObj={stringsObj} />
      <NetworkFragment stringsObj={stringsObj} width={width} />
      <Footer />
    </Body>
  );
};
