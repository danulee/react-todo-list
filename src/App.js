import { AppBar, Toolbar } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Sub1Page from "./pages/SubPage";



export default function App() {
  return (
  <>
      <AppBar position="static">
        <Toolbar>
          <div className="flex-1"></div>
          <span className="font-bold">HAPPY NOTE</span>
          <div className="flex-1"></div>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/sub1" element={<Sub1Page />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
  </>
  );
}