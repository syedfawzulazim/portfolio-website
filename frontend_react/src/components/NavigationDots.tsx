import React from "react";
import { navItems } from "../constants";

const NavigationDots = ({ active }: { active: string }): JSX.Element => {
  return (
    <div className="app__navigation">
      {navItems.map((item, index) => (
        <a
          key={`item-${index}`}
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        >
          {}
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
