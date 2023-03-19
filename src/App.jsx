import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import "./index.css";

import data from "./data.js";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        className="card"
        img={item.img}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
