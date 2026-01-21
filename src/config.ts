import type { Config } from "./types/type";

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
      imageURL: "../assets/images/icon-arcade.svg",
    },
    {
      name: "Advanced",
      cost: { Monthly: 12, Yearly: 120 },
      imageURL: "../assets/images/icon-advanced.svg",
    },
    {
      name: "Pro",
      cost: { Monthly: 15, Yearly: 150 },
      imageURL: "../assets/images/icon-pro.svg",
    },
  ],
  errorMessages: {
  name: "Please enter a valid name.",
  email: "Please enter a valid email address.",
  phone: "Please enter a valid phone number.",
  fieldRequired: "This Field is required.",
}
};

export default config;
