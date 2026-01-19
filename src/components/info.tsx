import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import FooterButtons from "./footerButtons";

import {
  setSidebarButtonId,
  setInfo,
} from "../redux/features/multistepform/multiStepFormSlice";

import config from "../config";
import {
  validateName,
  validateEmail,
  validatePhone,
} from "../utils/validations";

import type { InfoState, ValidationState, reduxStateType } from "../types/type";

/*
  INFO COMPONENT
*/
const Info = () => {
  // redux declarations
  const sidebarbutton = useSelector(
    (state: reduxStateType) => state.multiStepForm.sidebarButtonId
  );
  const info = useSelector((state: reduxStateType) => state.multiStepForm.info);
  const dispatch = useDispatch();

  // state declarations
  const [infoState, setInfoState] = useState<InfoState>(info.data);
  const [validation, setValidation] = useState<ValidationState>({
    name: "initial",
    email: "initial",
    phone: "initial",
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(info.isDataValid);

  const checkValidation = (field: string) => {
    const validationCopy = { ...validation };
    switch (field) {
      case "name":
        {
          const nameValid = validateName(infoState.name);
          validationCopy.name = nameValid;
          setValidation((prev) => ({ ...prev, name: nameValid }));
        }
        break;
      case "email":
        {
          const emailValid = validateEmail(infoState.email);
          validationCopy.email = emailValid;
          setValidation((prev) => ({ ...prev, email: emailValid }));
        }
        break;
      case "phone":
        {
          const phoneValid = validatePhone(infoState.phone);
          validationCopy.phone = phoneValid;
          setValidation((prev) => ({ ...prev, phone: phoneValid }));
        }
        break;
      default:
    }
    const checkformValid = Object.values(validationCopy).every(
      (val) => val === true
    );

    setIsFormValid(checkformValid);
    dispatch(setInfo({ data: infoState, isDataValid: checkformValid }));
  };

  const handleNextAction = () => {
    checkValidation("name");
    checkValidation("email");
    checkValidation("phone");

    if (!isFormValid || !info.isDataValid) return;

    dispatch(setInfo({ data: infoState, isDataValid: isFormValid }));
    dispatch(setSidebarButtonId(sidebarbutton + 1));
  };

  // return statement
  return (
    <div className="content-container">
      <div className="info-container">
        <h2 className="info-header">Personal info</h2>
        <p className="info-body">
          Please provide your name, email address, and phone number.
        </p>
        <section className="info-form-section">
          {/* name field */}
          <div className="info-form-element">
            <div className="info-form-element-label">
              <label htmlFor="name">Name</label>
              {validation.name === false && <span>{config.errorMessages.fieldRequired}</span>}
            </div>
            <input
              onBlur={() => checkValidation("name")}
              onChange={(e) =>
                setInfoState((prev) => ({ ...prev, name: e.target.value }))
              }
              name="name"
              placeholder="e.g. Stephen King"
              type={"text"}
              value={infoState.name}
            />
            {validation.name === false && <span>{config.errorMessages.name}</span>}
          </div>
          {/* email field */}
          <div className="info-form-element">
            <div className="info-form-element-label">
              <label htmlFor="email">Email</label>
              {validation.email === false && (
                <span>{config.errorMessages.fieldRequired}</span>
              )}
            </div>
            <input
              onBlur={() => checkValidation("email")}
              onChange={(e) =>
                setInfoState((prev) => ({ ...prev, email: e.target.value }))
              }
              name="email"
              placeholder="e.g. stephenking@lorem.com"
              type={"email"}
              value={infoState.email}
            />
            {validation.email === false && <span>{config.errorMessages.email}</span>}
          </div>
          {/* phone field */}
          <div className="info-form-element">
            <div className="info-form-element-label">
              <label htmlFor="phone">Phone Number</label>
              {validation.phone === false && (
                <span>{config.errorMessages.fieldRequired}</span>
              )}
            </div>{" "}
            <input
              onBlur={() => checkValidation("phone")}
              onChange={(e) =>
                setInfoState((prev) => ({ ...prev, phone: e.target.value }))
              }
              name="phone"
              placeholder="e.g. +1 234 567 890"
              type={"tel"}
              value={infoState.phone}
            />
            {validation.phone === false && <span>{config.errorMessages.phone}</span>}
          </div>
        </section>
      </div>
      <FooterButtons nextBtnAction={() => handleNextAction()} />
    </div>
  );
};

export default Info;
