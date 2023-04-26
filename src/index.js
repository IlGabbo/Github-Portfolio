import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import AboutMe from './components/AboutMe'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home my_name={"Gabbo"}/>
    <AboutMe/>
  </React.StrictMode>
)
