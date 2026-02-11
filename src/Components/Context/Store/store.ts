import { configureStore } from "@reduxjs/toolkit";
import expenseTrackerReducer from "../Slice/authContext";



const store = configureStore({
  reducer: {
    expenseTracker: expenseTrackerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;