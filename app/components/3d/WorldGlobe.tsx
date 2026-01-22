"use client";

import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import { useRef, useState, Suspense, useMemo } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

// World countries with accurate coordinates
const worldCountries = [
    { name: "United States", lat: 39.8, lng: -98.5, major: true },
    { name: "Canada", lat: 60.0, lng: -110.0, major: true },
    { name: "Mexico", lat: 23.6, lng: -102.5, major: false },
    { name: "Brazil", lat: -14.2, lng: -51.9, major: true },
    { name: "Argentina", lat: -38.4, lng: -63.6, major: false },
    { name: "United Kingdom", lat: 54.0, lng: -2.0, major: false },
    { name: "France", lat: 46.2, lng: 2.2, major: false },
    { name: "Germany", lat: 51.2, lng: 10.5, major: false },
    { name: "Italy", lat: 42.5, lng: 12.6, major: false },
    { name: "Spain", lat: 40.5, lng: -3.7, major: false },
    { name: "Poland", lat: 51.9, lng: 19.1, major: false },
    { name: "Ukraine", lat: 48.4, lng: 31.2, major: false },
    { name: "Sweden", lat: 62.0, lng: 15.0, major: false },
    { name: "Norway", lat: 64.0, lng: 10.0, major: false },
    { name: "Finland", lat: 64.0, lng: 26.0, major: false },
    { name: "Turkey", lat: 39.0, lng: 35.0, major: false },
    { name: "Russia", lat: 62.0, lng: 100.0, major: true },
    { name: "China", lat: 35.0, lng: 105.0, major: true },
    { name: "Japan", lat: 36.0, lng: 138.0, major: false },
    { name: "South Korea", lat: 36.0, lng: 128.0, major: false },
    { name: "India", lat: 22.0, lng: 78.0, major: true },
    { name: "Pakistan", lat: 30.0, lng: 70.0, major: false },
    { name: "Indonesia", lat: -2.0, lng: 118.0, major: false },
    { name: "Thailand", lat: 15.0, lng: 101.0, major: false },
    { name: "Vietnam", lat: 16.0, lng: 108.0, major: false },
    { name: "Philippines", lat: 12.0, lng: 122.0, major: false },
    { name: "Malaysia", lat: 4.0, lng: 109.0, major: false },
    { name: "Bangladesh", lat: 24.0, lng: 90.0, major: false },
    { name: "Kazakhstan", lat: 48.0, lng: 68.0, major: false },
    { name: "Iran", lat: 32.0, lng: 53.0, major: false },
    { name: "Iraq", lat: 33.0, lng: 44.0, major: false },
    { name: "Saudi Arabia", lat: 24.0, lng: 45.0, major: false },
    { name: "UAE", lat: 24.0, lng: 54.0, major: false },
    { name: "Egypt", lat: 27.0, lng: 30.0, major: false },
    { name: "South Africa", lat: -30.0, lng: 25.0, major: false },
    { name: "Nigeria", lat: 10.0, lng: 8.0, major: false },
    { name: "Kenya", lat: 1.0, lng: 38.0, major: false },
    { name: "Ethiopia", lat: 9.0, lng: 40.0, major: false },
    { name: "Morocco", lat: 32.0, lng: -6.0, major: false },
    { name: "Algeria", lat: 28.0, lng: 2.0, major: false },
    { name: "Libya", lat: 27.0, lng: 17.0, major: false },
    { name: "Sudan", lat: 16.0, lng: 30.0, major: false },
    { name: "Australia", lat: -25.0, lng: 135.0, major: true },
    { name: "New Zealand", lat: -42.0, lng: 174.0, major: false },
    { name: "Mongolia", lat: 46.0, lng: 105.0, major: false },
    { name: "Afghanistan", lat: 34.0, lng: 66.0, major: false },
    { name: "Oman", lat: 21.0, lng: 57.0, major: false },
    { name: "Yemen", lat: 16.0, lng: 48.0, major: false },
];

// Beaconhouse Campus locations - ACCURATE coordinates
const campuses = [
    // Pakistan cities - accurate positions
    { country: "pakistan", city: "Lahore", lat: 31.55, lng: 74.35, campuses: 80 },
    { country: "pakistan", city: "Karachi", lat: 24.86, lng: 67.00, campuses: 60 },
    { country: "pakistan", city: "Islamabad", lat: 33.68, lng: 73.05, campuses: 40 },
    { country: "pakistan", city: "Multan", lat: 30.20, lng: 71.45, campuses: 25 },
    { country: "pakistan", city: "Peshawar", lat: 34.00, lng: 71.54, campuses: 15 },
    // Malaysia
    { country: "malaysia", city: "Kuala Lumpur", lat: 3.14, lng: 101.69, campuses: 5 },
    // UK
    { country: "uk", city: "London", lat: 51.51, lng: -0.13, campuses: 2 },
    { country: "uk", city: "Manchester", lat: 53.48, lng: -2.24, campuses: 1 },
    // Oman
    { country: "oman", city: "Muscat", lat: 23.59, lng: 58.38, campuses: 2 },
    // UAE
    { country: "uae", city: "Dubai", lat: 25.20, lng: 55.27, campuses: 3 },
    { country: "uae", city: "Abu Dhabi", lat: 24.45, lng: 54.38, campuses: 1 },
    // Philippines
    { country: "philippines", city: "Manila", lat: 14.60, lng: 120.98, campuses: 2 },
    // Thailand
    { country: "thailand", city: "Bangkok", lat: 13.76, lng: 100.50, campuses: 1 },
    // Belgium
    { country: "belgium", city: "Brussels", lat: 50.85, lng: 4.35, campuses: 1 },
];

