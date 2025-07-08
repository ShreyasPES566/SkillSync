import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Profile from './pages/profile/Profile'
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
