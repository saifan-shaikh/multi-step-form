import { createSlice } from "@reduxjs/toolkit";

import type { addOnType } from "../../../types/type";

const initialState: multiStepFormType = {
  sidebarButtonId: 1,
  info: {
    data: {
      name: "",
      email: "",
      phone: "",
    },
    isDataValid: false,
  },
  plan: {
    planName: "Arcade",
    planType: "Monthly",
    planCost: 9,
  },
  addOns: [
    { name: "Online service", description: "Access to multiplayer games", cost: { Monthly: 1, Yearly: 10 }, isSelected: false },
    { name: "Larger storage", description: "Extra 1TB of cloud save", cost: { Monthly: 2, Yearly: 20 }, isSelected: false },
    { name: "Customizable profile", description: "Custom theme on your profile", cost: { Monthly: 2, Yearly: 20 }, isSelected: false },
  ],
  showThankYouPage: false,
};

const multiStepFormSlice = createSlice({
  name: "multiStepForm",
  initialState: initialState,
  reducers: {
    setSidebarButtonId: (state, action) => {
      state.sidebarButtonId = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
    setAddOn: (state, action) => {
      state.addOns = action.payload;
    },
    setShowThankYouPage: (state) => {
      state.showThankYouPage = true;
    },
  },
});

export default multiStepFormSlice.reducer;
export const { 
  setSidebarButtonId,
  setInfo,
  setPlan,
  setAddOn,
  setShowThankYouPage,
 } = multiStepFormSlice.actions;


//  types declaration
type multiStepFormType = {
  sidebarButtonId: number;
  info: {
    data: {
      name: string;
      email: string;
      phone: string;
    };
    isDataValid: boolean;
  };
  plan: {
    planName: "Arcade" | "Advanced" | "Pro";
    planType: "Monthly" | "Yearly";
    planCost: number;
  };
  addOns: addOnType[];
  showThankYouPage: boolean;
};

export type { multiStepFormType };
