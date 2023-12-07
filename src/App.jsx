import React from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Home from './components/Home/Home'
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import BlogDetails from './components/Home/BlogDetails'
import Service from './components/Servi/Service'
const App = () => {
  return (
    <BrowserRouter>
    <React.Fragment>
      <Header />
      <Routes>
       <Route path='/' element={<Navigate to='/home' />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={< About />}/>
      <Route path='/blogged/:id' element={<BlogDetails />}/>
      <Route path='/service' element={<Service />}/>
      </Routes>
    </React.Fragment>
    </BrowserRouter>
  )
}
  
export default App