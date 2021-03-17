<template>
  <div>
    <div id="motion">
      <P5 v-on="{ setup, draw }" />
    </div>
    <!-- <div id="video" v-show="this.toggle"> -->
    <div id="video" v-show="true">
      <Video />
    </div>
  </div>
</template>

<script>
import P5 from "vue-p5";
import ml5 from "ml5";
import Video from "@/components/Video.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Game",
  components: {
    P5,
    Video,
  },
  data() {
    return {
      video: undefined,
      poseNet: undefined,
      pose: undefined,
      skeleton: undefined,
      brain: undefined,
      learningModel: undefined,
      image: undefined,
      toggle: false,
      active: false,
      modelInfo: {
        model: undefined,
        metadata: undefined,
        weights: undefined,
      },
      brainInfo: {
        model: "/model/model.json",
        metadata: "/model/model_meta.json",
        weights: "/model/model.weights.bin",
      },
      options: {
        input: 22,
        output: 2,
        task: "classification",
      },
      count: 0,
      modelCount: 0,
    };
  },
  computed: {
    ...mapGetters({
      getStep: "game/step",
      getActive: "game/active",
      getMotion: "game/motion",
    }),
  },
  watch: {
    getActive() {
      this.active = this.getActive;
    },
    getMotion() {
      this.$http
        .get(`http://127.0.0.1:3000/model-info/action-name/${this.getMotion}`)
        .then((res) => {
          const data = res.data;

          console.log(data);
          this.learningModel.load(
            {
              model: `/model/${data.name}`,
              metadata: `/model/${data.metadata}`,
              weights: `/model/${data.weight}`,
            },
            this.modelLoaded
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  methods: {
    ...mapMutations({
      setStep: "game/STEP_UPDATED",
      setSuccess: "game/SUCCESS_UPDATED",
    }),
    setup(sketch) {
      sketch.createCanvas(window.innerWidth * 0.8, window.innerHeight);
      sketch.background(0);

      this.video = sketch.createCapture(sketch.VIDEO);
      this.video.size(window.innerWidth * 0.8, window.innerHeight);
      this.video.hide();

      this.poseNet = ml5.poseNet(this.video, this.Loaded);
      this.poseNet.on("pose", this.gotPoses);
      this.brain = ml5.neuralNetwork(this.options);
      this.learningModel = ml5.neuralNetwork(this.options);
      this.brain.load(this.brainInfo, this.brainLoaded);

      //  몽타주 이미지
      this.image = sketch.loadImage("/images/test.png");

      // resize
      addEventListener("resize", this.resize, false);
    },
    draw(sketch) {
      if (this.temp) return; //나중에 toggle로
      sketch.push();
      sketch.translate(this.video.width, 0);
      sketch.scale(-1, 1);
      sketch.image(
        this.video,
        0,
        0,
        document.body.clientWidth * 0.8,
        document.body.clientHeight
      );
      sketch.image(
        this.image,
        0,
        0,
        document.body.clientWidth * 0.8,
        document.body.clientHeight
      );

      sketch.pop();

      sketch.fill(255, 255, 0);
      sketch.noStroke();
    },
    gotPoses(poses) {
      if (poses.length > 0) {
        this.pose = poses[0].pose;
        this.skeleton = poses[0].skeleton;
      }
    },
    Loaded() {},
    brainLoaded() {
      this.classifyPose();
    },
    modelLoaded() {
      this.modelClassifyPose();
      console.log("준비완료!");
    },
    classifyPose() {
      if (this.pose) {
        const inputs = [];

        for (let i = 0; i < this.pose.keypoints.length; i++) {
          const x = this.pose.keypoints[i].position.x;
          const y = this.pose.keypoints[i].position.y;

          inputs.push((x * 100) / window.innerWidth);
          inputs.push((y * 100) / window.innerHeight);
        }
        this.brain.classify(inputs, this.gotResult);
      } else {
        setTimeout(this.classifyPose, 100);
      }
    },
    modelClassifyPose() {
      if (this.pose) {
        const inputs = [];

        for (let i = 0; i < this.pose.keypoints.length; i++) {
          const x = this.pose.keypoints[i].position.x;
          const y = this.pose.keypoints[i].position.y;

          inputs.push((x * 100) / window.innerWidth);
          inputs.push((y * 100) / window.innerHeight);
        }
        this.learningModel.classify(inputs, this.modelGotResult);
      } else {
        setTimeout(this.modelClassifyPose, 100);
      }
    },
    gotResult(error, results) {
      this.classifyPose();
      let poseLabel;

      if (results[0].confidence > 0.75) {
        poseLabel = results[0].label;
      }
      if (poseLabel === "p") {
        this.count++;
      } else {
        this.count = 0;
        this.toggle = false;
      }
      if (this.count >= 5) {
        this.toggle = true;
      }
    },
    modelGotResult(error, results) {
      this.modelClassifyPose();
      let poseLabel;

      if (!this.toggle || this.active) return;
      if (results[0].confidence > 0.75) {
        poseLabel = results[0].label;
      }
      if (poseLabel === "p") {
        this.modelCount++;
        // this.setStep(this.getStep++);
      } else {
        this.modelCount = 0;
      }
      if (this.modelCount >= 100) {
        this.setSuccess(true);
        this.active = false;
      }
    },
  },
};
</script>

<style scoped>
#motion {
  position: absolute;
  z-index: 0;
}

#video {
  position: absolute;
  z-index: 5;
}
</style>
