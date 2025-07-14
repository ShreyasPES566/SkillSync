import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Profile from './pages/profile/Profile'
import Landing from './pages/landing/Landing'
import About from './pages/about/About'
import Help1 from './pages/help/Help1'
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/landing' element={<Landing />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/help' element={<Help1 />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
