import "./output.css";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginComponent from "./Routes/Login";
import SignupComponent from "./Routes/Signup";
import HomeComponent from "./Routes/Home";
import { Cookies, useCookies } from "react-cookie";
function App() {

  const [cookie, setCookie] = useCookies(["tokne"]);

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
      {cookie.token ? (
        <Routes>
           <Route path="/" element = {<div>hello</div>} />
           <Route path="/home" element={<HomeComponent/>} />
           <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      ):(
        <Routes>
          <Route path="/home" element={<HomeComponent/>} />
          <Route path="/login" element={<LoginComponent/>} />
          <Route path="/signup" element={<SignupComponent/>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
      </BrowserRouter>
    </div>
  );
}

export default App;
