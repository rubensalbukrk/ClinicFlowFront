import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Auth from './pages/auth/auth'
import Manager from './pages/manager/manager'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/manager' element={<Manager />} />
    </Routes>
  )
  
}

export default App
