import { configureStore } from "@reduxjs/toolkit";
import multiStepFormReducer from "../features/multistepform/multiStepFormSlice";

const reduxStore = configureStore({
  reducer: {
    multiStepForm: multiStepFormReducer,
  }
})

export default reduxStore;