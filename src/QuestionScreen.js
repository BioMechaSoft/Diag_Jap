import { Button, Card } from "@mui/material";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import x16 from "./assets/16タイプ@2x 1.png";
import useSound from 'use-sound';
import buttonPressSound from './assets/buttonPress.mp3';
import image4 from "./assets/image 2.png";
import "./QuestionScreen.css";

// Sample data for the questions
const questions = [
  {
    text: "大事な人との食事でお店を選ぶとき、あなたのスタイルに最も近いのは？",
    options: ["人気ランキング上位のお店を選ぶ", "SNSで話題のお店を探す", "隠れ家的な名店を予約する", "相手の好みに合わせて決める"],
  },
  {
    text: "休日の過ごし方で、最も好むのはどれ？",
    options: ["家で映画やドラマを観る", "ショッピングに出かける", "自然の中でアクティビティを楽しむ", "友達とカフェでおしゃべり"],
  },
  // ...add all 20 questions here
];

const QuestionScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  const [play] = useSound(buttonPressSound);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    play();
    // Store the answer
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selection for the next question
    } else {
      // Last question: navigate to results page with answers
      navigate("/results", { state: { answers: newAnswers } });
    }
  };

  const handleBack = () => {
    play();
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // Restore previous selection for better UX
      setSelectedOption(answers[currentQuestionIndex - 1] || null);
    }
  };

  const handleOptionSelect = (index) => {
    play();
    setSelectedOption(index);
  };

  return (
    <main className="question-screen">
      <header className="qs-header">
        <div className="qs-icon-container">
          <VaccinesIcon className="qs-injection-icon" />
        </div>
        <img className="qs-logo" src={image4} alt="Logo" />
        <img className="qs-subtitle" src={x16} alt="Subtitle" />
      </header>

      <section className="qs-card">
        <div className="qs-progress">
          <div className="qs-progress-indicator">
            <span className="qs-current-step">{currentQuestionIndex + 1}</span>
            <span className="qs-total-steps">/ {questions.length}</span>
          </div>
          <div className="qs-progress-bar-background">
            <div
              className="qs-progress-bar-fill"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="qs-question-container">
          <div className="qs-question-badge">
            <div className="qs-badge-content">
              <span className="qs-badge-text">Q{currentQuestionIndex + 1}</span>
            </div>
          </div>
          <p className="qs-question-text">{currentQuestion.text}</p>
        </div>

        <div className="qs-options">
          {currentQuestion.options.map((optionText, index) => (
            <Card
              key={index}
              className={`qs-option-card ${selectedOption === index ? "selected" : ""}`}
              variant="outlined"
              onClick={() => handleOptionSelect(index)}
            >
              {optionText}
            </Card>
          ))}
        </div>

        <div className="qs-button-group">
          <Button
          className="top-cta-button"
            color="inherit"
            size="medium"
            variant="text"
            onClick={handleBack}
            disabled={currentQuestionIndex === 0}
          >
            戻る
          </Button>
          <Button
            color="primary"
            size="large"
            variant="contained"
            onClick={handleNext}
            disabled={selectedOption === null}
          >
            次へ
          </Button>
        </div>
      </section>
    </main>
  );
};

export default QuestionScreen;