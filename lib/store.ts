import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./features/bookingScile";

export const kaboorStore = () => {
  return configureStore({
    reducer: {
      booking: bookingReducer,
    },
  });
};

export type AppStore = ReturnType<typeof kaboorStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
