import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-container">
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
      </div>
    </div>
  );
}

export default App;
