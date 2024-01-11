"use client";
import { Button } from "@/components/button/button";
import { Description, Text, Title } from "@/components/title/title";
import { BUBBLE_NAV_URL_BASE } from "@/api/constant";
import {
  ButtonContainer,
  ContentContainer,
  InfoContainer,
  LeftSide,
  RightSide,
  Side,
  StepContent,
} from "./setup4.style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SlideAnimation } from "@/components/slide-animation";
import { SET_STEP } from "@/redux/types";
import { Layout } from "@/ui/layout/Layout";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const Setup4 = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const step = useSelector((state) => state.step);
  const model = useSelector((state) => state.model);
  const email = useSelector((state) => state.email);
  const address = useSelector((state) => state.address);
  const installCost = useSelector((state) => state.install_cost);
  const model_id = useSelector((state) => state.model_id);
  const size = useSelector((state) => state.size);
  const [annualPower, setAnnualPower] = useState(0);

  const stringsObj = defaultCopyStrings;

  useEffect(() => {
    if (!(step === 4 && pathname === "/setup/step-4")) {
      router.push("/");
    }
  }, [step, router, pathname]);

  const goDashboard = () => {
    dispatch({
      type: SET_STEP,
      payload: 0,
    });
    router.push("/");
  };

  useEffect(() => {
    if (model) {
      const len = model.monthly_model.length;
      let sum = 0;
      for (let i = 0; i < (len > 12 ? 12 : len); i++) {
        sum += model.monthly_model[i].power_usage_kwh;
      }
      setAnnualPower(parseFloat(sum).toFixed(2));
    }
  }, [model]);
  const navToBubbleReport = () => {
    const bubble_nav_url = BUBBLE_NAV_URL_BASE + model_id;
    window.location.href = bubble_nav_url;
  };
  return (
    <Layer>
      <SlideAnimation>
        <ContentContainer style={{ background: "transparent" }}>
          <Side>
            <LeftSide>
              <Text caption={`Report for ${address}`} />
              <InfoContainer>
                <Description caption={"Your Email"} />
                <Text caption={email} />
                <Description
                  caption={"Monthly Power Bill"}
                  style={{ marginTop: 16 }}
                />
                <Text caption={"$500"} />
                <Description
                  caption={"Installation Size (kW)"}
                  style={{ marginTop: 16 }}
                />
                <Text caption={size} />
                <Description
                  caption={"Installation Cost"}
                  style={{ marginTop: 16 }}
                />
                <Text caption={`$${installCost.install_cost_total}`} />
                <Button
                  caption={"Edit Details"}
                  height={60}
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
                  <Title caption={"You're Expected to save "} />
                  <Title
                    caption={` $${parseFloat(
                      model.annual_model[0].cumulative_savings
                    ).toFixed(2)} per year!`}
                  />
                </p>
                <div>
                  <Text caption={"Annual Power Consumed From Solar"} />
                  <Text caption={`${annualPower} (kWh)`} />
                  <Text
                    caption={"% Power From Solar"}
                    style={{ marginTop: 20 }}
                  />
                  <Text caption={"90.45%"} />
                  <Text caption={"Payback Period"} style={{ marginTop: 20 }} />
                  <Text
                    caption={
                      model.break_even_view_model.standalone_break_even_string
                    }
                  />
                </div>
              </StepContent>
              <ButtonContainer>
                <Button
                  caption={"View Detailed Report"}
                  height={60}
                  width={"100%"}
                  onClick={navToBubbleReport}
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
                    maxWidth: 240,
                  }}
                />
              </ButtonContainer>
            </RightSide>
          </Side>
        </ContentContainer>
      </SlideAnimation>
    </Layer>
  );
};

export default Setup4;
