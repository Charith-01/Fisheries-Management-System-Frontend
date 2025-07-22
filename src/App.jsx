import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import ProductCard from './components/product.card'
import AdminDashboard from './pages/adminDashboard'
import LoginPage from './pages/loginPage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/client/registerPage'

function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
      <Routes path="/*">
        <Route path="/admin/*" element={<AdminDashboard/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/*" element={<h1>404 Not Found</h1>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
