import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Container } from "./components/common/UI/Container";

const App = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div>{t("newApp")}</div>
    </Container>
  );
};

export default App;
