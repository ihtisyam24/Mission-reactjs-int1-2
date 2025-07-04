import React from "react";
import "../App.css";
import Navbar from "../components/organisme/Navbar";
import Footer from "../components/organisme/Footer";

export default function HomeLayouts({ children }) {
  return (
    <>
      <Navbar />
      <div className="bg-amber-50 pt-10">{children}</div>
      <Footer />
    </>
  );
}
