import { useSelector, useDispatch } from "react-redux";
import FooterButtons from "./footerButtons";

import {
  setSidebarButtonId,
  setShowThankYouPage,
} from "../redux/features/multistepform/multiStepFormSlice";

import type { reduxStateType } from "../types/type";

const Summary = () => {
  // redux declarations
  const dispatch = useDispatch();
  const sidebarButton = useSelector(
    (state:reduxStateType) => state.multiStepForm.sidebarButtonId
  );
  const plan = useSelector((state:reduxStateType) => state.multiStepForm.plan);
  const addOns = useSelector(
    (state:reduxStateType) => state.multiStepForm.addOns
  );

  const handleFooterBtn = (val: number) => {
    dispatch(setSidebarButtonId(sidebarButton + val));
  };

  const handleConfirmBtn = () => {
    dispatch(setShowThankYouPage());
  };

  let anyAddOnSelected = false;
  let totalCost: number = plan.planCost;

  addOns.forEach((addOn) => {
    if (addOn.isSelected) {
      if (!anyAddOnSelected) {
        anyAddOnSelected = true;
      }
      totalCost +=
        plan.planType === "Monthly" ? addOn.cost.Monthly : addOn.cost.Yearly;
    }
  });

  // return statement
  return (
    <div className="content-container">
      <div className="info-container">
        <h2 className="info-header">Finishing up</h2>
        <p className="info-body">
          Double-check everything looks OK before confirming.
        </p>
        <section className="summary-form-section">
          <div className="summary-form-details">
            <div className="summary-form-header">
              <div className="summary-form-header-details">
                <h6>Arcade ({plan.planType})</h6>
                <button
                  onClick={() => {
                    dispatch(setSidebarButtonId(2));
                  }}
                >
                  Change
                </button>
              </div>
              <div className="summary-form-header-cost">
                {plan.planType === "Monthly" && <>${plan.planCost}/mo</>}
                {plan.planType === "Yearly" && <>${plan.planCost}/yr</>}
              </div>
            </div>
            {anyAddOnSelected && (
              <>
                <span />
                <div className="summary-form-body">
                  {addOns.map((addOn) => {
                    if (addOn.isSelected) {
                      return (
                        <div className="summary-form-body-item">
                          <div className="summary-form-body-item-name">
                            {addOn.name}
                          </div>
                          <div className="summary-form-body-item-cost">
                            {plan.planType === "Monthly" && (
                              <>+${addOn.cost.Monthly}/mo</>
                            )}
                            {plan.planType === "Yearly" && (
                              <>+${addOn.cost.Yearly}/yr</>
                            )}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </>
            )}
          </div>
          <div className="summary-form-cost">
            <div className="summary-form-cost-item-name">
              Total (per {plan.planType === "Monthly" ? "month" : "year"})
            </div>
            <div className="summary-form-cost-total">
              {plan.planType === "Monthly" && <>${totalCost}/mo</>}
              {plan.planType === "Yearly" && <>${totalCost}/yr</>}
            </div>
          </div>
        </section>
      </div>
      <FooterButtons
        prevBtnAction={() => handleFooterBtn(-1)}
        confirmBtnAction={() => handleConfirmBtn()}
      />
    </div>
  );
};

export default Summary;
