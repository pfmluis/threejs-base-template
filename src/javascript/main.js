import * as THREE from '../../assets/three.module';
import { updateCameraAspect } from './utils/camera.utils';

(() => {
  const canvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGL1Renderer({canvas});
  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 5);
  const scene = new THREE.Scene();

  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xaa0000});
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  camera.position.z = 2;
  scene.add(cube);

  const animate = () => {
    updateCameraAspect(camera, renderer);
    cube.rotation.y += 0.02;
    renderer.render(scene, camera);

    requestAnimationFrame(animate);
  };

  animate();
})();
