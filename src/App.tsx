import { useContext, useState } from 'react'
import './App.css'
import StoreProvider, { Store } from './state/StoreProvider'
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {RootState }from './state/store'
import AboutMe from './pages/about_me/AboutMe'
import Blog from './pages/blog/Blog'
import BlogForm from './pages/blog_form/BlogForm'
import Knowledge from './pages/knowledge/Knowledge'
import Portafolio from './pages/portafolio/Portafolio'

function App() {
  const portafolio = useSelector(
    (state: RootState) => state.portafolio.value   
  );
  portafolio.map(entry=>console.log(entry.description))

  const {state} = useContext(Store)
 
  return (
      <BrowserRouter>
        <nav className='navbar'>
          <Link to="/">About me</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/knowledge">Knowledge</Link>
          <Link to="/portafolio">Portafolio</Link>
        </nav>
        <Routes>
            <Route path="/" element={<AboutMe />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/portafolio" element={<Portafolio portafolio={portafolio} />} />
           </Routes>      
        <footer className='footer'>This is my footer</footer>
      </BrowserRouter>
  )
}

export default App
