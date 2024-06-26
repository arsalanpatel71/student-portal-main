import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import DropdownField from "../components/DropdownField";
import { QuestionData, InputData } from "../utils/UserContext";
import logo from "../assets/logo.png";

function Inputs() {
  const { setQuestionData } = useContext(QuestionData);
  const { inputData, setInputData } = useContext(InputData);
  const [selectedValues, setSelectedValues] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [examValue, setExamValue] = useState("Degree Prelims");
  const [subjectOptions, setSubjectOptions] = useState([]);
  const [chapterOptions, setChapterOptions] = useState([]);
  const [topicOptions, setTopicOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      `https://kasmentor.org/api/method/academy.academy.page.question_generator.question_generator.get_subjects?exam=${examValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        const fetchedData = data.message;
        const subjects = fetchedData.map((item) => item.subject);
        setSubjectOptions(subjects);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDropdownChange = (dropdownId, selectedValue) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [dropdownId]: selectedValue,
    }));
    setInputData((prevValues) => ({
      ...prevValues,
      [dropdownId]: selectedValue,
    }));

    if (dropdownId === "subject") {
      fetch(
        `https://kasmentor.org/api/method/academy.academy.page.question_generator.question_generator.get_chapters?exam=${examValue}&subject=${selectedValue}`
      )
        .then((response) => response.json())
        .then((data) => {
          const fetchedData = data.message;
          const chapters = fetchedData.map((item) => item.chapter);
          setChapterOptions(chapters);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
    if (dropdownId === "chapter") {
      const subjectValue = selectedValues["subject"];
      fetch(
        `https://kasmentor.org/api/method/academy.academy.page.question_generator.question_generator.get_topics?exam=${examValue}&subject=${subjectValue}&chapter=${selectedValue}`
      )
        .then((response) => response.json())
        .then((data) => {
          const fetchedData = data.message;
          const topics = fetchedData.map((item) => item.topic);
          setTopicOptions(topics);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  const handleGenerateClick = (event) => {
    const { subject, chapter, topic, number } = selectedValues;
    const numberInt = parseInt(number);
    setLoading(true);
    fetch(
      `https://kasmentor.org/api/method/academy.academy.page.question_generator.question_generator.generate_questions?exam=${examValue}&subject=${subject}&chapter=${chapter}&topic=${topic}&count=${numberInt}`
    )
      .then((response) => response.json())
      .then((data) => {
        setQuestionData(data);
        setLoading(false);
        console.log(data.message);
      })
      .catch((error) => {
        console.error("Error generating questions:", error);
        setLoading(false);
      });
  };

  const handleNumberChange = (event) => {
    const value = event.target.value;
    setSelectedValues((prevValues) => ({
      ...prevValues,
      number: value,
    }));
    setInputData((prevValues) => ({
      ...prevValues,
      number: value,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        className="scroll-container"
        style={{
          backgroundColor: "#f2f7ff",
          width: "30vw",
          height: "95vh",
          padding: "4em",
          overflowY: "scroll",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2em",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={logo} alt="Question Generator" style={{ width: "40%" }} />
            <h1>Question Generator</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "5rem",
            }}
          >
            <TextField
              variant="standard"
              sx={{
                m: 1,
                width: "25vw",
                boxShadow: 0.5,
                bgcolor: "white",
                borderRadius: 1,
                marginBottom: "2.5rem",
              }}
              style={{ padding: "1rem 0.5rem 0.5rem 0.5rem" }}
              value={examValue}
            />
            <DropdownField
              label="Subject"
              options={subjectOptions}
              id="subject"
              onChange={(value) => handleDropdownChange("subject", value)}
            />
            <DropdownField
              label="Chapter"
              options={chapterOptions}
              id="chapter"
              onChange={(value) => handleDropdownChange("chapter", value)}
            />
            <DropdownField
              label="Topic"
              options={topicOptions}
              id="topic"
              onChange={(value) => handleDropdownChange("topic", value)}
            />
            <TextField
              label="No of Question"
              variant="standard"
              type="number"
              InputLabelProps={{
                sx: { padding: "0 0.5rem 0.5rem 0.5rem" },
              }}
              sx={{
                width: "25vw",
                boxShadow: 0.5,
                bgcolor: "white",
                borderRadius: 1,
                marginBottom: "2.5rem",
              }}
              style={{ padding: "0 0.5rem 0.5rem 0.5rem" }}
              value={selectedValues.number || ""}
              onChange={handleNumberChange}
              inputProps={{ min: "1" }}
            />
          </div>
          <Link
            onClick={handleGenerateClick}
            to="probability"
            style={{
              textDecoration: "none",
              margin: "auto",
              backgroundColor: isHovered ? "#405AB9" : "#ffffff",
              padding: "1rem",
              color: isHovered ? "#ffffff" : "black",
              transition: "background-color 0.8s, color 0.8s",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Button
              style={{
                textDecoration: "none",
                color: isHovered ? "#ffffff" : "black",
                display: "flex",
                width: "10vw",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              Generate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
