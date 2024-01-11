"use client";
import envStrings from "@/assets/strings/env";
import { Button } from "@/components/button/button";
import { Description, Text, Title } from "@/components/title/title";
import { Container } from "@/ui/layout/header/header.style";
import {
  ButtonContainer,
  ContentOne,
  ContentThree,
  ContentTwo,
  CustomInput,
  InfoContainer,
  LeftSide,
  RightSide,
  Side,
  StepContainer,
  StepContent,
  StepLabel,
  StepRadio,
  StepRadioActive,
  Stepper,
} from "./setup1.style";
import { COLORS } from "@/assets/color";
import { Input } from "@/components/input/input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_MODE,
  SET_MONTH_COST,
  SET_RECOMMEND_SIZE,
  SET_STEP,
} from "@/redux/types";
import { toast } from "react-toastify";
import { SlideAnimation } from "@/components/slide-animation";
import {
  getinstallSizeRecommender,
  updateModel,
  updateBill,
} from "@/api/server";
import defaultCopyStrings from "@/assets/strings/defaults";
import {Layout} from "@/ui/layout/Layout";
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';

import ReactGA from "react-ga4";
ReactGA.initialize(envStrings.google_analytics_id);

const MONTHS = [
  {
    id: 0,
    name: "January",
  },
  {
    id: 1,
    name: "February",
  },
  {
    id: 2,
    name: "March",
  },
  {
    id: 3,
    name: "April",
  },
  {
    id: 4,
    name: "May",
  },
  {
    id: 5,
    name: "June",
  },
  {
    id: 6,
    name: "July",
  },
  {
    id: 7,
    name: "August",
  },
  {
    id: 8,
    name: "September",
  },
  {
    id: 9,
    name: "October",
  },
  {
    id: 10,
    name: "November",
  },
  {
    id: 11,
    name: "December",
  },
];

