
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  
`;

// Star component that creates a rotating group of points (stars)
const Star = (props) => {
  const ref = useRef();

  // Increase the number of points and adjust their positions
  const [sphere] = useState(() => {
    const points = new Float32Array(5000); // 5000 points
    for (let i = 0; i < points.length; i += 3) {
      points[i] = Math.random() * 5 - 1;   // X position
      points[i + 1] = Math.random() * 5 - 1; // Y position
      points[i + 2] = Math.random() * 5- 1; // Z position
    }
    return points;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 1;
      ref.current.rotation.y -= delta / 1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="white" 
          size={0.015}    // Increase size for better visibility
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Main canvas for rendering stars
const StyledStarsCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 3] }}> {/* Moved stars closer to the camera */}
        <Suspense fallback={null}>
          <Star />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;
