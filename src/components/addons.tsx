import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";

import FooterButtons from "./footerButtons";

import { setAddOn } from "../redux/features/multistepform/multiStepFormSlice";
import { setSidebarButtonId } from "../redux/features/multistepform/multiStepFormSlice";

import type { addOnType, reduxStateType } from "../types/type";

const AddOns = () => {
  // redux declarations
  const dispatch = useDispatch();
  const sidebarButton = useSelector(
    (state: reduxStateType) => state.multiStepForm.sidebarButtonId
  );
  const plan = useSelector((state: reduxStateType) => state.multiStepForm.plan);
  const addOns = useSelector(
    (state: reduxStateType) => state.multiStepForm.addOns
  );

  const handleFooterBtn = (val: number) => {
    dispatch(setSidebarButtonId(sidebarButton + val));
  };

  const handleAddOnClick = (addOn: addOnType) => {
    const updatedAddOns = addOns.map((item) => {
      if (item.name === addOn.name) {
        return { ...item, isSelected: !item.isSelected };
      }
      return item;
    });
    dispatch(setAddOn(updatedAddOns));
  };

  // return statement
  return (
    <div className="content-container">
      <div className="info-container">
        <h2 className="info-header">Pick add-ons</h2>
        <p className="info-body">
          Add-ons help enhance your gaming experience.
        </p>
        <section className="addons-section">
          {addOns.map((addOn) => {
            const addOnClass = cx({
              "addOn-button": true,
              "addOn-button-selected": addOn.isSelected,
            });
            return (
              <button
                key={addOn.name}
                className={addOnClass}
                onClick={() => {
                  handleAddOnClick(addOn);
                }}
              >
                <div className="addOn-content">
                  <input checked={addOn.isSelected} type="checkbox" />
                  <div className="addOn-content-body">
                    <h6>{addOn.name}</h6>
                    <p>{addOn.description}</p>
                  </div>
                </div>
                <div className="addOn-cost">
                  +$
                  {plan.planType === "Monthly"
                    ? addOn.cost.Monthly + "/mo"
                    : addOn.cost.Yearly + "/yr"}
                </div>
              </button>
            );
          })}
        </section>
      </div>
      <FooterButtons
        prevBtnAction={() => handleFooterBtn(-1)}
        nextBtnAction={() => handleFooterBtn(1)}
      />
    </div>
  );
};

export default AddOns;
