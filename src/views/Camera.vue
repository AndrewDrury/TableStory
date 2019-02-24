<template>
  <div class="camera">
    <!-- <view class="container">
    <camera class="container" :type="this.type"/>
    </view>-->
    <b-row>
      <b-col>
        <input class="mt-4" type="file" accept="image/*" capture="camera">
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-btn class="my-4 btn-primary" v-on:click="upload">Upload</b-btn>
      </b-col>
    </b-row>
    <b-row class="text-left" style="margin: auto; left: 0px">
      <b-col>
        <video ref="video" id="webcam" width="640" height="480" autoplay></video>
        <b-btn id="snap" v-on:click="capture()">Snap Photo</b-btn>
      </b-col>
    </b-row>

    <b-row class="botnav">
      <nav-bar></nav-bar>
    </b-row>
  </div>
</template>

<style>
.botnav {
  position: absolute;
  bottom: 0px;
  margin-left: auto;
  width: 100%;
}
</style>


<script>
import nav from "@/components/BottomNav.vue";
import * as tf from "@tensorflow/tfjs";

let img = new Image();
img.src = "/img/pizza1.jpg";
console.log("width: ", img.width);
console.log("height: ", img.height);

console.log("Image: ", img);

export default {
  components: {
    "nav-bar": nav
  },
  data: () => {
    return {
      predValue: ""
    };
  },
  methods: {
    async loadModel() {
      const model = await tf
        .loadLayersModel("http://localhost:8081/model.json")
        .then(promisedModel => {
          console.log("LOADED");
          let img = new Image(261, 264);
          img.src = "@/assets/pizza1.jpg";
          //   const example = tf.fromPixels(new ImageData(261, 264));
          //   const example = tf.fromPixels(new ImageData(img.width, img.height));
          const example = tf.fromPixels(new ImageData(img.width, img.height));
          console.log("example: ", example);
          const prediction = promisedModel.predict(example);
          predValue = prediction;
        })
        .catch(err => {
          console.log("ERROR");
          console.log(err);
        });
    },
    upload() {}
  },
  mounted() {
    this.loadModel();

    navigator.mediaDevices
      .enumerateDevices()
      .then(devices => {
        console.log("devices: ", devices);
        // this is the webcam id of webcam. WILL NEED TO CHANGE THIS FOR THE LOGITECH WEBCAM
        let webcam = devices.filter(
          v =>
            v.deviceId ==
            "eb088f8f601ce903675e2e16cc260192d0dedab4f9f515ed37847416b1b6d463"
        )[0];
        let mic = devices.filter(
          v =>
            v.deviceId ==
            "a54f598b6bedb363b459c7158a4563025f11910198f2456bb4f9fe72537ce601"
        )[0];
        if (!webcam) {
          console.log("No web!");
          return;
        } else {
          console.log(webcam);
        }

        let constraints = {
          audio: false,
          video: {
            deviceId: { ideal: webcam.deviceId },
            width: { ideal: window.innerWidth },
            height: { ideal: window.innerHeight }
          }
        };
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(stream => {
            const video = document.getElementById("webcam");
            video.srcObject = stream;
            console.log("DONE");
          })
          .catch(err => {
            console.log(err.name + ": " + err.message);
          });
      })
      .catch(err => {
        console.log(err.name + ": " + err.message);
      });
  }
};
</script>