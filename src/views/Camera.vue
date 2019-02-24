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
        <b-btn class="mt-4" v-on:click="upload">Upload</b-btn>
      </b-col>
    </b-row>
    {{ predValue }}
  </div>
</template>

<style>
</style>


<script>
import * as tf from "@tensorflow/tfjs";

let img = new Image();
img.src = "@/assets/pizza1.jpg";

export default {
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
          let img = new Image();
          img.src = "@/assets/pizza1.jpg";
          const example = tf.fromPixels(new ImageData(261, 264));
          //   const example = tf.fromPixels(new ImageData(img.width, img.height));
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
  }
};
</script>
