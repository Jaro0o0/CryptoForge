"use client";

import { Canvas } from "@react-three/fiber";
import ETH from "./ETH";
import { DEFAULT_ETH_CAMERA } from "./constants";

export default function ETHCanvas({ camera = DEFAULT_ETH_CAMERA, className, style }) {
  return (
    <div className={className} style={style}>
      <Canvas camera={camera} style={{ width: "100%", height: "100%" }}>
        <ETH />
      </Canvas>
    </div>
  );
}
