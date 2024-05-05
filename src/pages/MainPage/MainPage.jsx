// import React, { useState } from "react";
// import { Card, CardContent, Typography, Button } from "@mui/material";
// import { useWordContext } from "../../context/WordContext";
// import styles from "./MainPage.module.css";

// const MainPage = ({ word }) => {
//   const [showTranslation, setShowTranslation] = useState(false);
//   const { learnedWords, setLearnedWords } = useWordContext();
//   const [wordCount, setWordCount] = useState(0);

//   const toggleTranslation = () => {
//     setShowTranslation(!showTranslation);
//     // Check if the word has already been learned
//     if (!learnedWords.some((w) => w.english === word.english)) {
//       // Update the learnedWords state only if the word hasn't been learned yet
//       setLearnedWords((prevState) => [...prevState, word]);
//       // Increment the word count
//       setWordCount((prevCount) => prevCount + 1);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <Card variant="outlined" className={styles.card}>
//         <CardContent>
//           <Typography variant="h5" component="div">
//             {word.english}
//           </Typography>
//           <Typography color="text.secondary" gutterBottom>
//             {word.transcription}
//           </Typography>
//           <Typography variant="body2" component="p">
//             {showTranslation ? word.russian : "***"}
//           </Typography>
//           <div className={styles.button_container}>
//             <Button
//               variant="contained"
//               color="success"
//               onClick={toggleTranslation}
//             >
//               {showTranslation ? "Скрыть перевод" : "Показать перевод"}
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//       <p>You have learned: {wordCount} words</p>
//     </div>
//   );
// };

// export default MainPage;

// MainPage.jsx

import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useWordContext } from "../../context/WordContext";
import styles from "./MainPage.module.css";

const MainPage = ({ word }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const { toggleLearned, learnedCount } = useWordContext();

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
    toggleLearned(word);
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
      <Typography variant="body2" component="p">
        Изучено слов: {learnedCount}
      </Typography>
    </div>
  );
};

export default MainPage;
