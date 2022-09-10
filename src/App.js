import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Ads from "./pages/Ads/Ads";
import SignUp from "./pages/Signup/SignUp"
import Login from "./pages/Login/Login"


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/ads' element={<Ads />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
