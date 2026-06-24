"use client" 

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { Logo } from "../Logo/Ethereum_logo";

function ETH() {
    const logoRef = useRef();

    // Animation: Rotate the logo
    useFrame((state, delta) => {
        if (logoRef.current) {
            logoRef.current.rotation.y += delta * 0.5; // Adjust speed as needed
        }
    });

    return ( 
        <>
            <ambientLight intensity={2} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            
            <Center>
                <group ref={logoRef} scale={3.6}>
                    <Logo />
                </group>
            </Center>
        </>
    );
}

export default ETH;