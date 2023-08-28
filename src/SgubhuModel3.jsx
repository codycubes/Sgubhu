import React, { useRef, useEffect } from "react";
import { useGLTF, PerspectiveCamera, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import { useSnapshot } from 'valtio'
import { state } from './store'
import { easing } from 'maath'

export function Sgubhu3(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/iSghubhu3.glb");
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
          name="Sketchfab_model"
          position={[0, 0, -0.19]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.81}
        >
          <group
            name="84fde6a0b08b4b2ea19e24da2dea761cfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode">
              <group name="canpCylinder2" position={[0, 0.19, 0.23]} />
              <group name="canpCylinder4" />
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model002"
          position={[0, 0, -0.75]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5.55}
        >
          <group
            name="84fde6a0b08b4b2ea19e24da2dea761cfbx001"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode002">
              <group name="canpCylinder2001" position={[0, 0.19, 0.23]} />
              <group name="canpCylinder4001" />
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model003"
          position={[0.01, 0.38, 0.2]}
          rotation={[-Math.PI / 2, 0, 0.04]}
          scale={[0.53, 0.49, 0.52]}
        >
          <group
            name="4ea099d847b04312a2bc3e7014730604fbx001"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.03}
          >
            <group name="RootNode003">
              <group
                name="Box001001"
                position={[-0.01, 0.05, 2.66]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <group name="Object_4001" position={[2.63, -35.94, -0.05]}>
                  <group
                    name="Box001_Red_0"
                    position={[-2.76, 34.76, 0.21]}
                    scale={[1.03, 1.03, 1.04]}
                  >
                    <mesh
                      name="Box001_Red_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.Box001_Red_0_1.geometry}
                      material={materials["Ring.001"]}
                      material-color={snap.inner}
                    />
                    <mesh
                      name="Box001_Red_0_2"
                      castShadow
                      receiveShadow
                      geometry={nodes.Box001_Red_0_2.geometry}
                      material={materials.Knots}
                    />
                    <mesh
                      name="Box001_Red_0_3"
                      castShadow
                      receiveShadow
                      geometry={nodes.Box001_Red_0_3.geometry}
                      material={materials.Rubber}
                    />
                    <mesh
                      name="Box001_Red_0_4"
                      castShadow
                      receiveShadow
                      geometry={nodes.Box001_Red_0_4.geometry}
                      material={materials.Woof}
                      // material-color={snap.woofer}
                    />
                    <mesh
                      name="Box001_Red_0_5"
                      castShadow
                      receiveShadow
                      geometry={nodes.Box001_Red_0_5.geometry}
                      material={materials.Text}
                    />
                    <mesh
                      name="Box001_Red_0_6"
                      castShadow
                      receiveShadow
                      geometry={nodes.Box001_Red_0_6.geometry}
                      material={materials.Lid}
                    />
                    <mesh
                      name="Box001_Red_0_7"
                      castShadow
                      receiveShadow
                      geometry={nodes.Box001_Red_0_7.geometry}
                      material={materials.Body}
                      material-color={snap.color}
                    />
                    <mesh
                      name="Box001_Red_0_8"
                      castShadow
                      receiveShadow
                      geometry={nodes.Box001_Red_0_8.geometry}
                      material={materials.InnerBody}
                      material-color={snap.inner}
                    />
                    <mesh
                      name="Box001_Red_0_9"
                      castShadow
                      receiveShadow
                      geometry={nodes.Box001_Red_0_9.geometry}
                      material={materials.InnerBody}
                    />
                    <mesh
                      name="Box001_Red_0_10"
                      castShadow
                      receiveShadow
                      geometry={nodes.Box001_Red_0_10.geometry}
                      material={materials.InnerBody}
                    />
                  </group>
                </group>
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
      </group>
    </group>
  );
}

useGLTF.preload("/iSghubhu3.glb");
