import React, { useEffect } from "react";
import {
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
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
  
  return (
    <div>
       <Sidebar/> 
        <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} /> 
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/create-article" element={<CreateArticle/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
