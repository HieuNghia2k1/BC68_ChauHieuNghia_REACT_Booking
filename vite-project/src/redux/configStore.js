import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
// import xehoiSlice from "./xehoiSlice";
// import xiNgauSlice from "./xiNgauSlice";

export const store = configureStore({
  reducer: {
    hoTen: () => "Hieu Nghia",

    // truyền thêm reducer đã khai báo vào Store
    userSlice,
    // xehoiSlice,
    // xiNgauSlice,
  },
});
