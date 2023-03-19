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
        <Card
          className="card"
          img="image 12.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
        <Card
          className="card"
          img="wedding-photography 1.png"
          rating="5.0"
          reviewCount={30}
          country="USA"
          title="Learn wedding photography"
          price={125}
        />
        <Card
          className="card"
          img="mountain-bike 1.png"
          rating="4.8"
          reviewCount={2}
          country="USA"
          title="Group Mountain Biking"
          price={50}
        />
        <Card
          className="card"
          img="image 12.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
      </div>
    </div>
  );
}

export default App;
