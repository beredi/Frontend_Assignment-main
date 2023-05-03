import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  return <div>{t("newApp")}</div>;
};

export default App;
