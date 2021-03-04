<template>
  <div id="container">
    <video id="vid" :src="this.videoSource" autoplay />
  </div>
</template>

<script>
import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      camera: undefined,
      scene: undefined,
      renderer: undefined,
      controls: undefined,
      loader: undefined,
      mixer: undefined,
      video: undefined,
      videoTexture: undefined,
      clock: new THREE.Clock(),
      videoSource: undefined,
      model: undefined,
      followAudio: new Audio(),
      motions: [],
      animations: {},
    };
  },
  computed: {
    ...mapGetters({
      getContents: "game/contents",
      getStep: "game/step",
      getLessonName: "lesson/name",
      getLessonId: "lesson/lessonId",
    }),
    getVideo() {
      return `videos/lesson_${this.getLessonId}/${
        this.getContents[this.getStep].video
      }`;
    },
  },
  watch: {
    getStep() {
      this.videoSource = this.getVideo;
      this.mixer = new THREE.AnimationMixer(this.model);
      const action = this.mixer.clipAction(this.animations.explain);

      action.play();
      this.scene.add(this.model);
      this.change = false;
    },
  },
  methods: {
    init() {
      const container = document.getElementById("container");

      // // camera
      this.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        2000
      );
      this.camera.position.set(250, 150, 300);

      // // scene
      this.scene = new THREE.Scene();

      // renderer
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

      // 밝기 조절
      const pointLight = new THREE.PointLight(0xffffff, 4);

      this.camera.add(pointLight);
      this.scene.add(this.camera);

      //gltf
      this.loader = new GLTFLoader();
      this.loader.load(
        "./fbx/mellang2.gltf", // todo: 여기를 동적으로 변경
        (gltf) => {
          this.model = gltf.scene;
          this.mixer = new THREE.AnimationMixer(this.model);

          for (let i = 0; i < gltf.animations.length; i++) {
            this.motions.push(gltf.animations[i].name);
            this.animations[gltf.animations[i].name] = gltf.animations[i];
          }

          const action = this.mixer.clipAction(this.animations.clap);

          action.play();

          this.model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          // 모델의 크기 조정
          this.model.scale.set(20, 20, 20);
          this.model.position.set(190, -10, -50);

          this.scene.add(this.model);
        },
        undefined,
        (error) => {
          console.log(error);
        }
      );

      // controls // 컨트롤 안해도 될거 같음
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.target.set(0, 100, 0);
      this.controls.update();

      window.addEventListener("resize", this.onWindowResize, false);
      document
        .getElementById("vid")
        .addEventListener("ended", this.followMotion, false);

      this.renderer.setSize(window.innerWidth * 0.8, window.innerHeight);
    },
    onWindowResize() {
      this.camera.aspect = (window.innerWidth * 0.8) / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth * 0.8, window.innerHeight);
    },
    animate() {
      requestAnimationFrame(this.animate);
      const delta = this.clock.getDelta();

      if (this.mixer) this.mixer.update(delta);

      this.renderer.render(this.scene, this.camera);
    },
    followMotion() {
      //랜덤화
      let motion;

      while (motion === undefined || motion === "explain") {
        motion = this.motions[Math.floor(Math.random() * this.motions.length)];
      }

      this.mixer = new THREE.AnimationMixer(this.model);
      this.mixer.clipAction(this.animations[motion]).play();
      this.scene.add(this.model);

      // 음성 follow~
      // this.followAudio.play();
    },
    clap() {
      this.mixer = new THREE.AnimationMixer(this.model);
      this.mixer.clipAction(this.animations.clap).play();
      this.scene.add(this.model);
    },
  },
  mounted() {
    this.init();
    this.animate();
    this.followAudio.src = "./audio/followMe.wav";
    this.videoSource = this.getVideo;

    setInterval(() => {
      this.followMotion();
    }, 3000);
  },
};
</script>

<style scoped>
#vid {
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-color: black;
  /* height: 100vh; */
  z-index: -1;
}
</style>
