import React from "react";
import NavCentr from "./NavCenter";
import NavTop from "./NavTop";
import NavBottom from "./NavBottom";

function NavHome() {
  return (
    <div>
      <NavTop />
      <NavCentr />
      <NavBottom />
    </div>
  );
}

export default NavHome;
