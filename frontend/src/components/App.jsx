import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Homepage from "./Homepage";
import Sidebar from "./Sidebar";
import SignUp from "./SignUp";
import Login from "./Login";
import About from "./About";
import Settings from "./Settings";
import CreateArticle from "./CreateArticle";
import Logout from "./Logout";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = sessionStorage.getItem("token");
  const restrictedRoutes = ["/signup", "/login"];

  useEffect(() => {
    if (!token && !restrictedRoutes.includes(location.pathname)) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      {restrictedRoutes.includes(location.pathname) ? undefined : <Sidebar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/create-article" element={<CreateArticle />} />
        <Route path="/user-articles" element={<Homepage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
