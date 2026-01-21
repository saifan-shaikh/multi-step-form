import cx from "classnames";

import { useSelector } from "react-redux";

import Info from "./components/info";
import Plan from "./components/plan";
import AddOns from "./components/addons";
import Summary from "./components/summary";
import ThankyouPage from "./components/thankyouPage";
import bgSidebarDesktop from "./assets/images/bg-sidebar-desktop.svg";
import bgSidebarMobile from "./assets/images/bg-sidebar-mobile.svg";

import config from "./config";

import type { reduxStateType } from "./types/type";

import "./App.css";

/* 
  MAIN COMPONENT
*/
function App() {
  // redux declarations
  const sidebarbutton = useSelector(
    (state: reduxStateType) => state.multiStepForm.sidebarButtonId
  );
  const showThankYouPage = useSelector(
    (state: reduxStateType) => state.multiStepForm.showThankYouPage
  );

  const generateNavigationButtons = () => {
    return config.sidebarButtons.map((button) => {
      const sidebarButtonClass = cx({
        "sidebar-button": true,
        "active-sidebar-button": button.id === sidebarbutton,
      });
      return (
        <div key={button.label} className="sidebar-button-container">
          <button className={sidebarButtonClass}>{button.id}</button>
          <div className="sidebar-button-label-container">
            <div className="sidebar-button-label-header">STEP {button.id}</div>
            <div className="sidebar-button-label-body">{button.label}</div>
          </div>
        </div>
      );
    });
  };

  // return statement
  return (
    <div className="app-container">
      {/* sidebar */}
      <div className="sidebar-container">
        <img
          className="bg-sidebar-desktop"
          src={bgSidebarDesktop}
          alt="bg-sidebar-desktop"
        />
        <img
          className="bg-sidebar-mobile"
          src={bgSidebarMobile}
          alt="bg-sidebar-mobile"
        />
        <div className="navigation-buttons">{generateNavigationButtons()}</div>
      </div>
      {/* body */}
      <div className="content-main">
        {sidebarbutton === 1 && <Info />}
        {sidebarbutton === 2 && <Plan />}
        {sidebarbutton === 3 && <AddOns />}
        {sidebarbutton === 4 && (
          !showThankYouPage ? <Summary /> : <ThankyouPage />

        )}
      </div>
    </div>
  );
}

export default App;
