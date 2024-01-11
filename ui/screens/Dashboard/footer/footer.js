import { Description } from "../../../../components/title/title";
import {
	Container,
	FooterWrapper,
	FragmentContentWrapper,
} from "./footer.style";

export const Footer = () => {
	return (
		<Container>
			<FragmentContentWrapper>
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
						<Description
							fontSize={15}
							caption={"Proud Member Of"}
						/>
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
			</FragmentContentWrapper>
		</Container>
	);
};
