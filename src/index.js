import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import School from './components/School/School'
import Social from './components/Social/Social'
import Skills from './components/Skills/Skills'
import './index.css'


const fetchData = async () => {
  try {
    const response = await fetch("static/data/json.json")
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

(async () => {
  try {
    const json = await fetchData()
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(  
      <React.StrictMode>
        <Home my_name={"IlGabbo"}/>
        <AboutMe/>
        <School titles={json.school}/>
        <Skills skills={json.skills.languages}/>
        <Social socials={["GitHub", "Discord", "Telegram"]} urls={["https://github.com/IlGabbo", "https://discordapp.com/users/424934230351544330", "https://t.me/@GabDevlp"] }/>
      </React.StrictMode>
    )
  } catch (error) {
    console.error(error)
  }
})()
