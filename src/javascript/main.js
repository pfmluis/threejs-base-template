import { updateCameraAspect } from './utils/camera.utils';
import { WebGL1Renderer, PerspectiveCamera, Scene, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

(() => {
  const canvas = document.querySelector('#canvas');
  const renderer = new WebGL1Renderer({canvas});
  const camera = new PerspectiveCamera(75, 2, 0.1, 5);
  const scene = new Scene();

  const cubeGeometry = new BoxGeometry(1, 1, 1);
  const cubeMaterial = new MeshBasicMaterial({color: 0xaa0000});
  const cube = new Mesh(cubeGeometry, cubeMaterial);

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
