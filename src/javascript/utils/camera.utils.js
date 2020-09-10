import { resizeRendererToDisplaySize } from './renderer.utils';

export function updateCameraAspect(camera, renderer) {
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
};
