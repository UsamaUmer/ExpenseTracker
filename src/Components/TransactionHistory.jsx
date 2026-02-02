import { useContext } from "react";
import { outputContext } from "./Context/AuthContext";

import "./TransactionHistory.css";
function TransactionHistory() {
  const { totalHistory, deleteHistory } = useContext(outputContext);
  return (
    <div className="mainClass">
      <div>
        <h2>Income</h2>
        <ul>
          {totalHistory.length > 0 &&
            totalHistory.map((value) => {
              return (
                value.operator === "+" && (
                  <li key={value.id} className="historyItem">
                    <span className="desc">{`${value.description} `}</span>
                    <span
                      className={`amount ${value.operator === "+" ? "plus" : "minus"}`}
                    >
                      is
                      {` ${value.amount}`}
                    </span>
                    <button className='btn-delete' onClick={() => deleteHistory(value.id)}>
                      Delete
                    </button>
                  </li>
                )
              );
            })}
        </ul>
      </div>
      <div>
        <h2>Expense</h2>
        <ul>
          {totalHistory.length > 0 &&
            totalHistory.map((value) => {
              return (
                value.operator === "-" && (
                  <li key={value.id} className="historyItem">
                    <span className="desc">{`${value.description} `}</span>
                    <span
                      className={`amount ${value.operator === "+" ? "plus" : "minus"}`}
                    >
                      is
                      {` ${value.amount}`}
                    </span>
                    <button className='btn-delete' onClick={() => deleteHistory(value.id)}>
                      Delete
                    </button>
                  </li>
                )
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default TransactionHistory;
