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
        width: "100%",
        justifyContent: "space-between",
        // marginLeft: "1rem",
      }}
    >
      <div>
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
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Exam
        </h3>
      </div>
      <div>
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
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Subject
        </h3>
      </div>
      <div>
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
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Chapter
        </h3>
      </div>
      <div>
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
          {inputData.topic}
        </Button>
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Topic
        </h3>
      </div>
    </div>
  );
}

export default Header;
