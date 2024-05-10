import styles from "./Table.module.css";
import React, { useState } from "react";
import data from "../../data/data";
import WordListItem from "../WordListItem/WordListItem";
import AddNewWord from "../AddNewWord/AddNewWord";

export default function TableComponent() {
  const [words, setWords] = useState([]);

  const handleAddNewWord = (newWord) => {
    newWord.id = Math.random().toString(36).substring(7);
    setWords([...words, newWord]);
  };

  const handleDeleteWord = (id) => {
    const updatedWords = words.filter((word) => word.id !== id);
    setWords(updatedWords);
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.addNewWordContainer}>
        <AddNewWord onAdd={handleAddNewWord} />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Theme</th>
            <th>English</th>
            <th>Transcription</th>
            <th>Translation</th>
          </tr>
        </thead>
        <tbody>
          {data.concat(words).map((word) => (
            <WordListItem
              key={word.id}
              word={word}
              onDelete={handleDeleteWord}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
