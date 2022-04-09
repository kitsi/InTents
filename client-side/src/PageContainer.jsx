import React from "react";

import NavBar from "./components/NavBar/NavBar";
import Router from "./Router";
import Footer from "./components/Footer/Footer";

export default function PageContainer() {
  return (
    <div>
      <div style={{ minHeight: "calc(100vh - 100px)" }}>
        <NavBar />
        <Router />
      </div>
      <Footer />
    </div>
  )
}
