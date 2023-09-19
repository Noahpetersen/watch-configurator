import React from 'react'
import { PresentationControls, Environment, useGLTF, ContactShadows } from '@react-three/drei'
import Watch from './Watch.jsx'

const Experience = () => {
  
  const watch = useGLTF('/models/watch.glb')

  return (
    <>
    <PresentationControls
      global
      config={{ mass: 1, tension: 250, friction: 25 }}
      snap={{ mass: 2, tension: 250, friction: 50 }}
      zoom={1}
      rotation={[0, -0.25, 0]}
      polar={[-Math.PI / 5, Math.PI / 4]}
      azimuth={[-Math.PI / 3, Math.PI / 4]}
      fov={40}
      >
      <Watch rotation-x={Math.PI * 0.5} scale={0.6} position={[ 0, 0, -1]} blur={1}/>
      {/* <group>
        <primitive object={watch.scene} rotation-x={Math.PI * 0.5} scale={0.6} position={[ 0, 0, -1]} blur={1}></primitive>
      </group> */}
    </PresentationControls>
    <Environment files="/hdr/adams_place_bridge_4k.hdr" blur={ 1 }/>
    <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2} far={2} />
     
    </>
      
    
  )
}

export default Experience