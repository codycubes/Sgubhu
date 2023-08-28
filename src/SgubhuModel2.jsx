import React, { useRef, useEffect } from "react";
import { useGLTF, PerspectiveCamera, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import { useSnapshot } from 'valtio'
import { state } from './store'
import { easing } from 'maath'

export function Sgubhu2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/iSghubhu2.glb");
  const { actions } = useAnimations(animations, group);

  const scroll = useScroll()


  useEffect(() => void (actions['CameraAction'].play().paused = true), [actions])
  useFrame((state, delta) => {
    const action = actions['CameraAction']
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = scroll.offset
    action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration ) * offset, 100, delta)
    // state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
    // state.camera.lookAt(0, 0, 0)
    // state.camera.fov = 13
    // state.camera.updateProjectionMatrix()
  })

  const snap = useSnapshot(state)
  useFrame((state, delta) => easing.dampC(materials.Body.color, snap.color, 0.25, delta))





  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model001"
          position={[0, 0.43, 0.76]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group
            name="4ea099d847b04312a2bc3e7014730604fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.03}
          >
            <group name="RootNode001">
              <group
                name="Box001"
                position={[-0.01, 0.05, -21.45]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.85}
              >
                <group name="Object_4" position={[2.63, -35.94, -0.05]} />
              </group>
            </group>
          </group>
        </group>
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={1000}
          near={0.1}
          fov={26.99}
          position={[-0.64, 0.35, 2.72]}
          rotation={[0.06, -0.09, 0.01]}
        />
        <group
          name="canpCylinder4_canblinn1_0"
          position={[0, 0, -2.6]}
          scale={0.04}
        >
          <mesh
            name="canpCylinder4_canblinn1_0_1"
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_1.geometry}
            material={materials.Body}
            material-color={snap.color}
          />
          <mesh
            name="canpCylinder4_canblinn1_0_2"
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_2.geometry}
            material={materials.InnerBody}
          />
          <mesh
            name="canpCylinder4_canblinn1_0_3"
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_3.geometry}
            material={materials.Holder}
          />
          <mesh
            name="canpCylinder4_canblinn1_0_4"
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_4.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            name="canpCylinder4_canblinn1_0_5"
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_5.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="canpCylinder4_canblinn1_0_6"
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_6.geometry}
            material={materials.Chromeknots}
          />
          <mesh
            name="canpCylinder4_canblinn1_0_7"
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_7.geometry}
            material={materials.woofer}
          />
          <mesh
            name="canpCylinder4_canblinn1_0_8"
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_8.geometry}
            material={materials.Ring}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/iSghubhu2.glb");