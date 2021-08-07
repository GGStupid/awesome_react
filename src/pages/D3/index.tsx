import React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import left from "./images/left.jpg";
import right from "./images/right.jpg";
import top from "./images/top.jpg";
import bottom from "./images/bottom.jpg";
import back from "./images/back.jpg";
import front from "./images/front.jpg";

let camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer;
let geometry, material, box: THREE.Mesh;
let controls;

init();

function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10,
  );
  camera.position.z = 0.1;

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({ antialias: true });
  
  controls = new OrbitControls(camera, renderer.domElement);

  material = new THREE.MeshNormalMaterial();


  var materials = [];
  //根据左右上下前后的顺序构建六个面的材质集
  var texture_left = new THREE.TextureLoader().load(left);
  materials.push(new THREE.MeshBasicMaterial({ map: texture_left }));

  var texture_right = new THREE.TextureLoader().load(right);
  materials.push(new THREE.MeshBasicMaterial({ map: texture_right }));

  var texture_top = new THREE.TextureLoader().load(top);
  materials.push(new THREE.MeshBasicMaterial({ map: texture_top }));

  var texture_bottom = new THREE.TextureLoader().load(bottom);
  materials.push(new THREE.MeshBasicMaterial({ map: texture_bottom }));

  var texture_front = new THREE.TextureLoader().load(front);
  materials.push(new THREE.MeshBasicMaterial({ map: texture_front }));

  var texture_back = new THREE.TextureLoader().load(back);
  materials.push(new THREE.MeshBasicMaterial({ map: texture_back }));

  box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), materials);
  box.geometry.scale(1, 1, -1);
  scene.add(box);

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);
}

function animation(time: number) {
  box.rotation.y = time / 30000;

  renderer.render(scene, camera);
}

function D3() {
  return <div id="d3"></div>;
}
export default D3;
