import {
	Container,
	FragmentContentWrapper,
	FragmentTitle,
	LeftContainer,
	RightContainer,
	SubmitContainer,
} from "./control.style";
import { Button } from "../../../../../components/button/button";
import ArrowRightImg from "../../../../../assets/imgs/arrow-right-white.svg";
import { Input } from "../../../../../components/input/input";
import { useState } from "react";
import { toast } from "react-toastify";
import { validateEmail } from "../../../../../utils/validate";
import { useDispatch, useSelector } from "react-redux";
import { signupEmailList } from "../../../../api/server";

export const ControlFragment = ({stringsObj}) => {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loading);
	const [email, setEmail] = useState("");
	const [errMail, setErrMail] = useState(false);


	const goMailing = () => {
		if (!email) {
			toast("Please enter an email.", { type: "error" });
			setErrMail(true);
			return;
		}
		if (!validateEmail(email)) {
			toast("Please enter valid email.", { type: "error" });
			setErrMail(true);
			return;
		}
		signupEmailList(dispatch, { email })
			.then((res) => {
				toast("Success!", { type: "success" });
				setEmail("");
			})
			.catch((err) => {
				toast(err, { type: "error" });
			});
	};

	return (
		<Container id="control">
			<FragmentContentWrapper>
				<LeftContainer>
					<FragmentTitle>
						{stringsObj.cta_block_2_left_heading}
					</FragmentTitle>
					<label>{stringsObj.cta_block_2_left_body}</label>
					<Button
						caption={stringsObj.cta_block_2_button_text}
						height={56}
						width={"calc(100% - 80px)"}
						onClick={() => {
							window.scrollTo({
								top: 0,
								behavior: "smooth",
							});
						}}
						rightIcon={<img src={ArrowRightImg} alt="arrow" />}
						style={{
							fontSize: 20,
							justifyContent: "space-between",
							padding: "0 40px",
							maxWidth: 340,
							marginTop: 50,
						}}
					/>
				</LeftContainer>
				<RightContainer>
					<FragmentTitle>
						{stringsObj.cta_block_2_right_heading}
					</FragmentTitle>
					<label>{stringsObj.cta_block_2_right_body}</label>
					<SubmitContainer>
						<Input
							iserror={errMail ? 1 : 0}
							placeholder={"Enter an email"}
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								setErrMail(false);
							}}
						/>
						<Button
							caption={stringsObj.cta_block_2_right_text}
							height={56}
							width={"calc(100% - 80px)"}
							onClick={goMailing}
							loading={loading}
							rightIcon={<img src={ArrowRightImg} alt="arrow" />}
							style={{
								fontSize: 20,
								justifyContent: "space-between",
								padding: "0 40px",
								maxWidth: 80,
								marginLeft: 20,
							}}
						/>
					</SubmitContainer>
				</RightContainer>
			</FragmentContentWrapper>
		</Container>
	);
};
