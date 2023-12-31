import { BUBBLE_NAV_URL_BASE } from "../../api/constant";
import { Button } from "../../../components/button/button";
import { Description, Text, Title } from "../../../components/title/title";
import PencilImg from "../../../assets/imgs/pencil.svg";
import ArrowImg from "../../../assets/imgs/arrow-right-white.svg";
import {
  ButtonContainer,
  ContentContainer,
  InfoContainer,
  LeftSide,
  RightSide,
  Side,
  StepContent,
} from "./setup3.style";
import { COLORS } from "../../../assets/color";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SET_STEP } from "../../context/types";
import { updateModel } from "../../api/server";
import { toast } from "react-toastify";
import { InputPrefix } from "../../../components/input/input-suffix";
import { SlideAnimation } from "../../../components/slide-animation";
import { useDispatch, useSelector } from "../../context/context";
import { useGa } from "../../hooks/useGa";
import { useIsClient } from "../../hooks/useIsClient";

const Setup3 = ({ stringsObj }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const loading = useSelector((state) => state.loading);
  const size = useSelector((state) => state.size);
  const email = useSelector((state) => state.email);
  const address = useSelector((state) => state.address);
  const installCost = useSelector((state) => state.install_cost);
  const addr = useSelector((state) => state.addr);
  const model_id = useSelector((state) => state.model_id);
  const step = useSelector((state) => state.step);
  const [cost, setCost] = useState(0);
  const [error, setError] = useState(false);

  const { ga: ReactGA } = useGa();
  const { isClient } = useIsClient();

  useEffect(() => {
    if (!(step >= 3 && location.pathname === "/setup/step-3")) {
      navigate("/");
    }
  }, [step, navigate, location]);

  useEffect(() => {
    if (installCost) {
      setCost(parseFloat(installCost.install_cost_total).toFixed(2));
    }
  }, [installCost]);

  useEffect(() => {
    if (!ReactGA) {
      return;
    }
    ReactGA.event({
      category: "react_flow_calculate_savings_loaded",
      action: "react_flow_calculate_savings_loaded",
    });
  }, [ReactGA]);
  const goBack = () => {
    dispatch({
      type: SET_STEP,
      payload: 2,
    });
    navigate(-1);
  };

  const navToBubbleReport = () => {
    const bubble_nav_url = BUBBLE_NAV_URL_BASE + model_id;
    window.location.href = bubble_nav_url;
  };

  const goNext = () => {
    updateModel(dispatch, model_id, {
      installation_size: size,
      installation_cost: cost,
    })
      .then((res) => {
        const promises = [];
        promises.push(
          ReactGA.event({
            category: "Will Generate Model Output",
            action: "Will Generate Model Output",
          })
        );
        promises.push(
          ReactGA.send({
            hitType: "pageview",
            page: window.location.pathname,
            title: "Will Generate Model Output",
          })
        );
        Promise.all(promises)
          .then((res) => {
            navToBubbleReport();
          })
          .catch((err) => {
            toast(err, { type: "error" });
          });
      })
      .catch((err) => {
        toast(err, { type: "error" });
      });
  };

  const goDashboard = () => {
    dispatch({
      type: SET_STEP,
      payload: 0,
    });
    navigate("/");
  };

  const UsdFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  /* const goNext = () => {
		updateModel(dispatch,
			    model_id,
			{"installation_size": size,
			 "installation_cost": cost})
			.then(navToBubbleReport)
			.catch((err) => {
				toast(err, { type: "error" });
			});
	}; */

  /* const goNext = () => {
		generateModel(dispatch, {
			...addr,
			installation_costs: cost,
			monthly_costs: JSON.stringify(monthCost),
			installation_size: size,
		})
			.then((res) => {
				dispatch({
					type: SET_MODEL,
					payload: res,
				});
				dispatch({
					type: SET_STEP,
					payload: 4,
				});
				ReactGA.event({
					category: "Will Generate Model Output",
					action: "Will Generate Model Output",
				});
				ReactGA.send({
					hitType: "pageview",
					page: window.location.pathname,
					title: "Will Generate Model Output",
				});

				navigate("/setup/step-4");
			})
			.catch((err) => {
				toast(err, { type: "error" });
			});
 */

  if (isClient) {
    return null;
  }
  return (
    <SlideAnimation>
      <ContentContainer style={{ background: "transparent" }}>
        <Side>
          <LeftSide>
            <Title caption={stringsObj.install_cost_hero_text} />
            <InfoContainer>
              <Description caption={"Your Address"} />
              <Text caption={address} />
              <Description caption={"Your Email"} style={{ marginTop: 10 }} />
              <Text caption={email} />
              <Button
                caption={"Edit Details"}
                height={60}
                width={200}
                onClick={goDashboard}
                leftIcon={<img src={PencilImg} alt="pencil" />}
                style={{ background: "#000000", marginTop: 52 }}
              />
            </InfoContainer>
          </LeftSide>
          <RightSide>
            <StepContent>
              <p>
                In
                <label> {addr.state} </label>{" "}
                {stringsObj.install_size_estimate_heading_pt_1}{" "}
                <label>${installCost.install_cost_per_kw} per kW. </label>{" "}
                {stringsObj.install_size_estimate_heading_pt_2}{" "}
                <label>{size} kW </label>{" "}
                {stringsObj.install_size_estimate_heading_pt_3}{" "}
                <label>
                  {UsdFormatter.format(
                    parseFloat(installCost.install_cost_total).toFixed(2)
                  )}
                </label>
                .
              </p>
              <InputPrefix
                placeholder={"Enter your desired installation cost"}
                value={cost ? cost : ""}
                iserror={error ? 1 : 0}
                type="number"
                onChange={(e) => {
                  setCost(Number(e.target.value));
                  setError(false);
                }}
                style={{ maxWidth: 500 }}
              />
            </StepContent>
            <ButtonContainer>
              <Button
                caption={stringsObj.install_cost_continue}
                height={60}
                width={"100%"}
                loading={loading}
                onClick={goNext}
                rightIcon={<img src={ArrowImg} alt="arrow" />}
                style={{
                  fontSize: 20,
                  justifyContent: "space-between",
                  padding: "0 40px",
                  maxWidth: 200,
                }}
              />
              <Button
                caption={"or Go back"}
                height={60}
                width={"100%"}
                onClick={goBack}
                rightIcon={<img src={ArrowImg} alt="arrow" />}
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
  );
};

export default Setup3;
