import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import Ckeck from "./Components/Ckeck.jsx";
import { Navigate } from "react-router-dom";


import './App.css';

function ProtectedRoutes({children}){
  const isAuthenticated = JSON.parse(localStorage.getItem("token"));
  
  if(!isAuthenticated){
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>

        <Route path="/" element ={ <ProtectedRoutes><Home /></ProtectedRoutes>}  />
          <Route path="/" element={<Home />} />
          <Route path="/ckeck" element={<Ckeck />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      
      
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
