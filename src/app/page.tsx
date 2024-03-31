"use client";

import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface List {
  list_name: string;
  list_name_encoded: string;
  display_name: string;
}

const listVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export default function Home() {
  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://books-api.nomadcoders.workers.dev/lists"
      );
      const data = await res.json();
      setLists(data.results);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <motion.h1
        initial='hidden'
        animate='visible'
        variants={listVariant}
        transition={{ delay: 0.2, duration: 0.5 }}>
        NYTimes Best Sellers
      </motion.h1>
      <motion.ul
        initial='hidden'
        animate='visible'
        variants={listVariant}
        transition={{ delay: 0.5, duration: 0.5, staggerChildren: 0.1 }}>
        {lists.map((list, index) => (
          <motion.li key={index}>
            <Link href={`/list/${list.list_name_encoded}`}>
              {list.display_name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
