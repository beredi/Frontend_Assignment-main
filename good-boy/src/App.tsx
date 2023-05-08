import React from "react";
import "./App.css";
import { Header } from "./components/common/UI/Header";
import { Footer } from "./components/common/UI/Footer";
import { Main } from "./components/common/UI/Main";
import { useFetchShelters } from "./hooks/useFetchShelters";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  useFetchShelters();
  return (
    <>
      <ToastContainer />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
