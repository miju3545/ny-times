"use client";

import React, { useEffect, useState } from "react";
import styles from "../../../styles/Detail.module.css";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

interface Book {
  title: string;
  author: string;
  description: string;
}

const booksVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const bookVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export default function Detail() {
  const { id } = useParams();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://books-api.nomadcoders.workers.dev/list?name=${id}`
      );
      const data = await res.json();

      setBooks(data.results.books);
    })();
  }, [id]);

  return (
    <div className={styles.container}>
      <motion.ul variants={booksVariant} initial='hidden' animate='visible'>
        {books.map((book, index) => (
          <motion.li key={index} variants={bookVariant}>
            <h2>{book.title}</h2>
            <p>by {book.author}</p>
            <p>{book.description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
