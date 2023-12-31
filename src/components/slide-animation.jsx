import { motion } from "framer-motion";

export const SlideAnimation = ({ children }) => {
	return (
		<motion.div
			initial={{ x: "100%" }}
			animate={{ x: "0%" }}
			transition={{ duration: 0.75 }}
			style={{ overflowX: "hidden" }}
		>
			{children}
		</motion.div>
	);
};
