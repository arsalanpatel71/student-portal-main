import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Header from "../components/Header";
import { QuestionData } from "../utils/UserContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import logo from "../assets/logo.png";

function QuestionPage() {
  const { questionData, setQuestionData } = useContext(QuestionData);
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [isHomeHovered, setIsHomeHovered] = useState(false);

  const { index } = useParams();
  const question = questionData?.message[index];

  const handleHomeClick = () => {
    setQuestionData({ message: [] });
  };

  const splitOptions = (optionsString) => {
    return optionsString?.match(
      /(?:[A-Da-d][.)]\s)(.*?)(?=\s*[A-Da-d][.)]|\s*$)/g
    );
  };

  const options = splitOptions(question?.options);

  return (
    <div
      style={{
        padding: "2em",
        backgroundColor: "#ffffff",
        // minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <div
        style={{
          marginTop: "4rem",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* LeftSide */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            width: "49%",
            height: "65vh",
          }}
        >
          <div
            style={{
              width: "100%",
              padding: "1rem",
              backgroundColor: "#f2f7ff",
            }}
          >
            <h1 style={{ fontWeight: "bold" }}>
              Question {parseInt(index) + 1}
            </h1>
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
            <hr style={{ width: "40vw", margin: "auto" }} />
            <p style={{ margin: "2rem 0 0 1rem", fontStyle: "italic" }}>
              {question.explanation}
            </p>
          </div>
        </div>
        {/* RightSide */}
        <div style={{ width: "49%" }}>
          <div
            style={{
              width: "100%",
              padding: "1rem",
              backgroundColor: "#f2f7ff",
            }}
          >
            <h1 style={{ fontWeight: "bold" }}>Question Characteristics</h1>
          </div>
          <div style={{ margin: "1rem 0 0 2rem" }}>
            <p>{parse(question.others)}</p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Link to="/probability">
          <Button
            onMouseEnter={() => setIsBackHovered(true)}
            onMouseLeave={() => setIsBackHovered(false)}
            style={{
              backgroundColor: isBackHovered ? "#405AB9" : "#f2f7ff",
              color: isBackHovered ? "white" : "black",
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
            Back
          </Button>
        </Link>
        <Link to="/">
          <Button
            onClick={handleHomeClick}
            onMouseEnter={() => setIsHomeHovered(true)}
            onMouseLeave={() => setIsHomeHovered(false)}
            style={{
              backgroundColor: isHomeHovered ? "#405AB9" : "#f2f7ff",
              color: isHomeHovered ? "white" : "black",
              width: "10vw",
              padding: "1rem",
              fontSize: "1rem",
              textTransform: "none",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "2rem",
            }}
          >
            <WestIcon style={{ marginRight: "1rem" }} />
            Home
          </Button>
        </Link>
        <img
          src={logo}
          alt="Question Generator"
          style={{ width: "5vw", marginLeft: "auto" }}
        />
      </div>
    </div>
  );
}

export default QuestionPage;
