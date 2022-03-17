import React from "react";
import { images, navItems } from "../constants";




const NavigationDots <Props> = ({ active :{active: boolean}}) => {
  return (
    <div className="app__navigation">
      {navItems.map((item, index) => (
        <a
          key={`item-${index}`}
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
