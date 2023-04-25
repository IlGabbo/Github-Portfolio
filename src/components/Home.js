import {loadFull} from "tsparticles"
import { useCallback } from "react"
import Particles from "react-tsparticles"


function Home({my_name}) {
    const splitString = (string) => {
        let arr = []
        for (let i = 0; i < my_name.length; i++) {
            arr.push(string.charAt(i))
        }
        return arr
    }    

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
          
    return (        
        <div className="home-container" id="particles-js">
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: .5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "image",
                        image: [
                            {src: "https://lh3.googleusercontent.com/a-/ACB-R5SOtPAshEG385w36P7e_T1Pc2vmQ4tSIw_s_S8o=s75-c"},
                            {src: "https://lh3.googleusercontent.com/a-/ACB-R5SsUEs7CytEikrCG6x5R7DTXNAZS_kv6RNVR_I=s75-c"},
                            {src: "https://lh3.googleusercontent.com/a-/ACB-R5TlChM9bSCuCKd5jUH9kW6MgDyQIgE_EdC1gkI=s75-c"},
                            {src: "css-3.png"},
                        ]
                        
                    },
                    size: {
                        value: { min: 13, max: 20 },
                    },
                },
                detectRetina: true,
            }}
        />
            <div className="aqua-blur">                               
            </div>      
            <div className="home-content">
                    <h1>
                        <p>Hi, I'm</p>
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function writeMySpec(dev) {
    let work = document.querySelector(".speciality")
    let phrase = ""

    for (let i = 0; i < dev.length; i++) {
        await sleep(150)
        phrase += dev[i]        
        work.textContent = phrase
    }

    await sleep(2000)

    for (let i = dev.length; i >= 0; i--) {
        await sleep(150)
        phrase = phrase.slice(0, -1)
        work.textContent = phrase        
    }
    
    if (dev == "Front-end") {
        writeMySpec("Software")
    } else {
        writeMySpec("Front-end")
    }
}

setTimeout(() => {writeMySpec("Front-end")}, 100)