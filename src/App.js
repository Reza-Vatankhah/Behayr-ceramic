import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Ads from "./pages/Ads/Ads";
import SignUp from "./pages/Signup/SignUp"
import Login from "./pages/Login/Login"
import NotFound from "./pages/404/NotFound";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ads' element={<Ads />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/*' element={<Navigate to='/notfound' />} />
      </Routes>
    </div>
  );
}

export default App;
