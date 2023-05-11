import { useState, useEffect } from "react"


const titles = {
    tpsi: {
        titles: 
        [ 
            "ChuckNorrisAPI",
            "Color Picker",
            "Compito 17 Dicembre",
            "DecimaleBinario",
            "Es da beginners",
            "Fiorellino animato",
            "Fiorellino funzionato",
            "Json",
            "Moto uniformemente accelerato",
            "RandomCircles",
            "Sinusoide",
            "Tris" 
        ],
        link: 
        [
            "https://ilgabbo.github.io/redirect/Scuola/TPSI/",
        ],
        preview: [
            "chucknorris",
            "colorpicker",
            "compito17dic",
            "decimalebinario",
            "beginneres",
            "fioreanimato",
            "fiorefunctions",
            "json",
            "motouniaccelerato",
            "randomcircles",
            "sinusoide",
            "tris"
        ]
    },
    computing:{
    titles: [
        "AreaRettangolo",
        "Bank",
        "Calculator",
        "ContoCorrente",
        "Esercitazione-2",
        "Garage",
        "McDonald",
        "NumeriAlternati",
        "Officina",
        "Overloading",
        "Overriding",
        "Persone",
        "StudioDentistico",
        "Vehicles"
    ],
    link: [
        "https://github.com/IlGabbo/ilgabbo.github.io/tree/main/redirect/Scuola/Informatica/"
    ]
    }
}

function School() {
    const scroll = (e) => {
        let element = e.currentTarget
        element.classList.add("exercise-box_scrolling")
        element.addEventListener("animationend", () => {element.classList.remove("exercise-box_scrolling")})
    }
    const [tpsiIndex, setTpsiIndex] = useState(0)
    const [computingIndex, setComputingIndex] = useState(0)

    return (
        <div className="school-container">
            <div className="school-centered">
                <div className="introduction">
                    <p>ABOUT</p>
                    <h1>SCHOOL</h1>
                </div>
                <div className="subjects-container">
                    <div className="tpsi">
                        <h1>TPSI</h1>
                        <div className="exercise-box" draggable="true" onDragStart={(e) => {
                                scroll(e)
                                setTpsiIndex(tpsiIndex+1)
                                if (tpsiIndex > titles.tpsi.titles.length-2) {                                    
                                    setTpsiIndex(0)
                                }                       
                                document.querySelector(".tpsi .exercise-box .link-preview").classList.add(titles.tpsi.preview)
                            }} onClick={() => {window.open(titles.tpsi.link+titles.tpsi.titles[tpsiIndex])}}>
                            <div>
                                <div className={"link-preview" + " " + titles.tpsi.preview[tpsiIndex]}></div>
                                <div className="name">{titles.tpsi.titles[tpsiIndex]}</div>
                            </div>
                        </div>
                        <div className="ex-2">
                            <div>
                                <div className={"link-preview" + " " + titles.tpsi.preview[tpsiIndex]}></div>
                                <div className="name">{titles.tpsi.titles[tpsiIndex+1]}</div>
                            </div>
                        </div>
                    </div>
                    <div className="computing">
                        <h1>COMPUTING</h1>
                        <div className="exercise-box" draggable="true" onDragStart={(e) => {
                            scroll(e)
                            setComputingIndex(computingIndex+1)
                            if (computingIndex > titles.computing.titles.length-2) {                                    
                                setComputingIndex(0)
                            }   
                        }} onClick={() => {window.open(titles.computing.link+titles.computing.titles[computingIndex])}}>
                            <div>
                                <div className="link-preview"></div>
                                <div className="name">{titles.computing.titles[computingIndex]}</div>
                            </div>
                        </div>
                        <div className="ex-2">
                            <div>
                                <div className="link-preview"></div>
                                <div className="name">{titles.computing.titles[computingIndex+1]}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default School