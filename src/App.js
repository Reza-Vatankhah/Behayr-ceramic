import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Ads from "./pages/Ads/Ads";
import SignUp from "./pages/Signup/SignUp"
import Login from "./pages/Login/Login"
import NotFound from "./pages/404/NotFound";
import Blog from './pages/Blogs/Blog';
import BlogDetails from "./components/BlogDetails/BlogDetails";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ads' element={<Ads />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/:id' element={<BlogDetails />} />
        <Route path='/*' element={<Navigate to='/notfound' />} />
      </Routes>
    </div>
  );
}

export default App;
