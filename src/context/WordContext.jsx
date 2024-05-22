// WordContext.js
import React, { createContext, useState, useContext } from "react";

export const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  const addWord = (newWord) => {
    setWords([...words, newWord]);
  };

  const editWord = (id, updatedWord) => {
    setWords(words.map((word) => (word.id === id ? updatedWord : word)));
  };

  const deleteWord = (id) => {
    setWords(words.filter((word) => word.id !== id));
  };

  const value = {
    words,
    addWord,
    editWord,
    deleteWord,
  };

  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
};

export const useWordContext = () => useContext(WordContext);
