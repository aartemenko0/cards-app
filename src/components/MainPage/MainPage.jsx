import React, {useState} from 'react';
import {Card, CardContent, Typography, Button} from '@mui/material';
import data from '../../data/data';
import styles from './MainPage.module.css';

const MainPage = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomWord = data[randomIndex];

    const [showTranslation,
        setShowTranslation] = useState(false);
    const [currentWord] = useState(randomWord);

    const toggleTranslation = () => {
        setShowTranslation(!showTranslation);
    };

    return (
        <div className={styles.container}>
            <Card variant="outlined" className={styles.card}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {currentWord.english}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                        {currentWord.transcription}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {showTranslation
                            ? currentWord.russian
                            : '***'}
                    </Typography>
                    <Button className={styles.button} onClick={toggleTranslation}>
                        {showTranslation
                            ? 'Скрыть перевод'
                            : 'Показать перевод'}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default MainPage;
