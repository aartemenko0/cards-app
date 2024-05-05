import React, { createContext, useState, useContext } from "react";

export const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [learnedWords, setLearnedWords] = useState([]);
  const [learnedCount, setLearnedCount] = useState(0); // Добавляем состояние для отслеживания количества изученных слов

  const toggleLearned = (word) => {
    if (!learnedWords.some((w) => w.english === word.english)) {
      setLearnedWords((prevWords) => [...prevWords, word]);
      setLearnedCount((prevCount) => prevCount + 1); // Увеличиваем счетчик при изучении нового слова
    }
  };

  const value = {
    learnedWords,
    setLearnedWords,
    toggleLearned,
    learnedCount, // Добавляем счетчик изученных слов в контекст
  };

  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
};

export const useWordContext = () => useContext(WordContext);
