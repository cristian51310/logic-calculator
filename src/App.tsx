import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from './pages/SignUp';
import { Login } from './pages/Login';
import AdminLayout from './layouts/admin';
import AuthLayout from './layouts/auth';

function App() {
  return (
    <Routes>
      <Route path='admin/*' element={<AdminLayout />} />
      <Route path='auth/*' element={<AuthLayout />} />
      <Route path="/" element={<Navigate to='/admin' replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />

    </Routes>
  )
}

export default App
