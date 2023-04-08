import React from "react";
import "../styles/main.header.css";

const HEADER_MENUS = ["home", "board"];
const MainHeader = () => {
  return (
    <nav id="main_header">
      <ul>
        {HEADER_MENUS.map((menu, index) => (
          <li key={index}>{menu}</li>
        ))}
      </ul>
    </nav>
  );
};

export default MainHeader;
