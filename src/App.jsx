import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './pages/admin/adminPage';
import HomePage from './pages/home/homePage';
import LoginPage from './pages/login/login';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Toaster/>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


