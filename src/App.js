import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer'
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/Signup';
import Blogs from './Pages/Blogs/Blogs'
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import RequireAuth from './Pages/Login/RequireAuth'
import Dashboard from './Pages/Dashboard/Dashboard';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin'
import AddProducts from './Pages/Dashboard/AddProducts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
      <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
      <Route path="AddProducts" element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
        </Route>
      <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="myportfoloio" element={<MyPortfolio></MyPortfolio>} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
