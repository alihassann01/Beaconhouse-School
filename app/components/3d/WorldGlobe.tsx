"use client";

import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import { useRef, useState, Suspense, useMemo } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { Plus, Minus } from "lucide-react";

// World countries for labels
const worldCountries = [
    { name: "United States", lat: 39.8, lng: -98.5, major: true },
    { name: "Canada", lat: 60.0, lng: -110.0, major: true },
    { name: "Brazil", lat: -14.2, lng: -51.9, major: true },
    { name: "United Kingdom", lat: 54.0, lng: -2.0, major: false },
    { name: "France", lat: 46.2, lng: 2.2, major: false },
    { name: "Germany", lat: 51.2, lng: 10.5, major: false },
    { name: "Russia", lat: 62.0, lng: 100.0, major: true },
    { name: "China", lat: 35.0, lng: 105.0, major: true },
    { name: "Japan", lat: 36.0, lng: 138.0, major: false },
    { name: "India", lat: 22.0, lng: 78.0, major: true },
    { name: "Pakistan", lat: 30.0, lng: 70.0, major: false },
    { name: "Indonesia", lat: -2.0, lng: 118.0, major: false },
    { name: "Australia", lat: -25.0, lng: 135.0, major: true },
];

// 185 Beaconhouse Flagship Campus Locations
const campuses = [
    // PAKISTAN - NORTHERN REGION (36 campuses)
    { country: "pakistan", city: "Islamabad", name: "Margalla (BMI)", lat: 33.69, lng: 73.05 },
    { country: "pakistan", city: "Islamabad", name: "City H-8", lat: 33.69, lng: 73.04 },
    { country: "pakistan", city: "Islamabad", name: "F-7/4 KG", lat: 33.72, lng: 73.07 },
    { country: "pakistan", city: "Islamabad", name: "F-8/3", lat: 33.71, lng: 73.05 },
    { country: "pakistan", city: "Islamabad", name: "F-10/4", lat: 33.69, lng: 73.01 },
    { country: "pakistan", city: "Islamabad", name: "F-11", lat: 33.68, lng: 73.02 },
    { country: "pakistan", city: "Islamabad", name: "I-8", lat: 33.66, lng: 73.08 },
    { country: "pakistan", city: "Islamabad", name: "G-15", lat: 33.64, lng: 72.98 },
    { country: "pakistan", city: "Islamabad", name: "Metropolitan", lat: 33.65, lng: 72.99 },
    { country: "pakistan", city: "Islamabad", name: "Newlands", lat: 33.70, lng: 73.13 },
    { country: "pakistan", city: "Islamabad", name: "Gulberg Greens", lat: 33.62, lng: 73.00 },
    { country: "pakistan", city: "Islamabad", name: "Tarnol", lat: 33.65, lng: 72.83 },
    { country: "pakistan", city: "Rawalpindi", name: "Satellite Boys", lat: 33.63, lng: 73.04 },
    { country: "pakistan", city: "Rawalpindi", name: "Satellite Girls", lat: 33.62, lng: 73.03 },
    { country: "pakistan", city: "Rawalpindi", name: "Peshawar Road", lat: 33.60, lng: 73.05 },
    { country: "pakistan", city: "Rawalpindi", name: "Civil Lines", lat: 33.59, lng: 73.07 },
    { country: "pakistan", city: "Rawalpindi", name: "Tipu Sultan", lat: 33.61, lng: 73.06 },
    { country: "pakistan", city: "Rawalpindi", name: "Bahria Town", lat: 33.52, lng: 73.09 },
    { country: "pakistan", city: "Peshawar", name: "Frontier A-Levels", lat: 34.00, lng: 71.47 },
    { country: "pakistan", city: "Peshawar", name: "Frontier Boys", lat: 34.00, lng: 71.46 },
    { country: "pakistan", city: "Peshawar", name: "Frontier Girls", lat: 34.01, lng: 71.47 },
    { country: "pakistan", city: "Peshawar", name: "Khyber", lat: 33.99, lng: 71.45 },
    { country: "pakistan", city: "Peshawar", name: "University Town", lat: 34.02, lng: 71.55 },
    { country: "pakistan", city: "Abbottabad", name: "Senior", lat: 34.17, lng: 73.24 },
    { country: "pakistan", city: "Abbottabad", name: "KG Jinnahabad", lat: 34.15, lng: 73.22 },
    { country: "pakistan", city: "Mardan", name: "Jalala", lat: 34.20, lng: 72.05 },
    { country: "pakistan", city: "Nowshera", name: "Cantt", lat: 34.02, lng: 71.98 },
    { country: "pakistan", city: "Wah Cantt", name: "Officers Colony", lat: 33.78, lng: 72.73 },
    { country: "pakistan", city: "Mirpur AJK", name: "Mirpur", lat: 33.15, lng: 73.75 },
    { country: "pakistan", city: "Swat", name: "Saidu Sharif", lat: 34.75, lng: 72.35 },

    // PAKISTAN - CENTRAL REGION (65 campuses - showing key ones)
    { country: "pakistan", city: "Lahore", name: "Liberty (HQ)", lat: 31.51, lng: 74.34 },
    { country: "pakistan", city: "Lahore", name: "Defence BDC", lat: 31.47, lng: 74.38 },
    { country: "pakistan", city: "Lahore", name: "TNS Gulberg", lat: 31.52, lng: 74.35 },
    { country: "pakistan", city: "Lahore", name: "TNS DHA", lat: 31.46, lng: 74.40 },
    { country: "pakistan", city: "Lahore", name: "Newlands DHA", lat: 31.45, lng: 74.41 },
    { country: "pakistan", city: "Lahore", name: "Johar Town Boys", lat: 31.46, lng: 74.27 },
    { country: "pakistan", city: "Lahore", name: "Johar Town Girls", lat: 31.47, lng: 74.28 },
    { country: "pakistan", city: "Lahore", name: "Garden Town", lat: 31.50, lng: 74.31 },
    { country: "pakistan", city: "Lahore", name: "Model Town Boys", lat: 31.48, lng: 74.32 },
    { country: "pakistan", city: "Lahore", name: "Model Town Girls", lat: 31.47, lng: 74.31 },
    { country: "pakistan", city: "Lahore", name: "Valencia Town", lat: 31.44, lng: 74.26 },
    { country: "pakistan", city: "Lahore", name: "Canal Side", lat: 31.43, lng: 74.24 },
    { country: "pakistan", city: "Lahore", name: "Bahria Town", lat: 31.36, lng: 74.18 },
    { country: "pakistan", city: "Lahore", name: "Askari X", lat: 31.43, lng: 74.25 },
    { country: "pakistan", city: "Lahore", name: "Allama Iqbal Town", lat: 31.50, lng: 74.29 },
    { country: "pakistan", city: "Lahore", name: "Wapda Town", lat: 31.45, lng: 74.26 },
    { country: "pakistan", city: "Lahore", name: "Cavalry Ground", lat: 31.50, lng: 74.37 },
    { country: "pakistan", city: "Faisalabad", name: "Main Campus", lat: 31.42, lng: 73.09 },
    { country: "pakistan", city: "Faisalabad", name: "Civil Lines", lat: 31.41, lng: 73.07 },
    { country: "pakistan", city: "Multan", name: "Main Abdali", lat: 30.20, lng: 71.46 },
    { country: "pakistan", city: "Multan", name: "A-Level", lat: 30.21, lng: 71.45 },
    { country: "pakistan", city: "Multan", name: "Newlands", lat: 30.18, lng: 71.44 },
    { country: "pakistan", city: "Gujranwala", name: "Palm Tree", lat: 32.16, lng: 74.19 },
    { country: "pakistan", city: "Sialkot", name: "Main Cantt", lat: 32.50, lng: 74.53 },
    { country: "pakistan", city: "Sargodha", name: "Main", lat: 32.08, lng: 72.67 },
    { country: "pakistan", city: "Sahiwal", name: "Boys", lat: 30.67, lng: 73.11 },
    { country: "pakistan", city: "Okara", name: "GT Road", lat: 30.81, lng: 73.45 },
    { country: "pakistan", city: "Gujrat", name: "Main", lat: 32.57, lng: 74.08 },
    { country: "pakistan", city: "Jhelum", name: "GT Road", lat: 32.94, lng: 73.73 },
    { country: "pakistan", city: "Bahawalpur", name: "Model Town", lat: 29.39, lng: 71.68 },
    { country: "pakistan", city: "RY Khan", name: "Canal Road", lat: 28.42, lng: 70.30 },

    // PAKISTAN - SOUTHERN REGION (29 campuses)
    { country: "pakistan", city: "Karachi", name: "Jubilee A-Level", lat: 24.89, lng: 67.06 },
    { country: "pakistan", city: "Karachi", name: "Defence DHA", lat: 24.80, lng: 67.06 },
    { country: "pakistan", city: "Karachi", name: "Clifton", lat: 24.82, lng: 67.03 },
    { country: "pakistan", city: "Karachi", name: "PECHS", lat: 24.87, lng: 67.06 },
    { country: "pakistan", city: "Karachi", name: "Gulshan Main", lat: 24.92, lng: 67.09 },
    { country: "pakistan", city: "Karachi", name: "N. Nazimabad", lat: 24.94, lng: 67.03 },
    { country: "pakistan", city: "Karachi", name: "Jauhar", lat: 24.93, lng: 67.12 },
    { country: "pakistan", city: "Karachi", name: "Maymar", lat: 24.96, lng: 67.07 },
    { country: "pakistan", city: "Karachi", name: "Bahria Town", lat: 24.93, lng: 67.23 },
    { country: "pakistan", city: "Hyderabad", name: "Qasimabad", lat: 25.40, lng: 68.33 },
    { country: "pakistan", city: "Hyderabad", name: "Latifabad", lat: 25.43, lng: 68.35 },
    { country: "pakistan", city: "Quetta", name: "Juniper", lat: 30.18, lng: 67.01 },
    { country: "pakistan", city: "Sukkur", name: "Military Road", lat: 27.70, lng: 68.86 },

    // MALAYSIA - 14 locations
    { country: "malaysia", city: "Cheras", name: "Newlands", lat: 3.10, lng: 101.73 },
    { country: "malaysia", city: "Cheras", name: "Sri Murni", lat: 3.09, lng: 101.74 },
    { country: "malaysia", city: "Bangsar", name: "Preschool", lat: 3.13, lng: 101.67 },
    { country: "malaysia", city: "PJ", name: "Sri Inai", lat: 3.10, lng: 101.64 },
    { country: "malaysia", city: "Subang", name: "Subang Jaya", lat: 3.08, lng: 101.59 },
    { country: "malaysia", city: "Puchong", name: "Peiken", lat: 3.02, lng: 101.62 },
    { country: "malaysia", city: "PJ", name: "BNEY SS2", lat: 3.11, lng: 101.62 },
    { country: "malaysia", city: "Ampang", name: "BNEY", lat: 3.15, lng: 101.76 },
    { country: "malaysia", city: "Gamuda", name: "Preschool", lat: 3.22, lng: 101.55 },
    { country: "malaysia", city: "PJ", name: "Gasing", lat: 3.10, lng: 101.66 },
    { country: "malaysia", city: "Klang", name: "Sarah's", lat: 3.04, lng: 101.45 },

    // UK - 10 locations
    { country: "uk", city: "Hull", name: "Newlands School", lat: 53.74, lng: -0.33 },
    { country: "uk", city: "Hull", name: "Newland Girls", lat: 53.77, lng: -0.36 },
    { country: "uk", city: "Beverley", name: "Cherub", lat: 53.84, lng: -0.43 },
    { country: "uk", city: "Cottingham", name: "Cherub", lat: 53.78, lng: -0.41 },
    { country: "uk", city: "Pocklington", name: "Montessori", lat: 53.93, lng: -0.78 },
    { country: "uk", city: "Leeds", name: "Cherub", lat: 53.80, lng: -1.55 },
    { country: "uk", city: "York", name: "Cherub", lat: 53.96, lng: -1.08 },
    { country: "uk", city: "Harrogate", name: "Cherub", lat: 53.99, lng: -1.54 },
    { country: "uk", city: "London", name: "HQ", lat: 51.51, lng: -0.13 },

    // THAILAND - 4 BYS schools
    { country: "thailand", city: "Rangsit", name: "BYS Rangsit", lat: 13.98, lng: 100.62 },
    { country: "thailand", city: "Hua Hin", name: "BYS Hua Hin", lat: 12.57, lng: 99.96 },
    { country: "thailand", city: "Bangkok", name: "BYS Ladprao", lat: 13.82, lng: 100.57 },
    { country: "thailand", city: "Bangkok", name: "BYS International", lat: 13.71, lng: 100.67 },

    // PHILIPPINES - 4 schools
    { country: "philippines", city: "Cebu", name: "St. Paul", lat: 10.32, lng: 123.89 },
    { country: "philippines", city: "Cabuyao", name: "Angels Elementary", lat: 14.28, lng: 121.13 },
    { country: "philippines", city: "Cabuyao", name: "Angels High", lat: 14.27, lng: 121.12 },
    { country: "philippines", city: "Manila", name: "Dame Theresiana", lat: 14.55, lng: 121.00 },

    // UAE - 3 schools
    { country: "uae", city: "Dubai", name: "Newlands", lat: 25.22, lng: 55.42 },
    { country: "uae", city: "Sharjah", name: "Al Khaleej", lat: 25.34, lng: 55.41 },
    { country: "uae", city: "Al Ain", name: "Beaconhouse", lat: 24.20, lng: 55.73 },

    // OMAN - 2 campuses
    { country: "oman", city: "Muscat", name: "Al Khuwair", lat: 23.59, lng: 58.38 },
    { country: "oman", city: "Muscat", name: "Qurum KG", lat: 23.60, lng: 58.49 },

    // BANGLADESH - 1 campus
    { country: "bangladesh", city: "Dhaka", name: "Banani", lat: 23.79, lng: 90.41 },

    // BELGIUM - 1 location
    { country: "belgium", city: "Brussels", name: "Gymboree", lat: 50.85, lng: 4.35 },
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

function CampusMarker({ campus, onClick, isSelected, cameraPosition, zoomLevel }: {
    campus: typeof campuses[0];
    onClick: () => void;
    isSelected: boolean;
    cameraPosition: THREE.Vector3;
    zoomLevel: number;
}) {
    const position = latLngToVector3(campus.lat, campus.lng, 2.01);
    const [hovered, setHovered] = useState(false);
    const posVec = useMemo(() => new THREE.Vector3(...position), [position]);

    if (!isVisible(posVec, cameraPosition)) return null;

    // Scale markers based on zoom - MUCH smaller as you zoom in closer
    // This allows nearby campuses to be distinguishable as tiny dots
    let baseSize: number;
    if (zoomLevel < 0.5) baseSize = 0.00008;       // Closest zoom - extremely tiny
    else if (zoomLevel < 1.5) baseSize = 0.00008;
    else if (zoomLevel < 2) baseSize = 0.0001;
    else if (zoomLevel < 2.2) baseSize = 0.0002;
    else if (zoomLevel < 2.4) baseSize = 0.001;
    else if (zoomLevel < 2.6) baseSize = 0.0015;
    else if (zoomLevel < 2.8) baseSize = 0.002;
    else if (zoomLevel < 3.0) baseSize = 0.0025;
    else if (zoomLevel < 3.5) baseSize = 0.003;
    else if (zoomLevel < 4.0) baseSize = 0.004;
    else if (zoomLevel < 5.0) baseSize = 0.006;
    else if (zoomLevel < 6.0) baseSize = 0.008;
    else baseSize = 0.012;                        // Far away - normal size

    const scale = isSelected || hovered ? 2 : 1;

    return (
        <group position={position}>
            <mesh
                onClick={(e) => { e.stopPropagation(); onClick(); }}
                onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
                onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
                scale={scale}
            >
                <sphereGeometry args={[baseSize, 8, 8]} />
                <meshBasicMaterial color="#FFD700" />
            </mesh>

            {(hovered || isSelected) && (
                <Html center style={{ pointerEvents: 'none' }}>
                    <div style={{
                        background: 'rgba(15, 23, 42, 0.95)',
                        color: 'white',
                        padding: '3px 6px',
                        borderRadius: '4px',
                        fontSize: '9px',
                        border: '1px solid rgba(251, 191, 36, 0.5)',
                        whiteSpace: 'nowrap',
                        transform: 'translateY(-12px)'
                    }}>
                        <div style={{ color: '#FBBF24', fontWeight: 600 }}>{campus.name}</div>
                        <div style={{ color: '#94a3b8', fontSize: '8px' }}>{campus.city}</div>
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

    // Show country labels at medium zoom (hide when too close or too far)
    const show = zoomLevel > 3.5 && zoomLevel < 10;
    if (!show) return null;
    if (zoomLevel > 7 && !country.major) return null;

    return (
        <Html position={position} center style={{ pointerEvents: 'none' }}>
            <div style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: zoomLevel < 5 ? '10px' : '8px',
                fontFamily: 'Arial, sans-serif',
                textShadow: '1px 1px 2px #000',
                whiteSpace: 'nowrap',
                userSelect: 'none'
            }}>
                {country.name}
            </div>
        </Html>
    );
}

// City labels that appear when zoomed in close
function CityLabel({ city, lat, lng, zoomLevel, cameraPosition }: {
    city: string;
    lat: number;
    lng: number;
    zoomLevel: number;
    cameraPosition: THREE.Vector3;
}) {
    const position = latLngToVector3(lat, lng, 2.025);
    const posVec = useMemo(() => new THREE.Vector3(...position), [position]);

    if (!isVisible(posVec, cameraPosition)) return null;

    // Only show city labels in a specific zoom range (not too close, not too far)
    // Hide at very close zoom (< 2.3) and at medium/far zoom (> 3.5)
    if (zoomLevel < 2.3 || zoomLevel > 3.5) return null;

    return (
        <Html position={position} center style={{ pointerEvents: 'none' }}>
            <div style={{
                color: 'rgba(251, 191, 36, 0.9)',
                fontSize: zoomLevel < 2.5 ? '11px' : '9px',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 600,
                textShadow: '1px 1px 3px #000, 0 0 5px #000',
                whiteSpace: 'nowrap',
                userSelect: 'none'
            }}>
                {city}
            </div>
        </Html>
    );
}


function Earth() {
    const texture = useLoader(TextureLoader, 'https://unpkg.com/three-globe@2.24.10/example/img/earth-blue-marble.jpg');
    const bump = useLoader(TextureLoader, 'https://unpkg.com/three-globe@2.24.10/example/img/earth-topology.png');

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

    // Get unique cities for labels (avoiding duplicates)
    const uniqueCities = useMemo(() => {
        const seen = new Set<string>();
        return campuses.filter(c => {
            const key = `${c.city}-${c.country}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
    }, []);

    return (
        <>
            <Suspense fallback={<mesh><sphereGeometry args={[2, 32, 32]} /><meshBasicMaterial color="#1e40af" /></mesh>}>
                <Earth />
            </Suspense>

            {worldCountries.map((c) => (
                <CountryLabel key={c.name} country={c} zoomLevel={zoom} cameraPosition={camPos} />
            ))}

            {/* City labels - visible when zoomed in close */}
            {uniqueCities.map((c, idx) => (
                <CityLabel
                    key={`city-${c.city}-${c.country}-${idx}`}
                    city={c.city}
                    lat={c.lat}
                    lng={c.lng}
                    zoomLevel={zoom}
                    cameraPosition={camPos}
                />
            ))}

            {campuses.map((c, idx) => (
                <CampusMarker
                    key={`${c.country}-${c.city}-${c.name}-${idx}`}
                    campus={c}
                    onClick={() => onSelect(c)}
                    isSelected={selected?.name === c.name && selected?.city === c.city}
                    cameraPosition={camPos}
                    zoomLevel={zoom}
                />
            ))}
        </>
    );
}

export default function WorldGlobe({ onCampusSelect, selectedCampus }: {
    onCampusSelect: (c: typeof campuses[0] | null) => void;
    selectedCampus: typeof campuses[0] | null;
}) {
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);
    const zoomIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // ===== ZOOM CONFIGURATION =====
    const ZOOM_SPEED = 0.02;        // How much to zoom per step (smaller = slower)
    const ZOOM_INTERVAL = 50;       // Milliseconds between zooms when holding (smaller = faster)
    // ==============================

    const handleZoom = (direction: 'in' | 'out') => {
        if (!cameraRef.current) return;
        const camera = cameraRef.current;
        const target = new THREE.Vector3(0, 0, 0);
        const currentDist = camera.position.distanceTo(target);

        const newDist = direction === 'in'
            ? Math.max(2.1, currentDist - ZOOM_SPEED)
            : Math.min(12, currentDist + ZOOM_SPEED);

        const directionVec = camera.position.clone().sub(target).normalize();
        const newPos = directionVec.multiplyScalar(newDist).add(target);
        camera.position.copy(newPos);
    };

    const startContinuousZoom = (direction: 'in' | 'out') => {
        handleZoom(direction); // Immediate first zoom
        zoomIntervalRef.current = setInterval(() => handleZoom(direction), ZOOM_INTERVAL);
    };

    const stopContinuousZoom = () => {
        if (zoomIntervalRef.current) {
            clearInterval(zoomIntervalRef.current);
            zoomIntervalRef.current = null;
        }
    };

    return (
        <div className="w-full h-full bg-[#000814] relative">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} style={{ background: '#000814' }} onCreated={({ camera }) => { cameraRef.current = camera as THREE.PerspectiveCamera; }}>
                <ambientLight intensity={2} />
                <directionalLight position={[5, 3, 5]} intensity={2} />
                <directionalLight position={[-3, -2, -3]} intensity={0.8} />
                <Stars radius={150} depth={60} count={2000} factor={3} fade />

                <OrbitControls
                    enableZoom enablePan={false}
                    minDistance={2.1} maxDistance={12}
                    autoRotate={false}
                    zoomSpeed={0.3} rotateSpeed={0.2}
                    enableDamping dampingFactor={0.05}
                />

                <Scene onSelect={onCampusSelect} selected={selectedCampus} />
            </Canvas>

            {/* Zoom Controls - Bottom Left */}
            <div className="absolute bottom-6 left-6 flex flex-col gap-2 z-50">
                <button
                    onMouseDown={() => startContinuousZoom('in')}
                    onMouseUp={stopContinuousZoom}
                    onMouseLeave={stopContinuousZoom}
                    onTouchStart={() => startContinuousZoom('in')}
                    onTouchEnd={stopContinuousZoom}
                    className="p-2 bg-slate-900/90 hover:bg-slate-800 text-yellow-400 rounded-full border border-yellow-400/30 transition-all active:scale-95 shadow-lg select-none"
                    title="Zoom In (hold to continue)"
                >
                    <Plus size={18} />
                </button>
                <button
                    onMouseDown={() => startContinuousZoom('out')}
                    onMouseUp={stopContinuousZoom}
                    onMouseLeave={stopContinuousZoom}
                    onTouchStart={() => startContinuousZoom('out')}
                    onTouchEnd={stopContinuousZoom}
                    className="p-2 bg-slate-900/90 hover:bg-slate-800 text-yellow-400 rounded-full border border-yellow-400/30 transition-all active:scale-95 shadow-lg select-none"
                    title="Zoom Out (hold to continue)"
                >
                    <Minus size={18} />
                </button>
            </div>

            <div className="absolute top-4 left-4 text-yellow-400 text-sm bg-black/70 px-3 py-1 rounded-full">
                185 Flagship Campuses • 9 Countries
            </div>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-500 text-xs bg-black/50 px-3 py-1 rounded-full">
                Scroll to zoom • Drag to rotate • Hover markers
            </div>
        </div>
    );
}
