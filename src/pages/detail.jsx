import React from "react";
import { motion } from "framer-motion";

const DetailPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      detail
    </motion.div>
  );
};

export default DetailPage;
