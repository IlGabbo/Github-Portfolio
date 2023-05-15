import { useEffect } from "react"
import BackroundParticles from "../functions/Particles"
import { splitString, writeMySpec } from "../functions/myspec"
import "./Home.css"


function Home({my_name}) {       
    useEffect(() => {
        writeMySpec("Bruh-Front-end")
    })
          
    return (        
        <div className="home-container" id="particles-js">        
            <BackroundParticles/>
            <div className="aqua-blur">                               
            </div>      
            <div className="home-content">
                    <h1>
                        <p className="hi">Hi, I'm</p>
                        <div className="my-name">
                            {splitString(my_name).map((char, key) => {
                                return <div key={key} className="myname-char">{char}</div>
                            })}
                        </div>
                    </h1>
                    <div className="my-work">
                        <span className="speciality"></span> Developer
                    </div>
                </div> 
        </div>
    )
    
}

export default Home
