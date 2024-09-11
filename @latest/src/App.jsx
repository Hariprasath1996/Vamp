import React from 'react'
import Home from './Component/Home/Home'
import Service from './Component/Services/Service'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path="/Service" element={ <Service />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
