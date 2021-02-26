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
      gltf: undefined,
      video: undefined,
      videoImage: undefined,
      videoImageContext: undefined,
      videoTexture: undefined,
      clock: new THREE.Clock(),
      videoSource: undefined,
      model: undefined,
      change: false,
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
      const action = this.mixer.clipAction(this.gltf.animations[0]);

      action.play();
      this.scene.add(this.model);
      this.change = false;
      console.log("hello");
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
      this.camera.position.set(100, 200, 300);

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

      const pointLight = new THREE.PointLight(0xffffff, 0.8);

      this.camera.add(pointLight);
      this.scene.add(this.camera);

      //gltf
      this.loader = new GLTFLoader();
      this.loader.load(
        "./fbx/gltfpose.gltf", // todo: 여기를 동적으로 변경
        (gltf) => {
          this.gltf = gltf;
          this.model = gltf.scene;
          this.mixer = new THREE.AnimationMixer(this.model);
          const action = this.mixer.clipAction(this.gltf.animations[1]);

          action.play();

          this.model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          // 모델의 크기 조정
          this.model.scale.set(70, 70, 70);
          this.model.position.set(190, 0, -50);

          this.scene.add(this.model);
        },
        undefined,
        (error) => {
          console.log(error);
        }
      );
      // fbx model을 사용할 때 코드
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

      // controls // 컨트롤 안해도 될거 같음
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.target.set(0, 100, 0);
      this.controls.update();

      window.addEventListener("resize", this.onWindowResize, false);

      this.renderer.setSize(window.innerWidth * 0.79, window.innerHeight);
    },
    onWindowResize() {
      this.camera.aspect = (window.innerWidth * 0.79) / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth * 0.79, window.innerHeight);
    },
    animate() {
      requestAnimationFrame(this.animate);
      const delta = this.clock.getDelta();

      if (this.mixer) this.mixer.update(delta);

      this.renderer.render(this.scene, this.camera);
    },
    getTime() {
      const vid = document.getElementById("vid");

      // 현재 영상 시간
      // console.log(vid.currentTime);

      // 끝나는 시간
      // console.log(vid.duration);
      // 애니메이션 변경
      if (vid.currentTime >= vid.duration * 0.1 && !this.change) {
        // gltf는 불러온 gltf
        // model은 gltf.scene()
        this.mixer = new THREE.AnimationMixer(this.model);
        const action = this.mixer.clipAction(this.gltf.animations[2]); // todo : 동적으로 변경해야함

        action.play();

        this.scene.add(this.model);
        // 동작을 바뀌었으면 True로 설정을 해서 더 이상 동작이 바뀌지 않도록
        this.change = true;
      }
    },
    checkTime() {
      setInterval(this.getTime, 1000);
    },
  },
  mounted() {
    this.init();
    this.animate();
    this.checkTime();
    this.videoSource = this.getVideo;
  },
};
</script>

<style scoped>
#vid {
  position: absolute;
  width: 100%;
  /* height: 100%; */
  z-index: -1;
}
</style>
