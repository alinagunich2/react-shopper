import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./dataSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    data: counterReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
