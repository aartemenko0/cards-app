import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./WordListItem.module.css";

const WordListItem = ({ word }) => {
  // Принимаем объект слова в качестве свойства
  const [isEdited, setIsEdited] = useState(false);
  const [values, setValues] = useState({
    english: word.english,
    transcription: word.transcription,
    russian: word.russian,
  });

  function handleEdit(event) {
    switch (event.target.innerText) {
      case "edit":
        setIsEdited(true);
        break;
      case "save":
        setIsEdited(false);
        break;
      case "delete":
        console.log("Кнопка удалить пока не рабочая!!!");
        break;
      default:
        console.log("Неизвестная команда");
    }
  }

  // Функция для обновления значений в состоянии при изменении полей ввода
  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return (
    <tr onClick={handleEdit}>
      <td className={styles.item}>{word.tags}</td>
      <td className={styles.item}>
        {isEdited ? (
          <input
            type="text"
            className={styles.input}
            name="english"
            value={values.english}
            onChange={handleChange}
          />
        ) : (
          values.english
        )}
      </td>
      <td className={styles.item}>
        {isEdited ? (
          <input
            type="text"
            className={styles.input}
            name="transcription"
            value={values.transcription}
            onChange={handleChange}
          />
        ) : (
          values.transcription
        )}
      </td>
      <td className={styles.item}>
        {isEdited ? (
          <input
            type="text"
            className={styles.input}
            name="russian"
            value={values.russian}
            onChange={handleChange}
          />
        ) : (
          values.russian
        )}
      </td>
      <td className={styles.buttons}>
        {isEdited ? <Button text="save" /> : <Button text="edit" />}
        <Button text="delete" />
      </td>
    </tr>
  );
};

export default WordListItem;
