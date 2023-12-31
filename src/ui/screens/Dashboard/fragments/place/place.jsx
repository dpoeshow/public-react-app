import {
	Container,
	FragmentContentWrapper,
	FragmentTitle,
	FragmentWrapper,
	ImgContainer,
	List,
	ListItem,
} from "./place.style";
import PlanImg from "../../../../../assets/imgs/plan.svg";
import ChartImg from "../../../../../assets/imgs/chart.svg";
import LocationImg from "../../../../../assets/imgs/location.svg";
import { COLORS } from "../../../../../assets/color";

export const PlaceFragment = ({stringsObj}) => {
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
							<ImgContainer
								style={{ backgroundColor: COLORS.primary }}
							>
								<img src={PlanImg} alt="plan" />
							</ImgContainer>
							<label>{stringsObj.first_block_wrench_title}</label>
						</div>
						<label>{stringsObj.first_block_wrench_body}</label>
					</ListItem>
					<ListItem>
						<div>
							<ImgContainer>
								<img src={ChartImg} alt="plan" />
							</ImgContainer>
							<label>{stringsObj.first_block_chart_title}</label>
						</div>
						<label>{stringsObj.first_block_chart_body}</label>
					</ListItem>
					<ListItem>
						<div>
							<ImgContainer>
								<img src={LocationImg} alt="plan" />
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
