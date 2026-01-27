import cx from "classnames";
import { useSelector } from "react-redux";

import type { reduxStateType, footerButtonsProps } from "../types/type";
const FooterButtons = (props: footerButtonsProps) => {
  // redux declarations
  const sidebarbutton: number = useSelector(
    (state: reduxStateType) => state.multiStepForm.sidebarButtonId,
  );

  const footerClass = cx({
    "app-footer": true,
    "app-footer-initial": sidebarbutton === 1,
    "app-footer-others": sidebarbutton !== 1,
  });

  return (
    <div className={footerClass}>
      {sidebarbutton > 1 && (
        <button
          className="footer-go-back-button"
          onClick={props.prevBtnAction}
          type="button"
        >
          Go Back
        </button>
      )}
      {sidebarbutton < 4 && (
        <button
          className="footer-next-step-button"
          onClick={props.nextBtnAction}
          type="submit"
        >
          Next Step
        </button>
      )}
      {sidebarbutton === 4 && (
        <button
          className="footer-confirm-step-button"
          onClick={props.confirmBtnAction}
          type="submit"
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default FooterButtons;
