import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './assets/Components/Home'
import Navbar from './assets/Components/Navbar'
import Login from './assets/Components/Login'
import Signup from './assets/Components/Signup'
import Userdata from './assets/Components/Userdata'

function App() {
  return (
     <>

     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Userdata' element={<Userdata/>}/>
        
      </Routes>
     </BrowserRouter>
    
    
     </>
  )
}

export default App