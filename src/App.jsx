import { Canvas } from "@react-three/fiber"
import Experience from "./canvas/Experience.jsx"
import './index.css'
import state from './store/index.js'
import { useSnapshot } from 'valtio'
import Intro from "./pages/Intro.jsx"
import Configurator from "./pages/Configurator.jsx"



function App() {
  const snap = useSnapshot(state)

  return (
    <div className="app">
      
      <Canvas shadows>
        <color attach='background' args={['#C5C4B8']} />
        <Experience/>
      </Canvas>
      {snap.intro && <Intro/>}
      {!snap.intro && <Configurator/>}
    </div>
  )
}

export default App
