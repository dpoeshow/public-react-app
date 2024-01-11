import {
	Container,
	FragmentContentWrapper,
	FragmentTitle,
	FragmentWrapper,
	ImgContainer,
	List,
	ListItem,
} from "./place.style";
import Image from "next/image";
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
								<Image src={"/imgs/plan.svg"} alt="plan" width={54} height={54} />
							</ImgContainer>
							<label>{stringsObj.first_block_wrench_title}</label>
						</div>
						<label>{stringsObj.first_block_wrench_body}</label>
					</ListItem>
					<ListItem>
						<div>
							<ImgContainer>
								<Image src={"/imgs/chart.svg"} alt="chart" width={54} height={54} />
							</ImgContainer>
							<label>{stringsObj.first_block_chart_title}</label>
						</div>
						<label>{stringsObj.first_block_chart_body}</label>
					</ListItem>
					<ListItem>
						<div>
							<ImgContainer>
								<Image src={"/imgs/location.svg"} alt="location" width={54} height={54} />
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
