import { PerspectiveCamera, Scroll } from "@react-three/drei";
import React from "react";
import { useSnapshot } from 'valtio'
import { state } from './store'
import { OrbitControls } from "@react-three/drei";

export const Customize = ({onClick}) => {
   

    
    return(
        <>
        {/* <PerspectiveCamera  position={[-0.64, 0.35, 2.72]}
          rotation={[0.06, -0.09, 0.01]} /> */}
        <Scroll html>
        
            <div className="buttContainer">
            <Customizer />
                <button className="exitButt" onClick={onClick}>Exit </button>
            </div>
        
        </Scroll>
            <OrbitControls />
        </>
    )
}


export function Customizer() {
    const snap = useSnapshot(state)

    return (
        <>
       {/* <div className="customizer"> */}
    
     

        <div className="color-options"> 
        <h1 className="materialBody">Body</h1>  
          {snap.colors.map((color) => (
            <div key={color} className={`circle`}  style={{ background: color }}  onClick={() => (state.color = color)}>      
            </div>
          ))}
        </div>


        <div className="color-options"> 
        <h1 className="materialBody">Inner Body</h1>  
          {snap.Inner.map((inner) => (
            <div key={inner} className={`circle`}  style={{ background: inner }}  onClick={() => (state.inner = inner)}>      
            </div>
          ))}
        </div>

{/* 
        <div className="color-options"> 
        <h1 className="materialBody">Woofer</h1>  
          {snap.Woofer.map((woofer) => (
            <div key={woofer} className={`circle`}  style={{ background: woofer }}  onClick={() => (state.woofer = woofer)}>      
            </div>
          ))}
        </div> */}
    
      
      {/* </div>   */}
    </>
    )
}