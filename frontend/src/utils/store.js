import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
