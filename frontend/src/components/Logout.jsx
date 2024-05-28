import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("username");
    navigate("/login");
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-400">
      Logging out...
    </div>
  );
}

export default Logout;
