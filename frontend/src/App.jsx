import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Components/Users'
import Create from './Components/Create'
import Update from './Components/Update'
import React from 'react'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
