import { Body, BodyWrapper } from "./Layout.style";
import { Content } from "./content/content";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

export const Layout = ({children}) => {
	return (
		<BodyWrapper>
			<Header />
			<Body>
				<Content children={children} />
			</Body>
			<Footer />
		</BodyWrapper>
	);
};
