import {
  Container,
  FragmentContentWrapper,
  FragmentTitle,
  FragmentWrapper,
  LeftContainer,
} from "./network.style";
import { Button } from "../../../../../components/button/button";
import ArrowRightImg from "../../../../../assets/imgs/arrow-right-white.svg?react";

export const NetworkFragment = ({ stringsObj }) => {
  return (
    <Container>
      <FragmentWrapper>
        <FragmentContentWrapper>
          <LeftContainer>
            <FragmentTitle>
              {stringsObj.association_block_heading}
            </FragmentTitle>
            <label>{stringsObj.association_block_body}</label>
            <div>
              <Button
                caption={"Learn More About The Sunfox Solar Developer Network"}
                height={56}
                width={"calc(100% - 80px)"}
                onClick={() => {
                  window.open(
                    "https://blog.sunfoxsolar.net/developers",
                    "_self"
                  );
                }}
                rightIcon={<ArrowRightImg />}
                style={{
                  fontSize: 20,
                  justifyContent: "space-between",
                  padding: "0 40px",
                  marginTop: 50,
                  maxWidth: 600,
                }}
              />
              <Button
                caption={"Learn More"}
                height={56}
                width={"calc(100% - 80px)"}
                onClick={() => {
                  window.open(
                    "https://blog.sunfoxsolar.net/developers",
                    "_self"
                  );
                }}
                rightIcon={<img src={ArrowRightImg} alt="arrow" />}
                style={{
                  fontSize: 20,
                  justifyContent: "space-between",
                  padding: "0 40px",
                  marginTop: 50,
                  maxWidth: 600,
                }}
              />
            </div>
            <img src={"/images/person.webp"} loading="lazy" alt="person" />
          </LeftContainer>
        </FragmentContentWrapper>
      </FragmentWrapper>
    </Container>
  );
};
