import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import hand from "@/assets/animation.json";

const LottieAnim = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <Lottie animationData={hand} className={`max-w-[24rem]`} />
    </motion.div>
  );
};

export default LottieAnim;
