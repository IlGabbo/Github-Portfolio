import * as THREE from "three"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"


function Social({socials}) {

    const three = (element) => {   
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(element.offsetWidth, element.offsetHeight)
        element.appendChild(renderer.domElement)

        /* const geometry = new THREE.BoxGeometry(1,1,1)
        const material = new THREE.MeshBasicMaterial({color: 0xfff00f})
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube) */
        const loader = new GLTFLoader()
        loader.load("model/adamHead.gltf", (gltf) => {
            scene.add(gltf.scene)
        }, undefined, err => {
            console.error("Error:", err)
        })

        camera.position.z = 20
        // camera.position.y = 1

        function animate() {
            requestAnimationFrame(animate)
            /* cube.rotation.x += 0.05
            cube.rotation.y += 0.05 */
            renderer.render(scene, camera)
        }
        animate()
    }


    return (
        <div className="social-container">
            <div className="social-centered">
                <div className="introduction">
                    <p>GET IN TOUCH</p>
                    <h1>SOCIAL</h1>
                </div>  
                <div className="social">
                    <div className="social-box">
                        <div className="social-icon github"></div>
                        <div className="social-name">{socials[0]}</div>
                    </div>
                    <div className="social-box">
                        <div className="social-icon discord"></div>
                        <div className="social-name">{socials[1]}</div>
                    </div>
                    <div className="social-box">
                        <div className="social-icon telegram"></div>
                        <div className="social-name">{socials[2]}</div>
                    </div>
                </div>       
                <div className="where-i-am-cnt" onClick={(e) => {three(e.currentTarget)}}></div>
            </div>
        </div>
    )
}

export default Social
