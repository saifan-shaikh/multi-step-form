import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";

import FooterButtons from "./footerButtons";
import {
  setSidebarButtonId,
  setPlan,
} from "../redux/features/multistepform/multiStepFormSlice";
import config from "../config";

import type { plansArrayType, reduxStateType } from "../types/type";

/* MAIN COMPONENT*/
const Plan = () => {
  // redux declarations
  const dispatch = useDispatch();
  const sidebarButton: number = useSelector(
    (state: reduxStateType) => state.multiStepForm.sidebarButtonId,
  );
  const plan = useSelector((state: reduxStateType) => state.multiStepForm.plan);

  const handleFooterBtn = (val: number) => {
    dispatch(setSidebarButtonId(sidebarButton + val));
  };

  const handlePlanClick = (planName: plansArrayType) => {
    const newPlanName = planName.name;
    const newPlanCost = planName.cost[plan.planType];
    dispatch(
      setPlan({ ...plan, planName: newPlanName, planCost: newPlanCost }),
    );
  };

  const generatePlans = () => {
    return config.plans.map((planElement) => {
      const planClass = cx({
        "plan-container": true,
        "plan-container-selected": plan.planName === planElement.name,
      });
      return (
        <button
          className={planClass}
          key={planElement.name}
          onClick={() => handlePlanClick(planElement)}
          type="button"
        >
          <img src={planElement.imageURL} />
          <div className="plan-button-body">
            <div className="plan-button-body-header">{planElement.name}</div>
            {plan.planType === "Monthly" && (
              <div className="plan-button-body-cost">
                ${planElement.cost.Monthly}/mo
              </div>
            )}
            {plan.planType === "Yearly" && (
              <>
                <div className="plan-button-body-cost ">
                  ${planElement.cost.Yearly}/yr
                </div>
                <div className="plan-button-body-free">2 months free</div>
              </>
            )}
          </div>
        </button>
      );
    });
  };

  const handlePlanTypeToggle = () => {
    const newPlanType: "Monthly" | "Yearly" =
      plan.planType === "Monthly" ? "Yearly" : "Monthly";

    const newPlanCost: number = config.plans.filter(
      (somePlan) => somePlan.name === plan.planName,
    )[0].cost[newPlanType];

    dispatch(
      setPlan({ ...plan, planType: newPlanType, planCost: newPlanCost }),
    );
  };

  const generateToggleButton = () => {
    const toggleBtnClass = cx({
      "toggle-button": true,
      isToggledYearly: plan.planType === "Yearly",
    });

    const toggleClassMonthly = cx({
      "toggle-Yes": plan.planType === "Monthly",
      "toggle-No": plan.planType === "Yearly",
    });

    const toggleClassYearly = cx({
      "toggle-Yes": plan.planType === "Yearly",
      "toggle-No": plan.planType === "Monthly",
    });

    // return statement
    return (
      <div className="plan-toggle-container">
        <div className={toggleClassMonthly}>Monthly</div>
        <button
          className={toggleBtnClass}
          onClick={() => handlePlanTypeToggle()}
          type="button"
        >
          <div className="toggleThumb" />
        </button>
        <div className={toggleClassYearly}>Yearly</div>
      </div>
    );
  };

  // return statement
  return (
    <div className="content-container">
      <div className="info-container">
        <h2 className="info-header">Select your plan</h2>
        <p className="info-body">
          You have an option of monthly or yearly billing.
        </p>
        <section className="plan-form-section">{generatePlans()}</section>
        {generateToggleButton()}
      </div>
      <FooterButtons
        prevBtnAction={() => handleFooterBtn(-1)}
        nextBtnAction={() => handleFooterBtn(1)}
      />
    </div>
  );
};

export default Plan;
