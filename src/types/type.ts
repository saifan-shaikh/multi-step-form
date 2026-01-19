import type { multiStepFormType } from "../redux/features/multistepform/multiStepFormSlice";

type SidebarButton = {
  id: number;
  label: string;
};

export type plansArrayType = {
  name: string;
  cost: {
    Monthly: number;
    Yearly: number;
  };
  imageURL: string;
};

type errorMessagesType = {
  name: string;
  email: string;
  phone: string;
  fieldRequired: string;
};

export type Config = {
  sidebarButtons: SidebarButton[];
  plans: plansArrayType[];
  errorMessages: errorMessagesType;
};

export type InfoState = {
  name: string;
  email: string;
  phone: string;
};

export type ValidationState = {
  name: boolean | "initial";
  email: boolean | "initial";
  phone: boolean | "initial";
};

export type addOnType = {
  name: string;
  description: string;
  cost: {
    Monthly: number;
    Yearly: number;
  };
  isSelected: boolean;
};

export type footerButtonsProps = {
  nextBtnAction?: () => void;
  prevBtnAction?: () => void;
  confirmBtnAction?: () => void;
};

export type reduxStateType = {
  multiStepForm: multiStepFormType;
};
