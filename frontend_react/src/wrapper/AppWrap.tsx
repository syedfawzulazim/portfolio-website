import React, { ElementType } from "react";
import { NavigationDots, SocialMedia } from "../components";

//Wrapper JSX Element for navigator link and social media icons
const AppWrap = (Component: ElementType, idName: string, classNames?: string) =>
  function HOC() {
    const copyRight = (
      <div className="copyright">
        <h6 className="p-text">©Syed Fawzul Azim, 2022 </h6>
        <h6 className="p-text">All Rights Reserverd </h6>
      </div>
    );

    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          {/* shows copyright only on the last section */}
          {idName === "contact" ? copyRight : ""}
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
