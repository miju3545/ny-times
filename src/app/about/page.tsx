"use client";

import { motion } from "framer-motion";
import styles from "../../styles/About.module.css";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={styles.container}>
      <h1>About This Project</h1>
      <p>
        This project explores the NYTimes Best Sellers lists with a touch of
        animation for enhanced user experience.
      </p>
    </motion.div>
  );
}
