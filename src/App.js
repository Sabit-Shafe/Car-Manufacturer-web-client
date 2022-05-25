import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders';
import Payment from './Pages/Dashboard/Payment';
import Notfound from './Pages/Shared/Notfound';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/products/:productsID" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
      <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
      <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
      <Route path="AddProducts" element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
      <Route path="payment/:id" element={<Payment></Payment>}></Route>
      <Route path="ManageOrders" element={<ManageOrders/>}></Route>
      <Route path="ManageProducts" element={<ManageProducts/>}></Route>
      <Route path="AddReview" element={<RequireAuth><AddReview></AddReview></RequireAuth>}></Route>
      <Route path="MyOrder" element={<RequireAuth><MyOrders></MyOrders></RequireAuth>}></Route>
        </Route>
      <Route path="login" element={<Login />} />

        <Route path="signup" element={<SignUp />} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="*"element={<Notfound/>} />
        
        <Route path="MyPortfolio" element={<MyPortfolio></MyPortfolio>} />
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
