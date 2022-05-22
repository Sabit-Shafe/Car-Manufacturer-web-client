import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer'
import { ToastContainer } from 'react-toastify';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