function latLngToVector3(lat: number, lng: number, radius: number): [number, number, number] {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return [x, y, z];
}

function isVisible(position: THREE.Vector3, cameraPos: THREE.Vector3): boolean {
    const toCamera = cameraPos.clone().normalize();
    const toPoint = position.clone().normalize();
    return toCamera.dot(toPoint) > -0.1;
}

function CampusMarker({ campus, onClick, isSelected, cameraPosition }: {
    campus: typeof campuses[0];
    onClick: () => void;
    isSelected: boolean;
    cameraPosition: THREE.Vector3;
}) {
    const position = latLngToVector3(campus.lat, campus.lng, 2.01);
    const [hovered, setHovered] = useState(false);
    const posVec = useMemo(() => new THREE.Vector3(...position), [position]);

    if (!isVisible(posVec, cameraPosition)) return null;

    return (
        <group position={position}>
            <mesh
                onClick={(e) => { e.stopPropagation(); onClick(); }}
                onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
                onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
                scale={isSelected || hovered ? 1.5 : 1}
            >
                <sphereGeometry args={[0.025, 12, 12]} />
                <meshBasicMaterial color="#FFD700" />
            </mesh>

            {/* FIXED SIZE LABEL - no distanceFactor */}
            {(hovered || isSelected) && (
                <Html center style={{ pointerEvents: 'none' }}>
                    <div style={{
                        background: 'rgba(15, 23, 42, 0.95)',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        border: '1px solid rgba(251, 191, 36, 0.5)',
                        whiteSpace: 'nowrap',
                        transform: 'translateY(-20px)'
                    }}>
                        <div style={{ color: '#FBBF24', fontWeight: 600, fontSize: '12px' }}>{campus.city}</div>
                        <div style={{ color: '#94a3b8', fontSize: '10px' }}>{campus.campuses} campuses</div>
                    </div>
                </Html>
            )}
        </group>
    );
}

function CountryLabel({ country, zoomLevel, cameraPosition }: {
    country: typeof worldCountries[0];
    zoomLevel: number;
    cameraPosition: THREE.Vector3;
}) {
    const position = latLngToVector3(country.lat, country.lng, 2.03);
    const posVec = useMemo(() => new THREE.Vector3(...position), [position]);

    if (!isVisible(posVec, cameraPosition)) return null;

    // Only show at medium zoom
    const show = zoomLevel > 4 && zoomLevel < 10;
    if (!show) return null;

    // Only majors when zoomed out
    if (zoomLevel > 7 && !country.major) return null;

    return (
        <Html position={position} center style={{ pointerEvents: 'none' }}>
            <div style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '10px',
                fontFamily: 'Arial, sans-serif',
                textShadow: '1px 1px 2px #000, 0 0 8px #000',
                whiteSpace: 'nowrap',
                userSelect: 'none'
            }}>
                {country.name}
            </div>
        </Html>
    );
}

function Earth() {
    const texture = useLoader(TextureLoader, 'https://unpkg.com/three-globe@2.24.10/example/img/earth-blue-marble.jpg');
    const bump = useLoader(TextureLoader, 'https://unpkg.com/three-globe@2.24.10/example/img/earth-topology.png');

    // No rotation here - OrbitControls handles camera rotation
    // Labels and markers stay fixed relative to Earth

    return (
        <mesh>
            <sphereGeometry args={[2, 64, 64]} />
            <meshStandardMaterial map={texture} bumpMap={bump} bumpScale={0.02} roughness={0.4} />
        </mesh>
    );
}

function Scene({ onSelect, selected }: { onSelect: (c: typeof campuses[0] | null) => void; selected: typeof campuses[0] | null }) {
    const { camera } = useThree();
    const [zoom, setZoom] = useState(6);
    const [camPos, setCamPos] = useState(new THREE.Vector3(0, 0, 6));

    useFrame(() => {
        setZoom(camera.position.length());
        setCamPos(camera.position.clone());
    });

    return (
        <>
            <Suspense fallback={<mesh><sphereGeometry args={[2, 32, 32]} /><meshBasicMaterial color="#1e40af" /></mesh>}>
                <Earth />
            </Suspense>

            {worldCountries.map((c) => (
                <CountryLabel key={c.name} country={c} zoomLevel={zoom} cameraPosition={camPos} />
            ))}

            {campuses.map((c) => (
                <CampusMarker
                    key={`${c.country}-${c.city}`}
                    campus={c}
                    onClick={() => onSelect(c)}
                    isSelected={selected?.city === c.city}
                    cameraPosition={camPos}
                />
            ))}
        </>
    );
}

export default function WorldGlobe({ onCampusSelect, selectedCampus }: {
    onCampusSelect: (c: typeof campuses[0] | null) => void;
    selectedCampus: typeof campuses[0] | null;
}) {
    return (
        <div className="w-full h-full bg-[#000814] relative">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} style={{ background: '#000814' }}>
                <ambientLight intensity={2} />
                <directionalLight position={[5, 3, 5]} intensity={2} />
                <directionalLight position={[-3, -2, -3]} intensity={0.8} />
                <Stars radius={150} depth={60} count={2000} factor={3} fade />

                <OrbitControls
                    enableZoom enablePan={false}
                    minDistance={2.5} maxDistance={12}
                    autoRotate autoRotateSpeed={0.05}
                    zoomSpeed={0.4} rotateSpeed={0.4}
                />

                <Scene onSelect={onCampusSelect} selected={selectedCampus} />
            </Canvas>
        </div>
    );
}
