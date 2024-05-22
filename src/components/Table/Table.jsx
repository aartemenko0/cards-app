import React, { useState, useEffect } from "react";
import WordListItem from "../WordListItem/WordListItem";
import AddNewWord from "../AddNewWord/AddNewWord";
import styles from "./Table.module.css";
import {
  API_ALL_WORDS,
  API_ADD_WORD,
  API_EDIT_WORD,
  API_DELETE_WORD,
} from "../../utils/constants";

export const TableComponent = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch(API_ALL_WORDS);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWords(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  const handleAddNewWord = async (newWord) => {
    try {
      const response = await fetch(API_ADD_WORD, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newWord),
      });
      if (!response.ok) {
        throw new Error("Failed to add word");
      }
      const addedWord = await response.json();
      setWords([...words, addedWord]);
    } catch (error) {
      setError(error);
    }
  };

  const handleEditWord = async (id, updatedWord) => {
    try {
      const response = await fetch(`${API_EDIT_WORD.replace("22", id)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedWord),
      });
      if (!response.ok) {
        throw new Error("Failed to edit word");
      }
      const editedWord = await response.json();
      setWords(words.map((word) => (word.id === id ? editedWord : word)));
    } catch (error) {
      setError(error);
    }
  };

  const handleDeleteWord = async (id) => {
    try {
      const response = await fetch(`${API_DELETE_WORD.replace("22", id)}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete word");
      }
      setWords(words.filter((word) => word.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, index) => (
            <WordListItem
              key={word.id || index}
              word={word}
              onEdit={handleEditWord}
              onDelete={handleDeleteWord}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
