import "./output.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginComponent from "./Routes/Login";
import SignupComponent from "./Routes/Signup";
import HomeComponent from "./Routes/Home";
function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        <Routes>
           <Route path="/" element = {<div>hello</div>} />
           <Route path="/login" element={<LoginComponent/>} />
           <Route path="/signup" element={<SignupComponent/>} />
           <Route path="/home" element={<HomeComponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
