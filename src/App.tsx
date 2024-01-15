import { Route, Routes } from 'react-router-dom';
import CalculatorLayout from './pages/Calculator';

export default function App() {
  return (
    <Routes>
      <Route path='*' element={<CalculatorLayout />} />
    </Routes>
  )
}