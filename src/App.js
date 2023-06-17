import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";


import './App.css';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>

          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      
      
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
