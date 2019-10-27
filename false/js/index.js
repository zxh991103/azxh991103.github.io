'use strict';

console.clear();
var ww = window.innerWidth;
var wh = window.innerHeight;

// WebGL Rendering Engine

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(ww, wh);
document.body.appendChild(renderer.domElement);

// New Scene
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xefefef);
scene.fog = new THREE.Fog(0x000000, 250, 1400);

// Perspective Camera
var camera = new THREE.PerspectiveCamera(45, ww / wh, 0.1, 1500);

// Position x,y,z axis of camera
camera.position.set(0, 0, 200);

var controls = new THREE.OrbitControls(camera);

// create the mesh from geometry and material
var loader = new THREE.FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
  var geometry = new THREE.TextBufferGeometry('Wishing you a wonderful love', {
    font: font,
    size: 16,
    height: 12
  });
  var material = new THREE.MeshPhongMaterial({ color: 0xdcdcdc });
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = -70;
  scene.add(mesh);
});

var dlight = new THREE.DirectionalLight(0xffffff);
var plight = new THREE.PointLight(0xffffff);
plight.position.set(50, 15, 30);

scene.add(dlight);
scene.add(plight);

// render the scene
var render = function render() {
  requestAnimationFrame(render);
  controls.update();
  renderer.render(scene, camera);
};

render();