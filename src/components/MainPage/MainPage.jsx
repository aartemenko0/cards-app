import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import styles from "./MainPage.module.css";

const MainPage = ({ word }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className={styles.container}>
      <Card variant="outlined" className={styles.card}>
        <CardContent>
          <Typography variant="h5" component="div">
            {word.english}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {word.transcription}
          </Typography>
          <Typography variant="body2" component="p">
            {showTranslation ? word.russian : "***"}
          </Typography>
          <div className={styles.button_container}>
            <Button
              variant="contained"
              color="success"
              onClick={toggleTranslation}
            >
              {showTranslation ? "Скрыть перевод" : "Показать перевод"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MainPage;
