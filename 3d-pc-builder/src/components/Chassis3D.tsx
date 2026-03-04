import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, MeshDistortMaterial, Float, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

function PCModel() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.y += 0.005
  })

  return (
    <group>
      {/* Main Case Chassis */}
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 3, 1]} />
        <meshStandardMaterial color="#1a1a1a" transparent opacity={0.8} />
        
        {/* Wireframe effect */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(2, 3, 1)]} />
          <lineBasicMaterial color="#00aaff" linewidth={2} />
        </lineSegments>

        {/* Glow inner */}
        <mesh position={[0, 0, 0]} scale={0.9}>
          <boxGeometry args={[2, 3, 1]} />
          <meshStandardMaterial color="#00aaff" emissive="#00aaff" emissiveIntensity={0.5} transparent opacity={0.2} />
        </mesh>
      </mesh>

      {/* Internal Components Placeholders */}
      <mesh position={[0, 0.5, 0.1]}>
        <boxGeometry args={[1.5, 1.2, 0.2]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[1.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </group>
  )
}

export default function Chassis3D() {
  // Some environments (headless, VMs, restrictive GPUs/browsers) cannot create a WebGL context.
  // Fail gracefully so the rest of the app remains usable.
  const webglSupported = (() => {
    try {
      const canvas = document.createElement('canvas')
      return !!(
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl') ||
        canvas.getContext('webgl2')
      )
    } catch {
      return false
    }
  })()

  if (!webglSupported) {
    return (
      <div className="w-full h-full min-h-[400px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-lg font-semibold text-white">WebGL is not available</div>
          <div className="mt-2 text-sm text-white/70">
            Your browser/device can't create a WebGL context, so the 3D preview is disabled.
            You can still build and export the configuration.
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas shadows gl={{ antialias: true, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: false }}>
        <PerspectiveCamera makeDefault position={[5, 3, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00aaff" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <PCModel />
        </Float>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <gridHelper args={[10, 10, '#333', '#222']} position={[0, -2, 0]} />
      </Canvas>
    </div>
  )
}
