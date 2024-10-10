// src/main.tsx
import { createRoot } from "react-dom/client";
import "./assets/global.css"; // Import global styles
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Guard_Dashbord from "./pages/guard-dashbord";
import Upload_attends from "./pages/upload-attends";
import Listiall from "./pages/list-all";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />
        <Route
          path="/guard"
          element={
            <>
              <Navbar />
              <Guard_Dashbord />
            </>
          }
        />
        <Route
          path="/upload-attends"
          element={
            <>
              <Navbar />
              <Upload_attends />
            </>
          }
        />
        <Route
          path="/list-all"
          element={
            <>
              <Navbar />
              <Listiall />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <>
    <App />
  </>
);
