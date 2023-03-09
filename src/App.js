import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HOME_ROUTE,
  ERROR_ROUTE,
  NOT_FOUND_ROUTE,
  LOGIN_ROUTE,
  CONTENT_ROUTE,
} from "./constants/routes";
import Home from "./pages/HomePage/index";
import ErrorPage from "./pages/ErrorPage/index";
import NotFoundPage from "./pages/NotFoundPage/index";
import Login from "./pages/LoginPage/index";
import Content from "./pages/ContentPage/index";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={ERROR_ROUTE} element={<ErrorPage />} />
          <Route path={NOT_FOUND_ROUTE} element={<NotFoundPage />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={CONTENT_ROUTE} element={<Content />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
