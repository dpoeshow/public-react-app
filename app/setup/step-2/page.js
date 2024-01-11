"use client";
import envStrings from "@/assets/strings/env";
import { Button } from "@/components/button/button";
import { Description, Text, Title } from "@/components/title/title";
import {
  ButtonContainer,
  ContentContainer,
  InfoContainer,
  LeftSide,
  RightSide,
  Side,
  StepContent,
} from "./setup2.style";
import { COLORS } from "@/assets/color";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SET_INSTALL_COST, SET_SIZE, SET_STEP } from "@/redux/types";
import { InputSuffix } from "@/components/input/input-suffix";
import { toast } from "react-toastify";
import { updateModel, getinstallCostRecommender } from "@/api/server";
import { SlideAnimation } from "@/components/slide-animation";
import defaultCopyStrings from "@/assets/strings/defaults";
import { Layout } from "@/ui/layout/Layout";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import ReactGA from "react-ga4";
ReactGA.initialize(envStrings.google_analytics_id);

const Step2 = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const loading = useSelector((state) => state.loading);
  const email = useSelector((state) => state.email);
  const address = useSelector((state) => state.address);
  const recommendSize = useSelector((state) => state.recommend_size);
  const model_id = useSelector((state) => state.model_id);
  const [size, setSize] = useState(0);
  const [error, setError] = useState(false);
  const step = useSelector((state) => state.step);

  const stringsObj = defaultCopyStrings;

  useEffect(() => {
    if (!(step >= 2 && pathname === "/setup/step-2")) {
      router.push("/");
    }
  }, [step, router, pathname]);

  useEffect(() => {
    if (recommendSize) {
      setSize(recommendSize);
    }
  }, [recommendSize]);

  useEffect(() => {
    ReactGA.event({
      category: "react_flow_install_size_loaded",
      action: "react_flow_install_size_loaded",
    });
  }, []);

  const goBack = () => {
    dispatch({
      type: SET_STEP,
      payload: 1,
    });
    router.back();
  };

  const goDashboard = () => {
    dispatch({
      type: SET_STEP,
      payload: 0,
    });
    router.push("/");
  };

  const goNext = () => {
    if (!size) {
      toast("Please enter desired size.", { type: "error" });
      setError(true);
      return;
    }
    getinstallCostRecommender(dispatch, {
      addr: address,
      install_size: size,
    })
      .then((res) => {
        ReactGA.event({
          category: "react_flow_install_cost_returned",
          action: "react_flow_install_cost_returned",
        });

        dispatch({
          type: SET_SIZE,
          payload: size,
        });
        dispatch({
          type: SET_INSTALL_COST,
          payload: res,
        });
        dispatch({
          type: SET_STEP,
          payload: 3,
        });
        updateModel(dispatch, model_id, {
          recommended_total_install_cost: res.install_cost_total,
          recommended_per_kw_install_cost: res.install_cost_per_kw,
        }).then(() => {});
        router.push("/setup/step-3");
      })
      .catch((err) => {
        toast(err, { type: "error" });
      });
  };

  return (
    <Layout>
      <SlideAnimation>
        <ContentContainer style={{ background: "transparent" }}>
          <Side>
            <LeftSide>
              <Title caption={stringsObj.install_size_hero_text} />
              <Text caption={stringsObj.install_size_hero_subheading_1} />
              <InfoContainer>
                <Description caption={stringsObj.install_size_address} />
                <Text caption={address} />
                <Description caption={"Your Email"} style={{ marginTop: 10 }} />
                <Text caption={email} />
                <Button
                  caption={"Edit Details"}
                  height={56}
                  width={200}
                  onClick={goDashboard}
                  leftIcon={
                    <Image
                      src={"/imgs/pencil.svg"}
                      alt="pencil"
                      width={21}
                      height={21}
                    />
                  }
                  style={{ background: "#000000", marginTop: 20 }}
                />
              </InfoContainer>
            </LeftSide>
            <RightSide>
              <StepContent>
                <p>
                  Based on your power bill, and the amount of sunlight you
                  receive at
                  <label> {address},</label> we recommend an installation size
                  of around <label>{recommendSize} kW</label>.
                </p>
                <p>{stringsObj.install_size_estimate_disclaimer}</p>
                <InputSuffix
                  placeholder={"Enter your desired installation size"}
                  value={size ? size : ""}
                  iserror={error ? 1 : 0}
                  type="number"
                  onChange={(e) => {
                    setSize(Number(e.target.value));
                    setError(false);
                  }}
                  style={{ maxWidth: 500 }}
                />
              </StepContent>
              <ButtonContainer>
                <Button
                  caption={"Continue"}
                  height={60}
                  width={"100%"}
                  loading={loading}
                  onClick={goNext}
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
                    maxWidth: 140,
                  }}
                />
                <Button
                  caption={"or Go back"}
                  height={60}
                  width={"100%"}
                  onClick={goBack}
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
                    background: "transparent",
                    color: COLORS.gray3,
                    maxWidth: 140,
                    marginLeft: 20,
                  }}
                />
              </ButtonContainer>
            </RightSide>
          </Side>
        </ContentContainer>
      </SlideAnimation>
    </Layout>
  );
};

export default Step2;
