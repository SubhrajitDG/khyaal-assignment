import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import Header from "./components/global/header";
import Footer from "./components/global/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
