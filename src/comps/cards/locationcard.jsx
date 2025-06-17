import React, { useRef } from 'react'
import './locationcard.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import AboutMeCard from './aboutmecard'


const EarthModel = () => {
    const earthRef = useRef();
    const { scene } = useGLTF('/3D/Earth.glb')
    
    // Base rotation to show North America - this won't be overridden
    const baseRotation = useRef({ x: 0, y: 0.5 });
    const animationRotation = useRef({ x: 0, y: 0 });
    
    // Drag interaction state
    const isDragging = useRef(false);
    const previousMouse = useRef({ x: 0, y: 0 });
    const dragRotation = useRef({ x: 0, y: 0 });

    // Mouse drag interaction
    React.useEffect(() => {
        const canvas = document.querySelector('canvas');
        
        const handleMouseDown = (e) => {
            isDragging.current = true;
            previousMouse.current = { x: e.clientX, y: e.clientY };
            if (canvas) canvas.style.cursor = 'grabbing';
            e.preventDefault(); // Prevent text selection
        };

        const handleMouseMove = (e) => {
            if (!isDragging.current) return;
            
            const deltaX = e.clientX - previousMouse.current.x;
            const deltaY = e.clientY - previousMouse.current.y;
            
            // Apply drag rotation (inverted for natural feel)
            dragRotation.current.y += deltaX * 0.01;
            dragRotation.current.x += deltaY * 0.01;
            
            previousMouse.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseUp = () => {
            isDragging.current = false;
            if (canvas) canvas.style.cursor = 'grab';
        };

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        
        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useFrame(() => {
        if (earthRef.current) {
            // Continuous rotation (added to base rotation)
            animationRotation.current.y += 0.001;
            
            // Apply combined rotation: base + animation + drag
            earthRef.current.rotation.x = baseRotation.current.x + animationRotation.current.x + dragRotation.current.x;
            earthRef.current.rotation.y = baseRotation.current.y + animationRotation.current.y + dragRotation.current.y;
        }
    });

    return (
        <mesh ref={earthRef} position={[-15, 0, 0]}>
            <primitive object={scene} scale={0.8} />
        </mesh>
    );
};

const LocationCard = () => {
    return (
        <div className='location-card-container'>
            <Canvas
                camera={{ position: [12, 0, 16], fov: 25 }}
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    cursor: 'grab',
                    userSelect: 'none' 
                }}
            >
                <ambientLight intensity={2.5} />
                <pointLight position={[1, 1, 1]} />
                <EarthModel />
            </Canvas>
        <div className='about-info'>
                    <AboutMeCard />
            </div>
        </div>
    )
}

export default LocationCard