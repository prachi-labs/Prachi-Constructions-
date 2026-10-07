import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  progress: number; // 0 to 1
  className?: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ progress, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(progress);
  progressRef.current = progress;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    // Do NOT use scene.fog with transparent canvas as it washes out background images with a grey haze

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 3, 14);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // 100% transparent background
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // Ambient & Directional Lights - Black Russian, Wedgewood & Link Water
    const ambientLight = new THREE.AmbientLight(0x121524, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x485F88, 2.2);
    dirLight.position.set(5, 12, 8);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0xC0C9DB, 1.2);
    rimLight.position.set(-6, 8, -5);
    scene.add(rimLight);

    // 1. Delicate Architectural Holographic Group (No opaque blocking meshes)
    const buildingGroup = new THREE.Group();

    // Slabs - ONLY delicate Echo Blue wireframe edges, NO solid grey blocking box
    const slabCount = 4;
    const slabGeom = new THREE.BoxGeometry(7, 0.05, 5);
    const edgeGeom = new THREE.EdgesGeometry(slabGeom);
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x9DACCC,
      transparent: true,
      opacity: 0.35,
    });

    const slabs: THREE.LineSegments[] = [];
    for (let i = 0; i < slabCount; i++) {
      const edges = new THREE.LineSegments(edgeGeom, edgeMat);
      edges.position.y = -1.9 + i * 1.6;
      buildingGroup.add(edges);
      slabs.push(edges);
    }

    // Crane group - delicate Echo Blue wireframe only
    const craneGroup = new THREE.Group();
    const towerGeom = new THREE.BoxGeometry(0.3, 10, 0.3);
    const towerEdges = new THREE.EdgesGeometry(towerGeom);
    const tower = new THREE.LineSegments(towerEdges, edgeMat);
    tower.position.set(6, 4, -4);
    craneGroup.add(tower);

    const jibGeom = new THREE.BoxGeometry(8, 0.25, 0.25);
    const jibEdges = new THREE.EdgesGeometry(jibGeom);
    const jib = new THREE.LineSegments(jibEdges, edgeMat);
    jib.position.set(3, 9, -4);
    craneGroup.add(jib);

    scene.add(craneGroup);
    scene.add(buildingGroup);

    // 4. Atmospheric Floating Glowing Link Water Stardust Particles
    const particleCount = 100;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 20;
      particlePositions[i + 1] = Math.random() * 12 - 2;
      particlePositions[i + 2] = (Math.random() - 0.5) * 16;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xC0C9DB,
      size: 0.08,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.5;
      mouseY = y * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const p = progressRef.current; // 0 to 1

      // Rotate crane while in raw construction phase, then crane fades/moves away
      if (p < 0.6) {
        craneGroup.visible = true;
        craneGroup.position.x = 6 - (p * 4);
        craneGroup.rotation.y = Math.sin(elapsedTime * 0.8) * 0.4;
        craneGroup.position.y = 0 - (p * 5); // Crane gradually lowers/dismantles
      } else {
        craneGroup.visible = false;
      }

      // Building floors evolve with progress
      slabs.forEach((slab, idx) => {
        const threshold = idx / slabCount;
        if (p < threshold * 0.6) {
          slab.scale.set(0.2 + (p / (threshold + 0.1)) * 0.8, 1, 0.2 + (p / (threshold + 0.1)) * 0.8);
        } else {
          slab.scale.set(1, 1, 1);
        }
      });

      // Camera choreograph based on scroll & mouse parallax
      const targetCamX = Math.sin(p * Math.PI * 0.5) * 2 + mouseX;
      const targetCamY = 2 + (1 - p) * 1.5 + mouseY;
      const targetCamZ = 13 - p * 3.5;

      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.position.z += (targetCamZ - camera.position.z) * 0.05;
      camera.lookAt(0, 0.5 + p * 0.5, 0);

      // Rotate building gently
      buildingGroup.rotation.y = (p - 0.5) * 0.4 + Math.sin(elapsedTime * 0.2) * 0.05;

      // Particle float
      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
};
