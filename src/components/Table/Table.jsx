import styles from "./Table.module.css";
import React from "react";
import data from "../../data/data";
import WordListItem from "../WordListItem/WordListItem";

export default function TableComponent() {
  return (
    <table>
      <thead>
        <tr>
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
  );
}
