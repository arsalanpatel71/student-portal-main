import React, { useContext, useState } from "react";
import "../App.css";
import CustomizedTables from "../components/CustomizedTables";
import Header from "../components/Header";
import { Button } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import { QuestionData } from "../utils/UserContext";
import { Link } from "react-router-dom";

const Probability = () => {
  const { setQuestionData } = useContext(QuestionData);
  const [isHovered, setIsHovered] = useState(false);

  const handleHomeClick = () => {
    setQuestionData({ message: [] });
  };
  return (
    <div style={{ padding: "2em", backgroundColor: "#ffffff" }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "1rem",
          boxSizing: "border-box",
        }}
      >
        <CustomizedTables />
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
};

export default Probability;
