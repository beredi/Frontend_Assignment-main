import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Container } from "./components/common/styled/Container.styled";
import { Header } from "./components/common/UI/Header";
import { Footer } from "./components/common/UI/Footer";

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Container>
        <div>{t("newApp")}</div>
      </Container>
      <Footer />
    </>
  );
};

export default App;
