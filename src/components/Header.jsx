import React, { useContext } from "react";
import { Button } from "@mui/material";
import { InputData } from "../utils/UserContext";

function Header() {
  const { inputData } = useContext(InputData);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "93vw",
        justifyContent: "space-between",
        marginLeft: "2.5rem",
        marginBottom: "5rem",
      }}
    >
      <Button
        style={{
          backgroundColor: "#f2f7ff",
          color: "black",
          width: "16vw",
          padding: "1rem",
          fontSize: "1rem",
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Degree Prelims
      </Button>
      <Button
        style={{
          backgroundColor: "#f2f7ff",
          color: "black",
          width: "16vw",
          padding: "1rem",
          fontSize: "1rem",
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        {inputData.subject}
      </Button>
      <Button
        style={{
          backgroundColor: "#f2f7ff",
          color: "black",
          width: "16vw",
          padding: "1rem",
          fontSize: "1rem",
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        {inputData.chapter}
      </Button>
      <Button
        style={{
          backgroundColor: "#f2f7ff",
          color: "black",
          width: "16vw",
          padding: "0.5rem",
          fontSize: "1rem",
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        {inputData.topic}
      </Button>
    </div>
  );
}

export default Header;
