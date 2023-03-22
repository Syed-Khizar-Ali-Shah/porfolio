import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Mac from "./Mac";

const WebDesign = () => {
  return (
    <>
      <Canvas  size={[`2000px`,`3000px`]} style={{width: `100%`, height: `auto`, position: `relative` }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Mac />
          </Stage>
          <OrbitControls enableZoom={false} scale={10}/>
        </Suspense>
      </Canvas>
    </>
  );
};

export default WebDesign;
