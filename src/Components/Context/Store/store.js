import { configureStore } from "@reduxjs/toolkit";
import expenseTrackerSlice from "../Slice/authContext";

const store = configureStore({
  reducer: {
    expenseTracker: expenseTrackerSlice,
  },
});

export default store;
