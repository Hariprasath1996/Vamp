import React from 'react'
import Home from "./Component/Home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={ <Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
