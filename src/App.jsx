import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Player from "./pages/player/Player";
import Toast from "./components/toast-message/Toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        npm;
        console.log("Sign In ");
        navigate("/");
      } else {
        console.log("Sign Out");
        navigate("/login");
      }
    });
  }, []);
  return (
    <>
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
