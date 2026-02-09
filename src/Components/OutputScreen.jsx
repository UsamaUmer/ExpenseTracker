import React from "react";
import { useContext, useState } from "react";
import { outputContext } from "./Context/AuthContext";
import "./OutputScreen.css";
import { useSelector } from "react-redux";


function OutputScreen() {
  const { availableAmount, totalIncome, totalExpense } =
    useContext(outputContext);

    const {availableAmounts, totalExpenses, totalIncomes} = useSelector((state) => state.expenseTracker);
  //   const [totalExpense, setTotalExpense] = useState(0);
  //   const [totalIncome, setTotalIncome] = useState(0);
  return (
    <div className="OutputScreen">
      <div className="month">
        Available Budget in{" "}
        {new Date().toLocaleString("default", { month: "long" })}
      </div>
      <div className="availAmount">
        {availableAmounts !== 0 ? availableAmounts : 0}
      </div>
      <div className="total Income">
        <span>Total Income</span>{" "}
        <span>{totalIncomes}</span>
      </div>
      <div className="total Expense">
        <span>Total Expense</span>{" "}
        <span>{totalExpenses}</span>
      </div>
    </div>
  );
}

export default OutputScreen;
