import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./WordListItem.module.css";

export default function WordListItem({ word, onDelete }) {
  const [isEdited, setIsEdited] = useState(false);
  const [values, setValues] = useState({
    english: word.english,
    transcription: word.transcription,
    russian: word.russian,
  });

  const [inputErrors, setInputErrors] = useState({
    english: false,
    transcription: false,
    russian: false,
  });

  function handleEdit(event) {
    switch (event.target.innerText) {
      case "edit":
        setIsEdited(true);
        break;
      case "save":
        if (
          !inputErrors.english &&
          !inputErrors.transcription &&
          !inputErrors.russian &&
          values.english.trim() !== "" &&
          values.transcription.trim() !== "" &&
          values.russian.trim() !== ""
        ) {
          setIsEdited(false);
        } else {
          alert("Fill in all fields before saving.");
        }
        break;
      case "delete":
        handleDelete();
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

    setInputErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  }

  const handleDelete = () => {
    onDelete(word.id);
  };

  return (
    <tr onClick={handleEdit}>
      <td>{word.tags}</td>
      <td>
        {isEdited ? (
          <input
            type="text"
            className={`${inputErrors.english && styles.error}`}
            name="english"
            value={values.english}
            onChange={handleChange}
          />
        ) : (
          values.english
        )}
      </td>
      <td>
        {isEdited ? (
          <input
            type="text"
            className={`${inputErrors.transcription && styles.error}`}
            name="transcription"
            value={values.transcription}
            onChange={handleChange}
          />
        ) : (
          values.transcription
        )}
      </td>
      <td>
        {isEdited ? (
          <input
            type="text"
            className={`${inputErrors.russian && styles.error}`}
            name="russian"
            value={values.russian}
            onChange={handleChange}
          />
        ) : (
          values.russian
        )}
      </td>
      <td>
        {isEdited ? (
          <Button
            text="save"
            disabled={
              inputErrors.english ||
              inputErrors.transcription ||
              inputErrors.russian ||
              values.english.trim() === "" ||
              values.transcription.trim() === "" ||
              values.russian.trim() === ""
            }
            onClick={handleEdit}
          />
        ) : (
          <Button text="edit" onClick={handleEdit} />
        )}
        <Button text="delete" onClick={handleDelete} />
      </td>
    </tr>
  );
}
