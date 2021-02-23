<template>
  <div id="container">
    <video id="vid" :src="this.videoSource" autoplay />
  </div>
</template>

<script>
import * as THREE from "three";

// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import EventBus from "../EventBus";

export default {
  data() {
    return {
      stats: undefined,
      camera: undefined,
      scene: undefined,
      renderer: undefined,
      controls: undefined,
      loader: undefined,
      mixer: undefined,
      video: undefined,
      videoImage: undefined,
      videoImageContext: undefined,
      videoTexture: undefined,
      clock: new THREE.Clock(),
      videoSource: undefined,
      videoSources: [],
      model: undefined,
      change: false,
      stage: 0,
      mesh: undefined,
    };
  },
  methods: {
    init() {
      const container = document.getElementById("container");

      // document.body.appendChild(container); //이거 새로운 영역을 추가하는 거임

      // // camera
      this.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        2000
      );
      this.camera.position.set(100, 200, 300);

      // // scene
      this.scene = new THREE.Scene();

      // renderer
      // this.renderer = new THREE.WebGLRenderer({ antialias: true }); // 투명하게 할때 alpha 사용
      this.renderer = new THREE.WebGLRenderer({ alpha: true }); // 투명하게 할때 alpha 사용
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.shadowMap.enabled = true;
      container.appendChild(this.renderer.domElement);

      // light
      // character light
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);

      hemiLight.position.set(0, 200, 0);
      this.scene.add(hemiLight);

      const dirLight = new THREE.DirectionalLight(0xffffff);

      dirLight.position.set(0, 200, 100);
      dirLight.castShadow = true;
      dirLight.shadow.camera.top = 180;
      dirLight.shadow.camera.bottom = -100;
      dirLight.shadow.camera.left = -120;
      dirLight.shadow.camera.right = -120;
      this.scene.add(dirLight);

      // test
      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);

      this.scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 0.8);

      this.camera.add(pointLight);
      this.scene.add(this.camera);

      // ground
      // const mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false}));
      // mesh.rotation.x = Math.PI/2;
      // mesh.receiveShadow = true;
      // this.scene.add( mesh );

      // const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000);
      // grid.material.opacity = 0.2;
      // grid.material.transparent = true;
      // this.scene.add(grid);

      //gltf
      this.loader = new GLTFLoader();
      this.loader.load(
        "./fbx/gltfpose.gltf",
        (gltf) => {
          this.model = gltf.scene;
          this.mixer = new THREE.AnimationMixer(this.model);
          // const action = this.mixer.clipAction(this.model.animations[0]);

          // action.play();
          this.model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          this.model.scale.set(70, 70, 70);

          this.scene.add(this.model);
        },
        undefined,
        (error) => {
          console.log(error);
        }
      );
      // model
      // this.loader = new FBXLoader();
      // this.loader.load(
      //   "./fbx/pose12.fbx",
      //   (model) => {
      //     this.mixer = new THREE.AnimationMixer(model);
      //     this.model = model;

      //     model.scale.set(2, 2, 2);
      //     model.position.set(0, 0, -110);

      //     // character action
      //     const action = this.mixer.clipAction(model.animations[0]);

      //     action.play();

      // model.traverse((child) => {
      //   if (child.isMesh) {
      //     child.castShadow = true;
      //     child.receiveShadow = true;
      //   }
      // });

      //     this.scene.add(model);
      //   },
      //   undefined,
      //   (error) => {
      //     // console.log(error);
      //   }
      // );

      // controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.target.set(0, 100, 0);
      this.controls.update();

      window.addEventListener("resize", this.onWindowResize, false);

      // stats
      // this.stats = new Stats();
      // container.appendChild(this.stats.dom);

      this.renderer.setSize(window.innerWidth * 0.7, window.innerHeight);
    },
    onWindowResize() {
      this.camera.aspect = (window.innerWidth * 0.7) / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth * 0.7, window.innerHeight);
    },
    animate() {
      requestAnimationFrame(this.animate);
      const delta = this.clock.getDelta();

      if (this.mixer) this.mixer.update(delta);

      // this.stats.update();

      this.renderer.render(this.scene, this.camera);

      // keyboard
    },
    getTime() {
      const vid = document.getElementById("vid");

      // 현재 영상 시간
      // console.log(vid.currentTime);

      // 끝나는 시간
      // console.log(vid.duration);
      // 애니메이션 변경
      if (vid.currentTime >= vid.duration * 0.6 && !this.change) {
        this.mixer = new THREE.AnimationMixer(this.model);

        const action = this.mixer.clipAction(this.model.animations[1]);

        action.play();

        this.scene.add(this.model);

        this.change = true;
        console.log(this.change);
      }
    },
    checkTime() {
      setInterval(this.getTime, 1000);
    },
  },
  mounted() {
    this.init();
    this.animate();
    this.videoSources = ["/videos/lake.mp4", "/videos/tree.mp4"];
    this.videoSource = this.videoSources[this.stage];
    this.checkTime();
  },
  created() {
    EventBus.$on("next-step", () => {
      if (this.stage < this.videoSources.length) {
        this.stage++;
        this.videoSource = this.videoSources[this.stage];
      }
    });
  },
};
</script>

<style scoped>
#vid {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
