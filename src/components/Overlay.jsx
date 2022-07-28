import React from "react";
import "@styles/components/Overlay.css";

const Overlay = ({ open, setOpen }) => {
  return <div className={`overlay ${open ? "open" : ""}`} onClick={() => setOpen(false)} />;
};

export default Overlay;
