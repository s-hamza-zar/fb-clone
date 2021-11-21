import React from "react";
import "./SideBarRow.css"
function SideBarRow({ src, title, Icon }) {
  return (
    <div className="sidebar__row">
      {Icon && <Icon src={src} />}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarRow;
