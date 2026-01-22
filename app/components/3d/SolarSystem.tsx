"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls, Stars } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

interface PlanetProps {
    size: number;
    color: string;
    name: string;
    orbitRadius: number;
    speed: number;
}

function Planet({ size, color, name, orbitRadius, speed }: PlanetProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const textRef = useRef<THREE.Group>(null);
    const angle = useMemo(() => Math.random() * Math.PI * 2, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed + angle;
        const x = Math.cos(t) * orbitRadius;
        const z = Math.sin(t) * orbitRadius;

        if (meshRef.current) {
            meshRef.current.position.set(x, 0, z);
        }
        if (textRef.current) {
            textRef.current.position.set(x, size + 0.5, z);
            textRef.current.lookAt(state.camera.position);
        }
    });

    return (
        <>
            <mesh ref={meshRef}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} metalness={0.4} roughness={0.7} />
            </mesh>

            {/* Orbit Ring */}
            <mesh rotation-x={Math.PI / 2}>
                <ringGeometry args={[orbitRadius - 0.05, orbitRadius + 0.05, 64]} />
                <meshBasicMaterial color={color} opacity={0.1} transparent side={THREE.DoubleSide} />
            </mesh>

            <group ref={textRef}>
                <Suspense fallback={null}>
                    <Text fontSize={0.4} color="white" anchorX="center" anchorY="bottom">
                        {name}
                    </Text>
                </Suspense>
            </group>
        </>
    );
}

function Sun() {
    return (
        <group>
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial emissive="#FBBF24" emissiveIntensity={2} color="#FBBF24" />
                <pointLight intensity={10} distance={50} decay={2} color="#FBBF24" />
            </mesh>
            <Suspense fallback={null}>
                <Text position={[0, 2.5, 0]} fontSize={0.8} color="white">
                    STUDENT
                </Text>
            </Suspense>
        </group>
    );
}

export default function CurriculumSolarSystem() {
    return (
        <div className="w-full h-full bg-slate-950">
            <Suspense fallback={<div className="w-full h-full bg-slate-950" />}>
                <Canvas camera={{ position: [0, 15, 20], fov: 45 }} style={{ background: '#020617' }}>
                    <ambientLight intensity={0.1} />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />

                    <Sun />

                    <Planet name="Early Years" size={0.6} color="#4ADE80" orbitRadius={4} speed={0.4} />
                    <Planet name="Primary" size={0.8} color="#60A5FA" orbitRadius={6} speed={0.3} />
                    <Planet name="Secondary" size={1} color="#F472B6" orbitRadius={8} speed={0.25} />
                    <Planet name="O/A Levels" size={1.2} color="#A78BFA" orbitRadius={11} speed={0.2} />
                    <Planet name="IB Diploma" size={1.1} color="#FBBF24" orbitRadius={14} speed={0.15} />
                </Canvas>
            </Suspense>
        </div>
    );
}
