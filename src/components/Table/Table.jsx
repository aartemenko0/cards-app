import styles from "./Table.module.css";
import React from "react";
import data from "../../data/data";
import WordListItem from "../WordListItem/WordListItem";

export default function TableComponent() {
  return (
    <div className={styles.tableContainer}>
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
          {data.map((word) => (
            <WordListItem key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
