import React from "react"
import {Canvas} from "react-three-fiber"

function Earth() {
    return (
        <div className="earth-cnt">
            <Canvas>
                <mesh>
                    <boxBufferGeometry attach="geometry" args={[1,1,1]}></boxBufferGeometry>
                    <meshBasicMaterial attach="material" color={"white"}/>
                </mesh>
            </Canvas>
        </div>
    )
}

export default Earth