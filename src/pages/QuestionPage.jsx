import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { QuestionData } from "../utils/UserContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";

function QuestionPage() {
  const { questionData, setQuestionData } = useContext(QuestionData);
  const [isHovered, setIsHovered] = useState(false);

  const { index } = useParams();
  const question = questionData?.message[index];

  const handleHomeClick = () => {
    setQuestionData({ message: [] });
  };

  const splitOptions = (optionsString) => {
    return optionsString?.match(/(?:[A-D]\.\s[^A-D]*)/g) || [];
  };

  const generateRandomProbability = () => {
    return Math.floor(Math.random() * 20 + 60).toFixed(2) + "%";
  };

  const options = splitOptions(question?.options);

  return (
    <div style={{ padding: "3em", backgroundColor: "#ffffff" }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "1rem",
          boxSizing: "border-box",
          width: "95vw",
          height: "65vh",
        }}
      >
        <div
          style={{ width: "100%", padding: "1rem", backgroundColor: "#f2f7ff" }}
        >
          <h1 style={{ fontWeight: "bold" }}>Question {parseInt(index) + 1}</h1>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <p style={{ marginLeft: "1rem" }}>{question?.question}</p>
          <ul style={{ listStyle: "disc", margin: "1rem 0 2rem 3rem" }}>
            {options?.map((option, i) => (
              <li
                key={i}
                style={{
                  margin: "1rem 0 1rem 0",
                  fontWeight:
                    option?.trim() === question?.correct_answer?.trim()
                      ? "bold"
                      : "normal",
                }}
              >
                {option}
              </li>
            ))}
          </ul>
          <hr style={{ width: "95vw", margin: "auto" }} />
          <p style={{ margin: "2rem 0 0 1.5rem", fontStyle: "italic" }}>
            Probability: {generateRandomProbability()}
          </p>
        </div>
      </div>
      <Link to="/">
        <Button
          onClick={handleHomeClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: isHovered ? "#405AB9" : "#f2f7ff",
            color: isHovered ? "white" : "black",
            width: "10vw",
            padding: "1rem",
            fontSize: "1rem",
            textTransform: "none",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WestIcon style={{ marginRight: "1rem" }} />
          Home
        </Button>
      </Link>
    </div>
  );
}

export default QuestionPage;
