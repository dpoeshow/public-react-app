import { Column, SpaceBetween } from "../../../assets/styles/global.style";
import { Button } from "../../../components/button/button";
import { Description, Text } from "../../../components/title/title";
import {
	FooterContainer,
	FooterWrapper,
	MobileFooterWrapper,
} from "./footer.style";
import PencilImg from "../../../assets/imgs/pencil.svg";

export const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				<div>
					<Description
						fontSize={15}
						caption={"© Sunfox Solar - 2023"}
					/>
					<Description
						fontSize={15}
						onClick={() => {
							window.open(
								"https://blog.sunfoxsolar.net/terms",
								"_blank"
							);
						}}
						caption={"Terms of Service"}
						style={{
							marginLeft: 20,
							textDecoration: "underline",
							cursor: "pointer",
						}}
					/>
				</div>
				<div>
					<Description fontSize={15} caption={"Proud Member Of"} />
					<Description
						fontSize={15}
						onClick={() => {
							window.open("https://calssa.org/", "_blank");
						}}
						caption={"California Solar Storage Association"}
						style={{
							marginLeft: 5,
							textDecoration: "underline",
							cursor: "pointer",
						}}
					/>
				</div>
			</FooterWrapper>
			<MobileFooterWrapper>
				<SpaceBetween style={{ width: "100%" }}>
					<Column style={{ alignItems: "flex-start", width: "60%" }}>
						<Description fontSize={12} caption={"Your Address"} />
						<Text caption={"305 Broadway, New York, NY, USA"} />
					</Column>
					<Column style={{ alignItems: "flex-start" }}>
						<Description fontSize={12} caption={"Your Email"} />
						<Text caption={"youremail@email.com"} />
					</Column>
				</SpaceBetween>
				<Button
					caption={"Edit Details"}
					width={200}
					height={40}
					leftIcon={<img src={PencilImg} alt="pencil" />}
					style={{
						marginTop: 20,
						maxWidth: 160,
						background: "#000000",
					}}
				/>
			</MobileFooterWrapper>
		</FooterContainer>
	);
};
