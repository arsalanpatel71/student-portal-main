import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { QuestionData } from "../utils/UserContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f2f7ff",
    color: "black",
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "#ffffff",
  },
}));

const QuestionHeaderCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "#f2f7ff",
  color: "black",
  textAlign: "left",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CustomTableContainer = styled(TableContainer)(({ theme }) => ({
  boxShadow: "none",
  border: "none",
  width: "100%",
  padding: 0,
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  margin: 0,
  padding: 0,
  width: "100vw",
  height: "68vh",
}));

const QuestionCell = styled(StyledTableCell)(({ theme }) => ({
  maxWidth: "20vw",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const generateRandomProbability = () => {
  return Math.floor(Math.random() * 20 + 60).toFixed(2) + "%";
};

export default function CustomizedTables() {
  const { questionData } = useContext(QuestionData);
  const questions = questionData.message || [];
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleQuestionClick = (index) => {
    navigate(`/question/${index}`);
  };

  useEffect(() => {
    if (questions.length > 0) {
      setLoading(false);
    }
  }, [questions]);

  return (
    <CustomTableContainer component={CustomPaper}>
      <Table aria-label="customized table" sx={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" style={{ fontWeight: "bold" }}>
              ID
            </StyledTableCell>
            <QuestionHeaderCell style={{ fontWeight: "bold" }}>
              Questions
            </QuestionHeaderCell>
            <StyledTableCell align="center" style={{ fontWeight: "bold" }}>
              Probability
            </StyledTableCell>
            <StyledTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {loading
            ? [1, 2, 3].map((_, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center">
                    {" "}
                    {/* Adjust alignment */}
                    <div
                      style={{
                        width: "3vw",
                        height: "30px",
                        borderRadius: "10px",
                        animation: "blink 2s infinite",
                        backgroundColor: "#f2f7ff",
                        margin: "auto",
                      }}
                    />
                  </StyledTableCell>
                  <QuestionCell
                    component="th"
                    scope="row"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      style={{
                        width: "35vw",
                        height: "30px",
                        borderRadius: "10px",
                        animation: "blink 2s infinite",
                        backgroundColor: "#f2f7ff",
                      }}
                    />
                  </QuestionCell>
                  <StyledTableCell align="right">
                    <div
                      style={{
                        width: "20vw",
                        height: "30px",
                        borderRadius: "10px",
                        animation: "blink 2s infinite",
                        backgroundColor: "#f2f7ff",
                        margin: "auto",
                      }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">></StyledTableCell>
                </StyledTableRow>
              ))
            : questions.map((question, index) => (
                <StyledTableRow
                  key={index}
                  onClick={() => handleQuestionClick(index)}
                >
                  <StyledTableCell align="center">{index + 1}</StyledTableCell>
                  <QuestionCell
                    component="th"
                    scope="row"
                    style={{ cursor: "pointer" }}
                  >
                    {question.question}
                  </QuestionCell>
                  <StyledTableCell align="center">
                    {generateRandomProbability()}
                  </StyledTableCell>
                  <StyledTableCell align="right">></StyledTableCell>
                </StyledTableRow>
              ))}
        </TableBody>
      </Table>
    </CustomTableContainer>
  );
}
