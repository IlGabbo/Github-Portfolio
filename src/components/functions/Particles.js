import Particles from "react-tsparticles"
import {loadFull} from "tsparticles"
import { useCallback } from "react"


export default function BackroundParticles() {
    const particlesInit = useCallback(async engine => {        
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async container => {
        await console.log(container)
    }, [])
    return (
        <Particles
            id="particlescnt"
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
                        speed: .2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 24,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "image",
                        images: [
                            {src: require("../../static/img/particles/python.png")},
                            {src: require("../../static/img/particles/html-5.png")},
                            {src: require("../../static/img/particles/css-3.png")},
                            {src: require("../../static/img/particles/js.png")},
                            {src: require("../../static/img/particles/nodejs.png")},
                            {src: require("../../static/img/particles/reactjs.png")},
                            {src: require("../../static/img/particles/electron.png")}
                        ]                        
                    },
                    size: {
                        value: { min: 12, max: 20 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}