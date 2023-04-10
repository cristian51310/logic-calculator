import { Route, Routes, Navigate } from 'react-router-dom';
import CalculatorLayout from './pages/Calculator';
import { Login } from './pages/LogIn';
import Signup from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path='*' element={<CalculatorLayout />} />

      <Route path='auth/login' element={<Login/>} />
      <Route path='auth/signup' element={<Signup/>} />

      <Route path="/" element={<Navigate to='/auth/login' replace />} />
    </Routes>
  )
}

export default App
