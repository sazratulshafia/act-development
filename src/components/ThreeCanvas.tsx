'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, Layers, Compass, Maximize2 } from 'lucide-react';

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFloor, setActiveFloor] = useState<number>(14);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 550;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07080a, 0.035);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(7, 5, 9);
    camera.lookAt(0, 1.5, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const warmLight = new THREE.DirectionalLight(0xc5a059, 2.5);
    warmLight.position.set(5, 10, 7);
    scene.add(warmLight);

    const blueRimLight = new THREE.DirectionalLight(0x4a72b0, 1.8);
    blueRimLight.position.set(-6, 8, -5);
    scene.add(blueRimLight);

    // Group for Building
    const buildingGroup = new THREE.Group();
    scene.add(buildingGroup);

    // Materials
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x162238,
      transparent: true,
      opacity: 0.55,
      roughness: 0.1,
      metalness: 0.9,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    const concreteMaterial = new THREE.MeshStandardMaterial({
      color: 0x222630,
      roughness: 0.8,
      metalness: 0.2,
    });

    const goldAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      roughness: 0.3,
      metalness: 0.8,
      emissive: 0x6e5223,
      emissiveIntensity: 0.4,
    });

    const illuminatedWindowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffe6a3,
      transparent: true,
      opacity: 0.85,
    });

    // Construct 15-Floor Architectural Tower
    const totalFloors = 15;
    const floorHeight = 0.35;
    const floorMeshList: THREE.Mesh[] = [];

    // Base Podium (Double height)
    const podiumGeo = new THREE.BoxGeometry(3.2, 0.8, 3.2);
    const podium = new THREE.Mesh(podiumGeo, concreteMaterial);
    podium.position.y = 0.4;
    buildingGroup.add(podium);

    // Tower Floors
    for (let f = 0; f < totalFloors; f++) {
      const yPos = 0.8 + (f * floorHeight);
      
      // Core Floor Slab
      const slabGeo = new THREE.BoxGeometry(2.8, 0.06, 2.8);
      const slab = new THREE.Mesh(slabGeo, concreteMaterial);
      slab.position.y = yPos;
      buildingGroup.add(slab);

      // Glass Façade for each floor
      const floorGlassGeo = new THREE.BoxGeometry(2.6, floorHeight - 0.06, 2.6);
      const floorGlass = new THREE.Mesh(floorGlassGeo, glassMaterial);
      floorGlass.position.y = yPos + ((floorHeight - 0.06) / 2);
      buildingGroup.add(floorGlass);
      floorMeshList.push(floorGlass);

      // Random Warm Window Illumination
      if (f % 2 === 0 || f === 14) {
        const windowLightGeo = new THREE.BoxGeometry(1.2, 0.18, 2.62);
        const windowLight = new THREE.Mesh(windowLightGeo, illuminatedWindowMaterial);
        windowLight.position.y = yPos + ((floorHeight - 0.06) / 2);
        buildingGroup.add(windowLight);
      }

      // Vertical architectural fins (Gold louvers)
      const finGeo = new THREE.BoxGeometry(0.04, floorHeight, 0.2);
      const finLeft = new THREE.Mesh(finGeo, goldAccentMaterial);
      finLeft.position.set(-1.32, yPos + (floorHeight / 2), 1.0);
      buildingGroup.add(finLeft);

      const finRight = new THREE.Mesh(finGeo, goldAccentMaterial);
      finRight.position.set(1.32, yPos + (floorHeight / 2), -0.8);
      buildingGroup.add(finRight);

      // Balcony cantilever on select floors
      if (f % 3 === 0) {
        const balconyGeo = new THREE.BoxGeometry(1.4, 0.04, 0.6);
        const balcony = new THREE.Mesh(balconyGeo, goldAccentMaterial);
        balcony.position.set(0, yPos, 1.55);
        buildingGroup.add(balcony);
      }
    }

    // Penthouse Roof Crown Canopy
    const crownY = 0.8 + (totalFloors * floorHeight);
    const crownGeo = new THREE.BoxGeometry(3.0, 0.1, 3.0);
    const crown = new THREE.Mesh(crownGeo, goldAccentMaterial);
    crown.position.y = crownY;
    buildingGroup.add(crown);

    // Floating Ground Reflective Grid
    const gridHelper = new THREE.GridHelper(16, 20, 0xc5a059, 0x1f242e);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // Ambient floating particles (stardust/night sky)
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 18;
      particlePositions[i + 1] = Math.random() * 10;
      particlePositions[i + 2] = (Math.random() - 0.5) * 18;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xc5a059,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Animation Loop
    let animationFrameId: number;
    let rotationSpeed = 0.0035;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isRotating) {
        buildingGroup.rotation.y += rotationSpeed;
        particles.rotation.y += rotationSpeed * 0.4;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 550;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Mouse Interaction
    let isMouseDown = false;
    let prevMouseX = 0;

    const onMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      prevMouseX = e.clientX;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      const deltaX = e.clientX - prevMouseX;
      buildingGroup.rotation.y += deltaX * 0.008;
      prevMouseX = e.clientX;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isRotating]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '540px', overflow: 'hidden', borderRadius: '16px' }}>
      
      {/* Three.js Canvas Container */}
      <div 
        ref={containerRef} 
        style={{ width: '100%', height: '100%', cursor: 'grab' }}
        title="Click and drag to rotate the 3D model" 
      />

      {/* Interactive Controls Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 10,
          background: 'rgba(12, 14, 19, 0.75)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          padding: '12px 18px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
          <Compass size={14} />
          <span>Interactive 3D Architectural Model</span>
        </div>
        <div className="font-display" style={{ fontSize: '16px', color: 'var(--text-primary)', marginTop: '4px' }}>
          Act Vertica — 15 Levels
        </div>
      </div>

      {/* Floating Floor Selector & Orbit Toggle */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          zIndex: 10,
          display: 'flex',
          gap: '10px',
        }}
      >
        <button
          onClick={() => setIsRotating(!isRotating)}
          style={{
            background: 'rgba(12, 14, 19, 0.8)',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            color: 'var(--gold-light)',
            padding: '8px 14px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Layers size={14} />
          {isRotating ? 'Pause Orbit' : 'Auto Orbit'}
        </button>
      </div>

      {/* Hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          zIndex: 10,
          color: 'var(--text-muted)',
          fontSize: '11.5px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span>💡 Drag with mouse to inspect structural angles</span>
      </div>
    </div>
  );
}
