import './App.css';
import Header from './components/Header';
import {Navigate,Route,Routes} from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Ads from './Pages/Ads';
import SignUp from './Pages/register/SignUp';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div>
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/ads' element={<Ads />} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/NotFound' element={<NotFound/>}/>
            <Route path='/*' element={<Navigate to='/notFound' />} />
          </Routes>
    </div>
  );
}

export default App;
