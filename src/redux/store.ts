import { calkulate } from "./tools/calkSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    calkulate,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type useDispach = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
