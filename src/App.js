import React from "react";
import About from "./Components/About";
import Interest from "./Components/Interest";
import PhotoSection from "./Components/PhotoSection";
import Footer from "./Components/Footer";
import "../src/style.css";
export default function App() {
  return (
    <section className="profile">
      <PhotoSection />
      <About />
      <Interest />
      <Footer />
    </section>
  );
}