const Step1 = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const loading = useSelector((state) => state.loading);
  const email = useSelector((state) => state.email);
  const address = useSelector((state) => state.address);
  const addr = useSelector((state) => state.addr);
  const mode = useSelector((state) => state.mode);
  const step = useSelector((state) => state.step);
  const model_id = useSelector((state) => state.model_id);
  const [isError, setIsError] = useState(false);

  const stringsObj = defaultCopyStrings;

  // COST VARIABLE FORM MODE 1 (PAST 12 MONTHS)
  const [monthCosts, setMonthCosts] = useState([
    {
      id: 0,
      name: "jan",
      value: 0,
    },
    {
      id: 1,
      name: "feb",
      value: 0,
    },
    {
      id: 2,
      name: "mar",
      value: 0,
    },
    {
      id: 3,
      name: "apr",
      value: 0,
    },
    {
      id: 4,
      name: "may",
      value: 0,
    },
    {
      id: 5,
      name: "jun",
      value: 0,
    },
    {
      id: 6,
      name: "jul",
      value: 0,
    },
    {
      id: 7,
      name: "aug",
      value: 0,
    },
    {
      id: 8,
      name: "sep",
      value: 0,
    },
    {
      id: 9,
      name: "oct",
      value: 0,
    },
    {
      id: 10,
      name: "nov",
      value: 0,
    },
    {
      id: 11,
      name: "dec",
      value: 0,
    },
  ]);
  // COST VARIABLE FOR MODE 2 (SUMMER VS WINTER)
  const [monthCosts1, setMonthCosts1] = useState([
    {
      id: 0,
      name: "summer",
      value: 0,
    },
    {
      id: 1,
      name: "winter",
      value: 0,
    },
  ]);
  // COST VARIABLE FOR MODE 3 (MONTHLY)
  const [monthCosts2, setMonthCosts2] = useState(0);

  useEffect(() => {
    if (
      !step >= 1 &&
      (pathname === "/setup/step-1" || pathname === "/setup")
    ) {
      router.push("/");
    }
  }, [step, router, pathname]);

  const goBack = () => {
    dispatch({
      type: SET_STEP,
      payload: 0,
    });
    router.back();
  };

  const passData = (data, cost) => {
    ReactGA.event({
      category: "react_flow_bill_submitted",
      action: "react_flow_bill_submitted",
    });
    getinstallSizeRecommender(dispatch, data)
      .then((res) => {
        ReactGA.event({
          category: "react_flow_install_size_recommended",
          action: "react_flow_install_size_recommended",
        });

        const recommended_size_kw = parseFloat(res.recommended_size_kw).toFixed(
          2
        );
        dispatch({
          type: SET_MONTH_COST,
          payload: cost,
        });
        dispatch({
          type: SET_RECOMMEND_SIZE,
          payload: recommended_size_kw,
        });
        dispatch({
          type: SET_STEP,
          payload: 2,
        });
        updateBill(dispatch, model_id, data.monthly_costs).then((res) => {
          updateModel(dispatch, model_id, {
            recommended_install_size: recommended_size_kw,
            react_bill_entries: cost,
          }).then(() => {
            ReactGA.event({
              category: "react_flow_install_size_updated",
              action: "react_flow_install_size_updated",
            });
          });
        });
        router.push("/setup/step-2");
      })
      .catch((err) => {
        toast(err, { type: "error" });
      });
  };

  const goNext = () => {
    if (mode === 0) {
      const result = monthCosts.filter((month) => month.value === 0);
      if (result?.length) {
        setIsError(true);
        toast("Please fill all fields!", { type: "error" });
        return;
      } else {
        const temp = monthCosts.map((month) => month.value);
        passData({ ...addr, monthly_costs: JSON.stringify(temp) }, temp);
      }
    } else if (mode === 1) {
      if (!monthCosts1[0].value || !monthCosts1[1].value) {
        setIsError(true);
        toast("Please fill all fields!", { type: "error" });
        return;
      } else {
        passData(
          {
            ...addr,
            monthly_costs: JSON.stringify([
              monthCosts1[0].value,
              monthCosts1[1].value,
            ]),
          },
          [monthCosts1[0].value, monthCosts1[1].value]
        );
      }
    } else {
      if (!monthCosts2) {
        setIsError(true);
        toast("Please fill all fields!", { type: "error" });
        return;
      } else {
        passData({ ...addr, monthly_costs: JSON.stringify([monthCosts2]) }, [
          monthCosts2,
        ]);
      }
    }
  };

  useEffect(() => {
    setIsError(false);
  }, [mode]);

  const handleCost = (e, id) => {
    if (e.target.value?.includes("$")) {
      if (!isNaN(e.target.value?.substring(1))) {
        const updatedPrices = monthCosts.map((mon) => {
          if (id === mon.id) {
            mon["value"] = Number(e.target.value.substring(1));
          }
          return mon;
        });
        setMonthCosts(updatedPrices);
      }
    } else if (!isNaN(e.target.value)) {
      const updatedPrices = monthCosts.map((mon) => {
        if (id === mon.id) {
          mon["value"] = Number(e.target.value);
        }
        return mon;
      });
      setMonthCosts(updatedPrices);
    }
  };

  const handleCost1 = (e, id) => {
    if (e.target.value?.includes("$")) {
      if (!isNaN(e.target.value?.substring(1))) {
        const updatedPrices = monthCosts1.map((mon) => {
          if (id === mon.id) {
            mon["value"] = Number(e.target.value.substring(1));
          }
          return mon;
        });
        setMonthCosts1(updatedPrices);
      }
    } else if (!isNaN(e.target.value)) {
      const updatedPrices = monthCosts1.map((mon) => {
        if (id === mon.id) {
          mon["value"] = Number(e.target.value);
        }
        return mon;
      });
      setMonthCosts1(updatedPrices);
    }
  };

  const handleCost2 = (e) => {
    if (e.target.value?.includes("$")) {
      if (!isNaN(e.target.value?.substring(1))) {
        setMonthCosts2(Number(e.target.value.substring(1)));
      }
    } else if (!isNaN(e.target.value)) {
      setMonthCosts2(Number(e.target.value));
    }
  };
  useEffect(() => {
    ReactGA.event({
      category: "react_flow_bill_entry_loaded",
      action: "react_flow_bill_entry_loaded",
    });
  }, []);
  return (
    <Layout>
      <SlideAnimation>
        <Container style={{ background: "transparent" }}>
          <Side>
            <LeftSide>
              <Title caption={stringsObj.power_bill_hero_text} />
              <div>
                <Text caption={stringsObj.power_bill_hero_subheading_1_pt1} />
                <Text
                  caption={stringsObj.power_bill_hero_subheading_1_pt2_underline}
                  style={{ textDecoration: "underline" }}
                />
                <Text caption={stringsObj.power_bill_hero_subheading_1_pt3} />
              </div>
              <Description caption={stringsObj.power_bill_hero_subheading_2} />
              <InfoContainer>
                <Description caption={"Your Address"} />
                <Text caption={address} />
                <Description caption={"Your Email"} style={{ marginTop: 10 }} />
                <Text caption={email} />
                <Button
                  caption={"Edit Details"}
                  height={60}
                  width={200}
                  onClick={goBack}
                  leftIcon={<Image src={'/imgs/pencil.svg'} alt="pencil" width={21} height={21} />}
                  style={{ background: "#000000", marginTop: 20 }}
                />
              </InfoContainer>
            </LeftSide>
            <RightSide>
              <StepContainer>
                <Stepper className={mode === 0 ? "active" : "inactive"}>
                  <StepRadio
                    onClick={() => {
                      dispatch({
                        type: SET_MODE,
                        payload: 0,
                      });
                    }}
                  >
                    <StepRadioActive
                      style={{
                        display: mode === 0 ? "flex" : "none",
                      }}
                    />
                  </StepRadio>
                  <StepLabel>{stringsObj.power_bill_monthly}</StepLabel>
                </Stepper>
                <Stepper className={mode === 1 ? "active" : "inactive"}>
                  <StepRadio
                    onClick={() => {
                      dispatch({
                        type: SET_MODE,
                        payload: 1,
                      });
                    }}
                  >
                    <StepRadioActive
                      style={{
                        display: mode === 1 ? "flex" : "none",
                      }}
                    />
                  </StepRadio>
                  <StepLabel>{stringsObj.power_bill_seasonal}</StepLabel>
                </Stepper>
                <Stepper className={mode === 2 ? "active" : "inactive"}>
                  <StepRadio
                    onClick={() => {
                      dispatch({
                        type: SET_MODE,
                        payload: 2,
                      });
                    }}
                  >
                    <StepRadioActive
                      style={{
                        display: mode === 2 ? "flex" : "none",
                      }}
                    />
                  </StepRadio>
                  <StepLabel>{stringsObj.power_bill_single}</StepLabel>
                </Stepper>
              </StepContainer>
              <StepContent>
                {mode === 0 ? (
                  <ContentOne>
                    {MONTHS.map((month) => {
                      return (
                        <Input
                          key={month.id}
                          placeholder={month.name}
                          iserror={
                            isError && monthCosts[month.id].value === 0 ? 1 : 0
                          }
                          value={
                            monthCosts[month.id].value
                              ? "$" + monthCosts[month.id].value
                              : ""
                          }
                          onChange={(e) => {
                            handleCost(e, month.id);
                          }}
                        />
                      );
                    })}
                  </ContentOne>
                ) : mode === 1 ? (
                  <ContentTwo>
                    <CustomInput
                      placeholder={"Monthly Power Bill - SUMMER"}
                      iserror={isError && monthCosts1[0].value === 0 ? 1 : 0}
                      value={
                        monthCosts1[0].value ? "$" + monthCosts1[0].value : ""
                      }
                      onChange={(e) => {
                        handleCost1(e, 0);
                      }}
                    />
                    <CustomInput
                      placeholder={"Monthly Power Bill - WINTER"}
                      iserror={isError && monthCosts1[1].value === 0 ? 1 : 0}
                      value={
                        monthCosts1[1].value ? "$" + monthCosts1[1].value : ""
                      }
                      onChange={(e) => {
                        handleCost1(e, 1);
                      }}
                    />
                  </ContentTwo>
                ) : (
                  <ContentThree>
                    <CustomInput
                      placeholder={"Estimated Monthly Power Bill"}
                      iserror={isError ? 1 : 0}
                      value={monthCosts2 ? "$" + monthCosts2 : ""}
                      onChange={(e) => {
                        handleCost2(e);
                      }}
                    />
                  </ContentThree>
                )}
              </StepContent>
              <ButtonContainer>
                <Button
                  caption={stringsObj.power_bill_continue}
                  loading={loading}
                  height={56}
                  width={"100%"}
                  onClick={goNext}
                  rightIcon={<Image src={"/imgs/arrow-right-white.svg"} alt="arrow"  width={21} height={23}/>}
                  style={{
                    fontSize: 20,
                    justifyContent: "space-between",
                    padding: "0 40px",
                    maxWidth: 140,
                  }}
                />
                <Button
                  caption={"or Go back"}
                  height={56}
                  width={"100%"}
                  rightIcon={<Image src={"/imgs/arrow-right-white.svg"} alt="arrow"  width={21} height={23}/>}
                  onClick={goBack}
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
        </Container>
      </SlideAnimation>
    </Layout>
  );
};

export default Step1;
