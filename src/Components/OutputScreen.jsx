import React from "react";
import { useContext, useState } from "react";
import { outputContext } from "./Context/AuthContext";
import './OutputScreen.css'

function OutputScreen() {
  const { availableAmount, totalIncome, totalExpense } =
    useContext(outputContext);
  //   const [totalExpense, setTotalExpense] = useState(0);
  //   const [totalIncome, setTotalIncome] = useState(0);
  return (
    <div className="OutputScreen">
    <div className="availAmount">Available Amount {availableAmount !== 0 && availableAmount}</div>
      <div className="totalIncome">Total Income {totalIncome !== 0 && totalIncome}</div>
      <div className="totalExpense">Total Expense {totalExpense !== 0 && totalExpense}</div>
    </div>
  );
}

export default OutputScreen;
