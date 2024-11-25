import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Auth from './pages/auth/auth'
import Manager from './pages/manager/manager'
import Services from './pages/services/services'
import Appointments from './pages/appointments/appointments'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/appointments' element={<Appointments />} />
      <Route path='/services' element={<Services />} />
      <Route path='/manager' element={<Manager />} />
     <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
  
}

export default App
