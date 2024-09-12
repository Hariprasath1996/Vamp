import React from 'react'
import Home from './Component/Home/Home'
import Service from './Component/Services/Service'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Slides from './Component/Slides-images/Slides'
import {slide} from './Constant/data.json'
const App = () => {
  return (
    <BrowserRouter >
    <Home />
    <Slides items={slide}/> 
      <Routes>
        <Route path="/Service" element={ <Service />}></Route>
      </Routes>
      {/* here data is props name */}
      
    </BrowserRouter>
  )
}
export default App
