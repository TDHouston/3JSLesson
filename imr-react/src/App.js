import { createRoot } from 'react-dom/client'
import { Canvas, } from '@react-three/fiber'
import { BoxGeometry } from 'three';


function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)

export default App;