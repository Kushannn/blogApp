import React from "react";

function Logo({ width = "100px" }) {
  return (
    <img
      src="../Virus.png"
      alt=""
      width={width}
      className="rounded-lg bg-opacity-50"
    />
  );
}

export default Logo;
