import { MOBILE } from "@/assets/size";
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
  TabletImageContainer,
  RightContainer,
} from "./solar.style";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

const ArrowComp = ({ activeIndex, index }) => {
  return (
    <div>
      <Image
        src={
          activeIndex === index ? "imgs/arrow-up.svg" : "imgs/arrow-down.svg"
        }
        alt="arrow"
        width={18}
        height={18}
      />
    </div>
  );
};

export const SolarFragment = ({ stringsObj, width }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  // const stringsObj = useSelector((state) => state.stringsObj);

  return (
    <Container>
      <FragmentWrapper>
        <FragmentContentWrapper>
          <LeftContainer>
            <FragmentTitle>{stringsObj.second_block_heading_1}</FragmentTitle>
            <label>{stringsObj.second_block_heading_2}</label>
            {width > parseInt(MOBILE.trimEnd("px")) && (
              <Image
                src={"/imgs/worker.webp"}
                alt="worker"
                width={590}
                height={435}
              />
            )}
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
                      <Image
                        src={"/imgs/quote-request.svg"}
                        alt="Plan"
                        width={40}
                        height={40}
                      />
                    </ImgContainer>
                    <label>{stringsObj.second_block_page_icon_title}</label>
                  </div>
                  <ArrowComp activeIndex={activeIndex} index={1} />
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
                      <Image
                        src={"/imgs/info.svg"}
                        alt="info"
                        width={40}
                        height={40}
                      />
                    </ImgContainer>
                    <label>{stringsObj.second_block_info_icon_title}</label>
                  </div>
                  <ArrowComp activeIndex={activeIndex} index={2} />
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
                      <Image
                        src={"/imgs/comparison.svg"}
                        alt="comparison"
                        width={50}
                        height={50}
                      />
                    </ImgContainer>
                    <label>{stringsObj.second_block_scales_icon_title}</label>
                  </div>
                  <ArrowComp activeIndex={activeIndex} index={3} />
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
                      <Image
                        src={"/imgs/dollar.svg"}
                        alt="Dollar"
                        width={42}
                        height={42}
                      />
                    </ImgContainer>
                    <label>{stringsObj.second_block_money_icon_title}</label>
                  </div>
                  <ArrowComp activeIndex={activeIndex} index={4} />
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
          <TabletImageContainer>
            <div className="tab-worker-image">
              <Image src={"/imgs/worker.webp"} alt="worker" fill />
            </div>
          </TabletImageContainer>
          {width <= parseInt(MOBILE.trimEnd("px")) && (
            <MobileImageContainer>
              <div className="mobile-worker-image">
                <Image src={"/imgs/worker-mobile.webp"} alt="worker" fill />
              </div>
            </MobileImageContainer>
          )}
        </FragmentContentWrapper>
      </FragmentWrapper>
    </Container>
  );
};
