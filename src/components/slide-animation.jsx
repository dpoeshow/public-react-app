import { motion } from "framer-motion";

export const SlideAnimation = ({ children, onAnimationComplete }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.3 }}
      style={{ overflowX: "hidden" }}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.div>
  );
};
