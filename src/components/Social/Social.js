import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"
import { useEffect } from "react"
import { Canvas, useLoader } from "react-three-fiber"
import { OrbitControls } from "@react-three/drei"
import { Sphere } from "@react-three/drei"
import "./Social.css"
import "./SocialQueries.css"
import { TextureLoader } from "three"


function Social({socials, urls}) {
    const [titleRef, titleInView] = useInView()
    const [socialRef, socialInView] = useInView()
    const titleControl = useAnimation()
    const socialControl = useAnimation()
    const titleVars = {
        visible: {x: 0, opacity: 1, transition: {duration: .6}},
        hidden: {x: -60, opacity: 0}
    }
    const socialVars = {
        visible: {x: 0, opacity: 1, transition: {duration: .4}},
        hidden: {x: -60, opacity: 0}
    }

    useEffect(() => {
        if (titleInView) {
            titleControl.start("visible")
        } else {
            titleControl.start("hidden")
        }        
    }, [titleControl, titleInView])

    useEffect(() => {
        if (socialInView) {
            socialControl.start("visible")
        } else {
            socialControl.start("hidden")
        }        
    }, [socialControl, socialInView])

    return (
        <div className="social-container">
            <div className="social-centered">
                <motion.div className="introduction" ref={titleRef} animate={titleControl} initial="hidden" variants={titleVars}>
                    <p>GET IN TOUCH</p>
                    <h1>SOCIAL</h1>
                </motion.div>  
                <motion.div className="social" ref={socialRef} animate={socialControl} initial="hidden" variants={socialVars}>
                    {socials.map((value, key) => (
                        <div key={key} className="social-box" onClick={() => {window.open(urls[key])}}>
                            <div className={"social-icon " + value}></div>
                            <div className="social-name">{value}</div>
                        </div>
                    ))}
                </motion.div>
                <div className="globo">
                    <Canvas>
                        <OrbitControls enableZoom={false} rotateSpeed={.3}/>
                        <ambientLight intensity={0.5}></ambientLight>
                        <spotLight position={[10, 15, 10]} angle={0.3} />
                        <Globo />
                    </Canvas>
                </div>
            </div>
        </div>
    )
}

function Globo() {
    const texture = useLoader(TextureLoader, "/static/img/texture/pxfuel.jpg")
    return (        
        <Sphere scale={3}>            
            <meshStandardMaterial map={texture} />
        </Sphere>
    )
}

export default Social
