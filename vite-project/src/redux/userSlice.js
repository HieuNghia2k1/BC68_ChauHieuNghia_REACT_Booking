import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  khachHang: {
    name: "Hieu Nghia",
    numberOfSeats: "6",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
