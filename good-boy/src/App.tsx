import React from "react";
import "./App.css";
import { Header } from "./components/common/UI/Header";
import { Footer } from "./components/common/UI/Footer";
import { Main } from "./components/common/UI/Main";
import { useFetchShelters } from "./hooks/useFetchShelters";

const App = () => {
  useFetchShelters();
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
