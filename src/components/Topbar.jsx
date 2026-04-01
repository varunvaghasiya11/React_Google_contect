import React, { useState } from "react";
import { IcoSearch, IcoRefresh, IcoGrid } from "./Icons";
import { button } from "motion/react-client";

export function TopBar({ search, onSearch }) {
  const [dark, setDark] = useState();
  const handleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  }
  return (
    <div className="g-topbar">
      <div className="g-search" style={{ flex: 1 }}>
        <span style={{ color: "#5f6368" }}><IcoSearch /></span>
        <input value={search} onChange={e => onSearch(e.target.value)} placeholder="Search contacts" />
        {search && <button onClick={() => onSearch("")} style={{ background: "none", border: "none", cursor: "pointer", color: "#5f6368" }}>✕</button>}
      </div>
      <div className="d-flex align-items-center gap-2 ms-auto">
        <button className="btn" onClick={handleDark}>dark</button>
        {/* <button className="ico-btn"><IcoRefresh /></button> */}
        <button className="ico-btn"><IcoGrid /></button>
        <button className="g-avatar">U</button>
      </div>
    </div>
  );
}
