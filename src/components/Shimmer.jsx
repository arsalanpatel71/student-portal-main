import React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const ShimmerCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "#f2f7ff",
    color: "black",
    textAlign: "center",
    "&::before": {
      content: "''",
      display: "block",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      background: "linear-gradient(to right, #eee, #ddd, #eee)",
      animation: "shimmer 1.5s infinite linear",
    },
  },
}));

const Shimmer = () => {
  return (
    <TableRow>
      <ShimmerCell align="center">
        <span style={{ width: "4rem", height: "1.5rem" }}></span>
      </ShimmerCell>
      <ShimmerCell>
        <span style={{ width: "10rem", height: "1.5rem" }}></span>
      </ShimmerCell>
      <ShimmerCell align="center">
        <span style={{ width: "6rem", height: "1.5rem" }}></span>
      </ShimmerCell>
      <ShimmerCell align="right">
        <span style={{ width: "2rem", height: "1.5rem" }}></span>
      </ShimmerCell>
    </TableRow>
  );
};

export default Shimmer;
