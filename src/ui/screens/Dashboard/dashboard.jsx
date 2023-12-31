import { Header } from "./header/header";
// import SolarPanelImg from "../../../assets/imgs/solar-panel.webp";
import ArrowRightImg from "../../../assets/imgs/arrow-right-white.svg";
import {
  Body,
  Container,
  Content,
  ContentWrapper,
  ImageContainer,
  InputContainer,
  MobileImageContainer,
  Wrapper,
} from "./dashboard.style";
import { Description, Text, Title } from "../../../components/title/title";
import { Button } from "../../../components/button/button";
import { Input } from "../../../components/input/input";
import { Footer } from "./footer/footer";
import { useState } from "react";
import { toast } from "react-toastify";
import { validateEmail } from "../../../utils/validate";
import {
  SET_ADDRESS,
  SET_EMAIL,
  SET_STEP,
  SET_MODEL_ID,
} from "../../redux/types";
import { useNavigate } from "react-router-dom";
import { PlaceFragment } from "./fragments/place/place";
import { SolarFragment } from "./fragments/solar/solar";
import { ControlFragment } from "./fragments/control/control";
import { NetworkFragment } from "./fragments/network/network";
import { createModel, updateModel } from "../../api/server";
import { usePlacesWidget } from "react-google-autocomplete";
import { useGa } from "../../hooks/useGa";

// import ReactGA from "react-ga4";

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

const Dashboard = ({ stringsObj }) => {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addr, setAddr] = useState({});
  const [errMail, setErrMail] = useState(false);
  const [errAddress, setErrAddress] = useState("");
  const dispatch = () => {};
  const navigate = useNavigate();

  const { ga: ReactGA } = useGa();

  const { ref } = usePlacesWidget({
    options: options,
    onPlaceSelected: (place) => {
      if (place) {
        const components = place.address_components;
        const street_number = components?.filter((plc, i) =>
          plc.types?.includes("street_number")
        );
        const state = components?.filter(
          (plc, i) =>
            plc.types?.includes("administrative_area_level_1") &&
            plc.types?.includes("political")
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
    },
  });

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
    navigate("/setup");
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
    navigate("/setup");
  };

  return (
    <Body>
      <Container>
        <Wrapper>
          <Header />
          <ContentWrapper id="main-page">
            <Content>
              <Title caption={stringsObj.hero_heading_1} />
              <Text caption={stringsObj.hero_heading_2} />
              <MobileImageContainer>
                <img
                  src={"/images/solar-panel.webp"}
                  loading="eager"
                  alt="solar-panel"
                  fetchpriority="high"
                />
              </MobileImageContainer>
              <Description
                caption={stringsObj.hero_body}
                style={{ marginTop: 30, marginBottom: 10 }}
              />
              <InputContainer>
                <Input
                  // apiKey={"AIzaSyDLs8yb_ANP72I7nKNkiYd51P6zh_R5_4Q"}
                  placeholder={stringsObj.hero_enter_address}
                  iserror={errAddress ? 1 : 0}
                  options={options}
                  ref={ref}
                />
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
                rightIcon={<img src={ArrowRightImg} alt="arrow" />}
                style={{
                  fontSize: 20,
                  justifyContent: "space-between",
                  padding: "0 40px",
                  marginTop: 10,
                }}
              />
            </Content>
            <ImageContainer>
              <img
                src={"/images/solar-panel.webp"}
                loading="eager"
                alt="solar-panel"
                fetchpriority="high"
              />
            </ImageContainer>
          </ContentWrapper>
        </Wrapper>
      </Container>
      <PlaceFragment stringsObj={stringsObj} />
      <SolarFragment stringsObj={stringsObj} />
      <ControlFragment stringsObj={stringsObj} />
      <NetworkFragment stringsObj={stringsObj} />
      <Footer />
    </Body>
  );
};

export default Dashboard;
