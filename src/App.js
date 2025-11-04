import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuestionScreen from "./QuestionScreen";
import { Top } from "./Top";
import ResultsScreen from "./ResultsScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/questions" element={<QuestionScreen />} />
        <Route path="/results" element={<ResultsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;