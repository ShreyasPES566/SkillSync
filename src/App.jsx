import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/login/Login'
function App() {
  

  return (
    <>
      App
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
