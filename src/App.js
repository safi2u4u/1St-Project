
import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import About from './compo/About'
import Home from './compo/Home'
import Contact from './compo/Contact'
import Navbar from './compo/Navbar'
import Pricing from './compo/Pricing'
import Notfound from './compo/Notfound'
import JsonUser from './compo/JsonUser'
import Hooks from './compo/Hooks'
import Form from './compo/Form'
import ReactForm from './compo/ReactForm'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Pricing' element={<Pricing/>}/>
      <Route path='*' element={<Notfound/>}/>
      <Route path='/JsonUser' element={<JsonUser/>}/>
      <Route path='/hooks' element={<Hooks/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/ReactForm' element={<ReactForm/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
