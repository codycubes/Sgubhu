import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import { state } from './store'
import { easing } from 'maath'

export function Sgubhu(props) {
  const { nodes, materials } = useGLTF("/iSghubhu.glb");
  const ref = useRef()

  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime()
  //   ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8)
  //   ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7
  // })


  const snap = useSnapshot(state)
  useFrame((state, delta) => easing.dampC(materials.Body.color, snap.color, 0.25, delta))


  return (
    <group ref={ref} {...props} dispose={null}>
      <group
        position={[0, 0, -2.6]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={3.81}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_1.geometry}
            material={materials.Body}
            material-color={snap.color}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_2.geometry}
            material={materials.InnerBody}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_3.geometry}
            material={materials.Holder}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_4.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_5.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_6.geometry}
            material={materials.Chromeknots}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_7.geometry}
            material={materials.woofer}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.canpCylinder4_canblinn1_0_8.geometry}
            material={materials.Ring}
          />
        </group>
      </group>
      <group position={[0, 0.43, 0.76]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
          <group
            position={[-0.01, 0.05, -21.45]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.85}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/iSghubhu.glb");



