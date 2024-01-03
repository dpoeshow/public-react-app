import {
  Container,
  FragmentContentWrapper,
  FragmentTitle,
  FragmentWrapper,
  ImgContainer,
  LeftContainer,
  List,
  ListItem,
  ListLabel,
  ListTitle,
  MobileImageContainer,
  RightContainer,
} from "./solar.style";
import RealQuotesImg from "../../../../../assets/imgs/quote-request.svg?react";
import InfoImg from "../../../../../assets/imgs/info.svg?react";
import CompareImg from "../../../../../assets/imgs/comparison.svg?react";
import DollarImg from "../../../../../assets/imgs/dollar.svg?react";
import ArrowUp from "../../../../../assets/imgs/arrow-up.svg?react";
import ArrowDown from "../../../../../assets/imgs/arrow-down.svg?react";
import { useState } from "react";

export const SolarFragment = ({ stringsObj }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Container>
      <FragmentWrapper>
        <FragmentContentWrapper>
          <LeftContainer>
            <FragmentTitle>{stringsObj.second_block_heading_1}</FragmentTitle>
            <label>{stringsObj.second_block_heading_2}</label>
            <img
              fetchpriority="low"
              src={"/images/worker.webp"}
              loading="lazy"
              alt="worker"
            />
          </LeftContainer>
          <RightContainer>
            <List>
              <ListItem>
                <ListTitle
                  onClick={() => {
                    if (activeIndex === 1) {
                      setActiveIndex(null);
                    } else {
                      setActiveIndex(1);
                    }
                  }}
                >
                  <div>
                    <ImgContainer>
                      <RealQuotesImg />
                    </ImgContainer>
                    <label>{stringsObj.second_block_page_icon_title}</label>
                  </div>
                  <div>
                    <img
                      src={activeIndex === 1 ? ArrowUp : ArrowDown}
                      alt="arrow"
                    />
                  </div>
                </ListTitle>
                <ListLabel
                  style={{
                    display: activeIndex === 1 ? "flex" : "none",
                  }}
                >
                  {stringsObj.second_block_page_icon_body}
                </ListLabel>
              </ListItem>
              <ListItem>
                <ListTitle
                  onClick={() => {
                    if (activeIndex === 2) {
                      setActiveIndex(null);
                    } else {
                      setActiveIndex(2);
                    }
                  }}
                >
                  <div>
                    <ImgContainer>
                      <InfoImg />
                    </ImgContainer>
                    <label>{stringsObj.second_block_info_icon_title}</label>
                  </div>
                  <div>
                    <img
                      src={activeIndex === 2 ? ArrowUp : ArrowDown}
                      alt="arrow"
                    />
                  </div>
                </ListTitle>
                <ListLabel
                  style={{
                    display: activeIndex === 2 ? "flex" : "none",
                  }}
                >
                  {stringsObj.second_block_info_icon_body}
                </ListLabel>
              </ListItem>
              <ListItem>
                <ListTitle
                  onClick={() => {
                    if (activeIndex === 3) {
                      setActiveIndex(null);
                    } else {
                      setActiveIndex(3);
                    }
                  }}
                >
                  <div>
                    <ImgContainer>
                      <CompareImg />
                    </ImgContainer>
                    <label>{stringsObj.second_block_scales_icon_title}</label>
                  </div>
                  <div>
                    <img
                      src={activeIndex === 3 ? ArrowUp : ArrowDown}
                      alt="arrow"
                    />
                  </div>
                </ListTitle>
                <ListLabel
                  style={{
                    display: activeIndex === 3 ? "flex" : "none",
                  }}
                >
                  {stringsObj.second_block_scales_icon_body}
                </ListLabel>
              </ListItem>
              <ListItem>
                <ListTitle
                  onClick={() => {
                    if (activeIndex === 4) {
                      setActiveIndex(null);
                    } else {
                      setActiveIndex(4);
                    }
                  }}
                >
                  <div>
                    <ImgContainer>
                      <DollarImg />
                    </ImgContainer>
                    <label>{stringsObj.second_block_money_icon_title}</label>
                  </div>
                  <div>
                    <img
                      src={activeIndex === 4 ? ArrowUp : ArrowDown}
                      alt="arrow"
                    />
                  </div>
                </ListTitle>
                <ListLabel
                  style={{
                    display: activeIndex === 4 ? "flex" : "none",
                  }}
                >
                  {stringsObj.second_block_money_icon_body}
                </ListLabel>
              </ListItem>
            </List>
          </RightContainer>
          <MobileImageContainer>
            <img src={"/images/worker.webp"} loading="lazy" alt="worker" />
          </MobileImageContainer>
        </FragmentContentWrapper>
      </FragmentWrapper>
    </Container>
  );
};
