import { Body, BodyWrapper } from "./Layout.style";
import { Content } from "./content/content";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

export const Layout = () => {
	return (
		<BodyWrapper>
			<Header />
			<Body>
				<Content />
			</Body>
			<Footer />
		</BodyWrapper>
	);
};
