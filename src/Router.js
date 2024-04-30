import { HashRouter, Routes } from "react-router-dom";
import { UseScrollTo } from "./components/UseScrollTo";

export const Router = () => {
  return (
    <>
      <HashRouter>
        <UseScrollTo />
        <Routes></Routes>
      </HashRouter>
    </>
  );
};
