import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <h2 className="text-center">Welcome to TaskFlow</h2>
      </div>
    </Router>
  );
}

export default App;
