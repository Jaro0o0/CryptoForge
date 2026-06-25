"use client"

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import { ETH_MODEL_PATH } from "./constants";

useGLTF.preload(ETH_MODEL_PATH);

function ETH() {
    const logoRef = useRef();
    const { nodes, materials } = useGLTF(ETH_MODEL_PATH);

    useFrame((state, delta) => {
        if (logoRef.current) {
            logoRef.current.rotation.y += delta * 0.5;
        }
    });

    return ( 
        <>
            <ambientLight intensity={2} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            
            <Center>
                <group ref={logoRef} scale={3.6}>
                    <group name="Sketchfab_Scene">
                        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.107}>
                            <group name="161ee2e266e94c7791940d78a5a83d04fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                                <group name="Object_2">
                                    <group name="RootNode">
                                        <group name="eth" rotation={[-Math.PI, -1.556, -Math.PI]} scale={[1, 1, 1.145]}>
                                            <group name="Pyramid_3" position={[0.217, 73.807, 0.929]} rotation={[0, Math.PI / 4, 0]}>
                                                <mesh name="Pyramid_3_lambert3_0" geometry={nodes.Pyramid_3_lambert3_0.geometry} material={materials.lambert3} />
                                                <mesh name="Pyramid_3_lambert4_0" geometry={nodes.Pyramid_3_lambert4_0.geometry} material={materials.lambert4} />
                                                <mesh name="Pyramid_3_lambert2_0" geometry={nodes.Pyramid_3_lambert2_0.geometry} material={materials.lambert2} />
                                            </group>
                                            <group name="Pyramid_1" position={[-0.108, -36.302, 32.916]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                                                <group name="transform1" />
                                            </group>
                                            <group name="Pyramid_2" position={[-0.108, -36.302, -33.845]} rotation={[-Math.PI / 2, 0, 0]}>
                                                <group name="transform2" />
                                            </group>
                                        </group>
                                        <group name="Pyramid">
                                            <mesh name="Pyramid_Default_Material_0" geometry={nodes.Pyramid_Default_Material_0.geometry} material={materials.Default_Material} />
                                            <mesh name="Pyramid_lambert4_0" geometry={nodes.Pyramid_lambert4_0.geometry} material={materials.lambert4} />
                                            <mesh name="Pyramid_lambert3_0" geometry={nodes.Pyramid_lambert3_0.geometry} material={materials.lambert3} />
                                        </group>
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </Center>
        </>
    );
}

export default ETH;

