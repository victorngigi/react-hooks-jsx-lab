import React from "react";

function NavBar() {
  return <nav>
    <ul style={{ display: "flex", listStyle: "none", gap: "5px" }}>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>;
}

export default NavBar;
