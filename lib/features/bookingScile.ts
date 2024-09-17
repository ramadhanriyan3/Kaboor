import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Passenger = {
  adult: number;
  children: number;
};

interface BookingState {
  origin: string;
  destination: string;
  departureDate: Date | undefined | null;
  returnDate: Date | undefined | null;
  passenger: Passenger;
  classSeat: string;
}

const initialState: BookingState = {
  origin: "",
  destination: "",
  departureDate: null,
  returnDate: null,
  passenger: {
    adult: 1,
    children: 0,
  },
  classSeat: "",
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setPassenger: (state, action: PayloadAction<Passenger>) => {
      state.passenger = action.payload;
    },
    setOrigin: (state, action: PayloadAction<string>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
    setClassSeat: (state, action: PayloadAction<string>) => {
      state.classSeat = action.payload;
    },
    setDepartureDate: (state, action: PayloadAction<Date>) => {
      state.departureDate = action.payload;
    },
    setReturnDate: (state, action: PayloadAction<Date>) => {
      state.returnDate = action.payload;
    },
  },
});

export const {
  setPassenger,
  setOrigin,
  setDestination,
  setClassSeat,
  setDepartureDate,
  setReturnDate,
} = bookingSlice.actions;

export const selectOrigin = (state: RootState) => state.booking.origin;
export const selectDestination = (state: RootState) =>
  state.booking.destination;
export const selectPassenger = (state: RootState) => state.booking.passenger;
export const selectDepartureDate = (state: RootState) =>
  state.booking.departureDate;
export const selectReturnDate = (state: RootState) => state.booking.returnDate;
export const selectClassSeat = (state: RootState) => state.booking.classSeat;

export default bookingSlice.reducer;
