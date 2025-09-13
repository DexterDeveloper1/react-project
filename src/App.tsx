import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Inventory from './pages/Inventory'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import DashboardLayout from './layouts/DashbaordLayout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<DashboardLayout />}>
        <Route index element={<Navigate to="/inventory" replace />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="Reports" element={<Reports />} />
        <Route path="Settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
