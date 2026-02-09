import { useContext } from "react";
import { outputContext } from "./Context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import {deleteHistorys} from './Context/Slice/authContext';

import "./TransactionHistory.css";


function TransactionHistory() {
  const dispatch = useDispatch();
  const { totalHistorys } = useSelector((state) => state.expenseTracker);
  // const { totalHistory, deleteHistory } = useContext(outputContext);
  return (
    <div className="mainClass">
      <div>
        <h2>Income</h2>
        <ul>
          {totalHistorys.length > 0 &&
            totalHistorys.map((value) => {
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
                    <button className='btn-delete' onClick={() => dispatch(deleteHistorys(value.id))}>
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
          {totalHistorys.length > 0 &&
            totalHistorys.map((value) => {
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
                    <button className='btn-delete' onClick={() => dispatch(deleteHistorys(value.id))}>
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
