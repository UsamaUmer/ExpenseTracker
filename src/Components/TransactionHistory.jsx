import { useContext } from "react";
import { outputContext } from "./Context/AuthContext";

function TransactionHistory() {
  const { totalHistory, deleteHistory} = useContext(outputContext);
  return (
    <div>
      <div>
        <h2>Income History</h2>
        <ul>
          {totalHistory.length > 0 &&
            totalHistory.map((value) => {
              return (
                value.operator === "+" && (
                  <li key={value.id}>
                    {`${value.description} is ${value.amount}`}
                    <button
                      id={value.id}
                      onClick={() => deleteHistory(value.id)}
                    >
                      Delete
                    </button>
                  </li>
                )
              );
            })}
        </ul>
      </div>
      <div>
        <h2>Expense History</h2>
        <ul>
          {totalHistory.length > 0 &&
            totalHistory.map((value) => {
              return (
                value.operator === "-" && (
                  <li key={value.id}>
                    {`${value.description} is ${value.amount}`}{" "}
                    <button
                      id={value.id}
                      onClick={() => deleteHistory(value.id)}
                    >
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
