import React, { useContext, useState } from "react";
import "../App.css";
import CustomizedTables from "../components/CustomizedTables";
import Header from "../components/Header";
import { Button } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import { QuestionData } from "../utils/UserContext";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Probability = () => {
  const { setQuestionData } = useContext(QuestionData);
  const [isHovered, setIsHovered] = useState(false);

  const handleHomeClick = () => {
    setQuestionData({ message: [] });
  };
  return (
    <div
      style={{
        padding: "2em",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          boxSizing: "border-box",
          marginTop: "5rem",
        }}
      >
        <CustomizedTables />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
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
        <img
          src={logo}
          alt="Question Generator"
          style={{ width: "5vw", marginLeft: "auto" }}
        />
      </div>
    </div>
  );
};

export default Probability;
