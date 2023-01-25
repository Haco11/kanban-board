import React from "react";
import "./Navbar.scss";

import { useProject } from "../../context/ProjectContext";

const Navbar = ({ setShowTicket }) => {
  const { currentProject } = useProject();
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <h1>Kanban</h1>
      </div>
      <div className="navbar-heading">
        <h2>{currentProject.title}</h2>
      </div>
      <button onClick={() => setShowTicket(true)}>Add new ticket</button>
    </nav>
  );
};

export default Navbar;
