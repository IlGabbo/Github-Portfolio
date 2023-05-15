import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import School from './components/School/School'
import Social from './components/Social/Social'
import Skills from './components/Skills/Skills'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home my_name={"Gabbo"}/>
    <AboutMe/>
    <School/>
    <Skills/>
    <Social socials={["GitHub", "Discord", "Telegram"]} urls={["https://github.com/IlGabbo", "https://discordapp.com/users/424934230351544330", "t.me/@GabDevlp"] }/>
  </React.StrictMode>
)
