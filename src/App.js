import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Ads from "./pages/Ads/Ads";
import SignUp from "./pages/Signup/SignUp"
import Login from "./pages/Login/Login"
import NotFound from "./pages/404/NotFound";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import ContactUs from "./pages/ContactUs/ContactUs.jsx"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ads' element={<Ads />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/blog/details/:slug' element={<BlogDetails />} />
        <Route path='/*' element={<Navigate to='/notfound' />} />
        <Route path='/contactus' element={<ContactUs/>} />


      </Routes>
    </div>
  );
}

export default App;
