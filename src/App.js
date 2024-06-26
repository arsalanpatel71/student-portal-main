import "./App.css";
import { Route, Routes } from "react-router-dom";
import Inputs from "./pages/Inputs";
import Probability from "./pages/Probability";
import QuestionPage from "./pages/QuestionPage";
import { QuestionData } from "./utils/UserContext";
import { useContext, useState } from "react";
import { InputData } from "./utils/UserContext";

function App() {
  const InputUserData = useContext(InputData);
  const [questionData, setQuestionData] = useState("");
  const [inputData, setInputData] = useState(InputUserData);

  return (
    <QuestionData.Provider value={{ questionData, setQuestionData }}>
      <InputData.Provider value={{ inputData, setInputData }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Inputs />} />
            <Route path="/probability" element={<Probability />} />
            <Route path="/question/:index" element={<QuestionPage />} />
          </Routes>
        </div>
      </InputData.Provider>
    </QuestionData.Provider>
  );
}

export default App;
