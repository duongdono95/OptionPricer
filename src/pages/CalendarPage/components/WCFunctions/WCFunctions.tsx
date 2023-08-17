import React, { useState } from "react";
import "./WCFunctions.scss";
import WeekCalculator from "./WeekCalculator/WeekCalculator";
import {
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
  Router,
  Link,
} from "react-router-dom";
const WCFunctions = () => {
  const pathName = useLocation();
  const tabsName = [
    {
      name: "Week Calculator",
      path: "widget-calendar",
    },
    {
      name: "Test",
      path: "widget-calendar/test",
    },
  ];

  const [currentTab, setCurrentTab] = useState<string>(tabsName[0].name);
  return (
    <div className="WCFunctions">
      <div className="tabs">
        {tabsName.map((tab, index) => {
          return (
            <div
              key={index}
              className="tab"
              onClick={() => setCurrentTab(tabsName[index].name)}
            >
              <NavLink
                to={`/${tab.path}`}
                className={
                  currentTab === tab.name
                    ? "tab_name tab_name-active"
                    : "tab_name"
                }
                key={index}
              >
                {tab.name}
              </NavLink>
              <div
                className={
                  currentTab === tab.name
                    ? "under_line active_line"
                    : "under_line"
                }
              ></div>
            </div>
          );
        })}
      </div>
      <div className="function_content">
        <Outlet />
      </div>
    </div>
  );
};

export default WCFunctions;
