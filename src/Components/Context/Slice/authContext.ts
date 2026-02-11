import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";


type HistoryItem = {
  id: string;
  operator: "+" | "-";
  description: string;
  amount: number;
};

type ExpenseTrackerState = {
  availableAmounts: number;
  totalExpenses: number;
  totalIncomes: number;
  totalHistorys: HistoryItem[];
};

type InputPayload = {
  operator: "+" | "-";
  description: string;
  amount: string;
};



const calculateTotals = (history: HistoryItem[]) => {
  const income = history
    .filter((value) => {
      return value.operator === "+";
    })
    .reduce((sum, t) => {
      return sum + Number(t.amount);
    }, 0);
  const expense = history
    .filter((value) => {
      return value.operator === "-";
    })
    .reduce((sum, t) => {
      return sum + Number(t.amount);
    }, 0);

  return {
    income,
    expense,
    availableAmount: income - expense,
  };
};

const initialState: ExpenseTrackerState =  {
    availableAmounts: 0,
    totalExpenses: 0,
    totalIncomes: 0,
    totalHistorys: [],
  }

  
export const expenseTrackerSlice = createSlice({
  name: "expenseTracker",
  initialState,
  reducers: {
    deleteHistorys: (state, action: PayloadAction<string>) => {
      state.totalHistorys = state.totalHistorys.filter(
        (deleteValue) => deleteValue.id !== action.payload,
      );

      const totals = calculateTotals(state.totalHistorys);
      state.totalExpenses = totals.expense;
      state.totalIncomes = totals.income;
      state.availableAmounts = totals.availableAmount;
    },
    handleInputFormDatas: (state, action: PayloadAction<InputPayload>) => {
      state.totalHistorys.push({
        id: nanoid(),
        operator: action.payload.operator,
        description: action.payload.description,
        amount: Number(action.payload.amount),
      });
      const totals = calculateTotals(state.totalHistorys);
      state.totalExpenses = totals.expense;
      state.totalIncomes = totals.income;
      state.availableAmounts = totals.availableAmount;
    },
  },
});

export const { handleInputFormDatas, deleteHistorys } =
  expenseTrackerSlice.actions;

export default expenseTrackerSlice.reducer;

// 🧠 First: What is an action?

// In Redux, an action is just a plain JavaScript object.

// Example of an action:

// {
//   type: "auth/addHistory",
//   payload: {
//     operator: "+",
//     description: "Salary",
//     amount: 5000
//   }
// }

// 👉 This object is automatically created when you call:

// dispatch(addHistory(data));

// 🧩 What is payload?

// Think of payload = data you want to send to Redux

// 📦 Payload = packet of information

// Example:

// const data = {
//   operator: "+",
//   description: "Salary",
//   amount: 5000,
// };

// dispatch(addHistory(data));

// ➡️ Redux converts this into:

// action = {
//   type: "auth/addHistory",
//   payload: data
// }

// So inside reducer:

// action.payload === data

// 🔍 Inside the reducer (step by step)
// This reducer:
// addHistory(state, action) {
//   state.totalHistory.push({
//     id: Math.random() * 2,
//     operator: action.payload.operator,
//     description: action.payload.description,
//     amount: action.payload.amount,
//   });
// }

// What is happening?
// Code	Meaning
// state	Current Redux data
// action	Object sent by dispatch
// action.payload	Data you passed
// action.payload.operator	"+" or "-"
