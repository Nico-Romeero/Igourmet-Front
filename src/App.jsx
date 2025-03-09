import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import React, { useEffect } from "react";
import AOS from "aos";
import { ToastContainer } from "react-toastify";

import "aos/dist/aos.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
