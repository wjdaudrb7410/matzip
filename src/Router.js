import { HashRouter, Route, Routes } from "react-router-dom";
import { UseScrollTo } from "./components/UseScrollTo";
import { routes } from "./routes";
import { Home } from "./pages/Home/Home";
import { Intro } from "./pages/Intro/Intro";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Login/Register";
import { Detail } from "./pages/Detail/Detail";
import { FoF } from "./pages/FoF/FoF";
import { Search } from "./pages/Search/Search";

export const Router = () => {
  return (
    <>
      <HashRouter>
        <UseScrollTo />
        <Routes>
          <Route path={routes.FoF} element={<FoF />} />
          <Route path={routes.Search} element={<Search />} />
          <Route path={routes.Detail} element={<Detail />} />
          <Route path={routes.Signup} element={<Register />} />
          <Route path={routes.Signin} element={<Login />} />
          <Route path={routes.Intro} element={<Home />} />
          <Route path={routes.home} element={<Intro />} />
        </Routes>
      </HashRouter>
    </>
  );
};
