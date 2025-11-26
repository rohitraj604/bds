import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import img from "./img2.jpg"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Galaxy = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.set(0, 0, 800);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const loader = new THREE.TextureLoader();
    const animatedSprites = [];
    const textSprites = [];

    // === Repeated Image Sprites ===
    const imageURL = img;
    loader.load(imageURL, tex => {
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
      for (let i = 0; i < 100; i++) {
        const sprite = new THREE.Sprite(mat.clone());
        sprite.scale.set(200, 200, 1);
        sprite.position.set((Math.random() - 0.5) * 3000, (Math.random() - 0.5) * 3000, (Math.random() - 0.5) * 3000);
        scene.add(sprite);
        animatedSprites.push(sprite);
      }
    });

    // === Function to create glowing text ===
    const createTextTexture = (text, color) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = 'bold 64px Arial';
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = color;
      ctx.shadowBlur = 20;
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      return new THREE.CanvasTexture(canvas);
    };

    // === Repeated Text Sprites (with rainbow colors) ===
    const colors = ['#ff66ff', '#66ccff', '#ffff66', '#66ff99', '#ff9966'];
    for (let i = 0; i < 200; i++) {
      const color = colors[i % colors.length];
      const textTex = createTextTexture('HBD Trapti', color);
      const textMat = new THREE.SpriteMaterial({ map: textTex, transparent: true });
      const sprite = new THREE.Sprite(textMat);
      sprite.scale.set(250, 80, 1);
      sprite.position.set((Math.random() - 0.5) * 3500, (Math.random() - 0.5) * 3500, (Math.random() - 0.5) * 3500);
      scene.add(sprite);
      animatedSprites.push(sprite);
      textSprites.push({ sprite, baseColor: color });
    }

    // === Red glowing blobs ===
    const blobTex = createTextTexture(' ', 'red');
    const blobMat = new THREE.SpriteMaterial({ map: blobTex, transparent: true, opacity: 0.6 });
    for (let i = 0; i < 40; i++) {
      const sprite = new THREE.Sprite(blobMat.clone());
      const s = 100 + Math.random() * 150;
      sprite.scale.set(s, s, 1);
      sprite.position.set((Math.random() - 0.5) * 3000, (Math.random() - 0.5) * 3000, (Math.random() - 0.5) * 3000);
      scene.add(sprite);
      animatedSprites.push(sprite);
    }

    // === Stars background ===
    const starCount = 4000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 6000;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 2 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);

    // Animate
    let frameId;
    const animate = () => {
      controls.update();
      const time = Date.now() * 0.001;

      animatedSprites.forEach((sprite, i) => {
        sprite.rotation.z += 0.002;
        sprite.position.x += Math.sin(time + i) * 0.1;
        sprite.position.y += Math.cos(time + i * 0.5) * 0.1;
      });

      textSprites.forEach((obj, idx) => {
        if (idx % 10 === 0) {
          const hue = (time * 40 + idx * 10) % 360;
          const color = `hsl(${hue}, 100%, 60%)`;
          obj.sprite.material.map = createTextTexture('HBD Trapti', color);
          obj.sprite.material.needsUpdate = true;
        }
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      currentMount.removeChild(renderer.domElement);
      // Optional: dispose of Three.js objects to free up memory
      scene.traverse(object => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
        if (object.texture) object.texture.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ margin: 0, height: '100%', background: '#000', overflow: 'hidden' }} />;
};

export default Galaxy;