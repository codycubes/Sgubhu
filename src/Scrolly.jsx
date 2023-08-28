import React, {useState, Suspense} from "react";
import { Canvas } from '@react-three/fiber'
// import { Sgubhu } from './SgubhuModel'
// import { Sgubhu2 } from "./SgubhuModel2";
import { Sgubhu3 } from "./SgubhuModel3";
import { Environment, ContactShadows, OrbitControls, ScrollControls, Html, useProgress, MeshReflectorMaterial, Instances,
  Instance, Float } from '@react-three/drei'
import { Overlay } from './Overlay'
import { Customize, Customizer } from "./Customize"; 
import AudioVisualizer from "./AudioViz";

export const Scrolly = ({spheres}) => {

    const [numPages, setNumPages] = useState(3);

    const [showOverlay, setOverlay] = useState(true);
    const [showCustomize, setCustomize] = useState(false);
  
    const handleCustomize = () => {
        setOverlay(false);
        setCustomize(true);
        setNumPages(1)
    };

    const handleOverlay = () => {
        setOverlay(true);
        setCustomize(false);
        setNumPages(3)
    };


    return(
        <>
    
        <Canvas shadows 
        // camera={{ position: [0, 0, 4], fov: 40 }}
        >
            <Suspense fallback={<Loader />}>
            <color attach="background" args={['#FFFFF']} />

            <ambientLight intensity={0.5} />
            <spotLight intensity={5} angle={0.1} penumbra={1} position={[0, 3, 0]} castShadow />
            <Environment files="/potsdamer_platz_4k.hdr" />

            <ScrollControls pages={numPages}>
              
            <Sgubhu3 />

            <ContactShadows resolution={1024} position={[0, 0, 0]} opacity={1} scale={10} blur={1} far={0.8} />

           

            {showOverlay && <Overlay onClick={handleCustomize} />}
            {showCustomize && <Customize onClick={handleOverlay} /> }

            </ScrollControls>

            {/* <Instances renderOrder={-1000}>
              <sphereGeometry args={[0.1, 64, 64]} />
              <meshBasicMaterial depthTest={false} />
              {spheres.map(([scale, color, speed, position], index) => (
                <Sphere key={index} scale={scale} color={color} speed={speed} position={position} />
          ))}
        </Instances> */}
          
            {/* <Float>
            <AudioVisualizer audioSrc="/WL4OM.mp3" />
            </Float> */}
          
            {/* <OrbitControls /> */}

            </Suspense>
        </Canvas>
            
        </>
    )
}


function Loader() {
  const { progress } = useProgress();
  const roundedProgress = Math.floor(progress);

  return (
    <Html center className="Loader" style={{ color: 'white' }}>
      Loading... <br />
      {roundedProgress} % done
    </Html>
  );
}


// function Sphere({ position, scale = 1, speed = 0.1, color = 'white' }) {
//   return (
//     <Float rotationIntensity={40} floatIntensity={20} speed={speed / 2}>
//       <Instance position={position} scale={scale} color={color} />
//     </Float>
//   )
// }