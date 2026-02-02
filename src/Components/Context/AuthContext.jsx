import React from "react";
import { createContext, useState, useEffect } from "react";

export const outputContext = createContext();

function AuthContext({ children }) {
  const [availableAmount, setAvailableAmount] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalHistory, setTotalHistory] = useState([]);

  useEffect(() => {
    let total = 0;
    let income = 0;
    let expense = 0;

    income += totalHistory
      .filter((t) => t.operator === "+")
      .reduce((sum, t) => sum + Number(t.amount), 0);
    setTotalIncome(income);

    expense += totalHistory
      .filter((t) => t.operator === "-")
      .reduce((sum, t) => sum + Number(t.amount), 0);
    setTotalExpense(expense);

    total = income - expense;

    setAvailableAmount(total);
    // console.log(totalHistory);
  }, [totalHistory]);

  const deleteHistory = (id) => {
    // console.log(id, "reached delete history");
    totalHistory.length > 0 &&
      setTotalHistory((prev) => {
        return prev.filter((deleteValue) => deleteValue.id !== id);
      });
  };

  const handleInputFormData = (inputFormData) => {
    setTotalHistory((prev) => {
      return [
        ...prev,
        {
          id: Math.random() * 2,
          operator: inputFormData.operator,
          description: inputFormData.description,
          amount: inputFormData.amount,
        },
      ];
    });

    // setAvailableAmount(() => {
    //   let total = 0;
    //   total += totalHistory
    //     .filter((t) => t.operator === "+")
    //     .reduce((sum, t) => sum + t.amount, 0);
    //   total -= totalHistory
    //     .filter((t) => t.operator === "-")
    //     .reduce((sum, t) => sum - t.amount, 0);
    //   return total;
    // });

    // console.log(totalHistory);
    // if (inputFormData.operator === "+") {
    //   setAvailableAmount(() => {
    //     return (
    //       availableAmount + Number(inputFormData.amount.replace(/[^0-9]/g, ""))
    //     );
    //   });
    // } else if (inputFormData.operator === "-") {
    //   setAvailableAmount(() => {
    //     return (
    //       availableAmount - Number(inputFormData.amount.replace(/[^0-9]/g, ""))
    //     );
    //   });
    // }
    // console.log(totalHistory);
  };

  return (
    <outputContext.Provider
      value={{
        handleInputFormData,
        availableAmount,
        totalHistory,
        deleteHistory,
        totalIncome,
        totalExpense,
      }}
    >
      {children}
    </outputContext.Provider>
  );
}

export default AuthContext;
