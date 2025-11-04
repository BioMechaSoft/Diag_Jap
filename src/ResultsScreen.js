import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./ResultsScreen.css";

const ResultsScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state || { answers: [] }; // Get answers from navigation state

  if (answers.length === 0) {
    // Handle case where user navigates directly to results without finishing quiz
    return (
      <div className="results-screen">
        <div className="results-card">
          <h1 className="results-title">診断結果</h1>
          <p className="results-subtitle">診断を完了してください。</p>
          <Button variant="contained" onClick={() => navigate("/questions")}>
            診断に戻る
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="results-screen">
      <div className="results-card">
        <h1 className="results-title">診断が完了しました！</h1>
        <p className="results-subtitle">ご回答ありがとうございました。</p>
        {/* You can add logic here to determine and display the result based on answers */}
        <div className="results-description">
          <pre>{JSON.stringify(answers, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;