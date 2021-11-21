import React from "react";
import "./Sidebar.css"
import SideBarRow from "./SideBarRow";
import Data from "./SidebarData";
function Sidebar() {
  return (
    <div className="sidebar">
      {Data.map((data) => {
        return (
          <SideBarRow
            key={data.id}
            title={data.title}
            Icon={data.icon}
            src={data.src}
          />
        );
      })}
      ;
    </div>
  );
}

export default Sidebar;
