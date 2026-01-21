import type { Config } from "./types/type";
import arcadeIcon from "./assets/images/icon-arcade.svg";
import advancedIcon from "./assets/images/icon-advanced.svg";
import proIcon from "./assets/images/icon-pro.svg";

const config: Config = {
  sidebarButtons: [
    { id: 1, label: "YOUR INFO" },
    { id: 2, label: "SELECT PLAN" },
    { id: 3, label: "ADD-ONS" },
    { id: 4, label: "SUMMARY" },
  ],
  plans: [
    {
      name: "Arcade",
      cost: { Monthly: 9, Yearly: 90 },
      imageURL: arcadeIcon, // Use imported URL
    },
    {
      name: "Advanced",
      cost: { Monthly: 12, Yearly: 120 },
      imageURL: advancedIcon,
    },
    {
      name: "Pro",
      cost: { Monthly: 15, Yearly: 150 },
      imageURL: proIcon,
    },
  ],
  errorMessages: {
    name: "Please enter a valid name.",
    email: "Please enter a valid email address.",
    phone: "Please enter a valid phone number.",
    fieldRequired: "This Field is required.",
  },
};

export default config;
