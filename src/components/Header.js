import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">TaskFlow</Link>
        <div>
          <Link className="btn btn-light me-2" to="/">Home</Link>
          <Link className="btn btn-light" to="/add">Add Task</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
