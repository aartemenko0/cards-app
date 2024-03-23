import styles from "./Table.module.css";
import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TextField,
} from "@mui/material";
import data from "../../data/data";

const TableComponent = () => {
  const [editingWordId, setEditingWordId] = useState(null);
  const handleEdit = (id) => {
    setEditingWordId(id);
  };

  const handleCancelEdit = () => {
    setEditingWordId(null);
  };

  const handleSaveEdit = () => {
    console.log(`Save changes for word with id ${editingWordId}`);
    setEditingWordId(null);
  };

  return (
    <TableContainer className={styles.tableContainer}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Слово</TableCell>
            <TableCell>Транскрипция</TableCell>
            <TableCell>Перевод</TableCell>
            <TableCell>Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((word) => (
            <TableRow key={word.id} className={styles.tableRow}>
              <TableCell className={styles.tableCell}>
                {editingWordId === word.id ? (
                  <TextField defaultValue={word.english} />
                ) : (
                  word.english
                )}
              </TableCell>
              <TableCell className={styles.tableCell}>
                {editingWordId === word.id ? (
                  <TextField defaultValue={word.transcription} />
                ) : (
                  word.transcription
                )}
              </TableCell>
              <TableCell className={styles.tableCell}>
                {editingWordId === word.id ? (
                  <TextField defaultValue={word.russian} />
                ) : (
                  word.russian
                )}
              </TableCell>
              <TableCell className={styles.tableCell}>
                {editingWordId === word.id ? (
                  <>
                    {" "}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSaveEdit}
                    >
                      Сохранить
                    </Button>{" "}
                    <Button variant="contained" onClick={handleCancelEdit}>
                      {" "}
                      Отмена{" "}
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(word.id)}
                  >
                    Редактировать
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
