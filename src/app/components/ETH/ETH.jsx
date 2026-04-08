"use client" 

import { OrbitControls } from "@react-three/drei";
import { Logo } from "../Logo/Ethereum_logo";
function ETH() {
    return ( 
        <>
        
        <OrbitControls/>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />
        <Logo />
         </>
     );
}

export default ETH;