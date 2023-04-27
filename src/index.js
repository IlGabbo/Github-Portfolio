import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import School from './components/School'
import Social from './components/Social'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home my_name={"Gabbo"}/>
    <AboutMe/>
    <School/>
    <Social/>
  </React.StrictMode>
)
