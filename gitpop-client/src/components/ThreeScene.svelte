<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  import modeURL from '../assets/Itachi-9_2_2024.glb'

  let canvas: HTMLCanvasElement;
  let model: THREE.Group;
  let pivot: THREE.Object3D

  onMount(() => {
    // Set up scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    // Convert rem to pixels
    const remToPixels = (rem: number) => {
      return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    };

    // Set canvas size using rem units
    const widthInRem = 8; // Example: 10rem
    const heightInRem = 10.5; // Example: 10rem
    const widthInPixels = remToPixels(widthInRem);
    const heightInPixels = remToPixels(heightInRem);
    renderer.setSize(widthInPixels, heightInPixels);

    // Update camera aspect ratio to match canvas size
    camera.aspect = widthInPixels / heightInPixels;
    camera.updateProjectionMatrix();

    camera.position.z = .3;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Create a pivot object
    pivot = new THREE.Object3D();
    scene.add(pivot);

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load(modeURL, (gltf) => {
      model = gltf.scene;

      // Center the model's geometry
      model.traverse((child) => {
        if (child.isMesh) {
          child.geometry.center();
        }
      });

      pivot.add(model); // Add the loaded model to the pivot
      model.position.set(0, 0, 0); // Ensure the model is centered within the pivot
      model.scale.set(1, 1, 1); // Adjust the scale if needed

      animate();
    }, undefined, (error) => {
      console.error('An error happened while loading the model:', error);
    });

    //animate
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the pivot on its axis
      if (pivot) {
        pivot.rotation.y += 0.01; // Adjust the rotation speed as needed
      }

      renderer.render(scene, camera);
    }

    // Handle resizing
    window.addEventListener('resize', () => {
      const aspect = window.innerWidth / window.innerHeight;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  });
</script>

<canvas bind:this={canvas}></canvas>

<style>
  /* canvas {
    height: 8rem;
    width: 12rem;
  } */
</style>
