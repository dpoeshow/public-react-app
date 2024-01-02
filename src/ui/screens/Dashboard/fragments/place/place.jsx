import {
  Container,
  FragmentContentWrapper,
  FragmentTitle,
  FragmentWrapper,
  ImgContainer,
  List,
  ListItem,
} from "./place.style";
import PlanImg from "../../../../../assets/imgs/plan.svg?react";
import ChartImg from "../../../../../assets/imgs/chart.svg?react";
import LocationImg from "../../../../../assets/imgs/location.svg?react";
import { COLORS } from "../../../../../assets/color";

export const PlaceFragment = ({ stringsObj }) => {
  return (
    <Container>
      <FragmentWrapper>
        <FragmentContentWrapper>
          <FragmentTitle>
            {stringsObj.first_block_heading_1_black}
            <label> {stringsObj.first_block_heading_1_orange}</label>.
          </FragmentTitle>
        </FragmentContentWrapper>
        <List>
          <ListItem>
            <div>
              <ImgContainer style={{ backgroundColor: COLORS.primary }}>
                <PlanImg />
              </ImgContainer>
              <label>{stringsObj.first_block_wrench_title}</label>
            </div>
            <label>{stringsObj.first_block_wrench_body}</label>
          </ListItem>
          <ListItem>
            <div>
              <ImgContainer>
                <ChartImg />
              </ImgContainer>
              <label>{stringsObj.first_block_chart_title}</label>
            </div>
            <label>{stringsObj.first_block_chart_body}</label>
          </ListItem>
          <ListItem>
            <div>
              <ImgContainer>
                <LocationImg />
              </ImgContainer>
              <label>{stringsObj.first_block_geo_title}</label>
            </div>
            <label>{stringsObj.first_block_geo_body}</label>
          </ListItem>
        </List>
      </FragmentWrapper>
    </Container>
  );
};
