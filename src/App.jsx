import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './pages/admin/adminPage';
import HomePage from './pages/home/homePage';
import LoginPage from './pages/login/login';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/register/register';
import Testing from './components/testing';

function App() {
  return (
    <BrowserRouter>
   
      <Toaster/>    {/* alert library  */}

      <Routes>

        <Route path="/login" element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/testing" element={<Testing />} />
      
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;


