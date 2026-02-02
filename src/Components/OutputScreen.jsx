import React from "react";
import { useContext, useState } from "react";
import { outputContext } from "./Context/AuthContext";
import "./OutputScreen.css";

function OutputScreen() {
  const { availableAmount, totalIncome, totalExpense } =
    useContext(outputContext);
  //   const [totalExpense, setTotalExpense] = useState(0);
  //   const [totalIncome, setTotalIncome] = useState(0);
  return (
    <div className="OutputScreen">
      <div className="month">
        Available Budget in{" "}
        {new Date().toLocaleString("default", { month: "long" })}
      </div>
      <div className="availAmount">
        {availableAmount !== 0 ? availableAmount : 0}
      </div>
      <div className="total Income">
        <span>Total Income</span>{" "}
        <span>{totalIncome}</span>
      </div>
      <div className="total Expense">
        <span>Total Expense</span>{" "}
        <span>{totalExpense}</span>
      </div>
    </div>
  );
}

export default OutputScreen;
