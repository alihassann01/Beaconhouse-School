"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingParticles() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <group ref={groupRef}>
            <Stars
                radius={120}
                depth={60}
                count={8000}
                factor={4}
                saturation={0}
                fade
                speed={0.5}
            />
            <Sparkles
                count={150}
                scale={15}
                size={3}
                speed={0.3}
                opacity={0.6}
                color="#FBBF24"
            />
        </group>
    );
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Canvas camera={{ position: [0, 0, 12], fov: 55 }}>
                <fog attach="fog" args={["#020617", 8, 35]} />
                <ambientLight intensity={0.4} />
                <FloatingParticles />
            </Canvas>
        </div>
    );
}
