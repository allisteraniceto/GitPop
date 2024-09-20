<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  import modeURL from '../assets/Itachi-9_2_2024.glb'

  let canvas: HTMLCanvasElement;
  let model: THREE.Group;

  onMount(() => {
    // Set up scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    // Correct path to the GLB model
    // Set canvas size to full window size
    renderer.setSize(200, 200);
    camera.position.z = 1;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load(modeURL, (gltf) => {
      model = gltf.scene;
      scene.add(model); // Add the loaded model to the scene
      model.position.set(0, 0, 0); // Set the position of the model if needed
      model.scale.set(1, 1, 1); // Adjust the scale if needed
    }, undefined, (error) => {
      console.error('An error happened while loading the model:', error);
    });

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      if (model) {
        model.rotation.y += 0.01; // Rotate the model around the Y-axis
      }
      renderer.render(scene, camera);
    }
    animate();

    // Handle resizing
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  });
</script>

<canvas bind:this={canvas}></canvas>

<style>
  canvas {
    height: 8rem;
    width: 12rem;
  }
</style>
