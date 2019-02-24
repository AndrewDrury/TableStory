<template>
  <div>
    {{ predValue }}
    <b-row>
      <b-col>
        <img src="/img/pizza1.jpg">
      </b-col>
    </b-row>
  </div>
</template>

<script>
import * as tf from "@tensorflow/tfjs";

let img = new Image();
img.src = "/img/pizza1.jpg";
console.log("width: ", img.width);
console.log("height: ", img.height);

console.log("Image: ", img);

export default {
  data: () => {
    return {
      predValue: ""
    };
  },
  methods: {
    async loadModel() {
      const model = await tf
        .loadModel("http://localhost:8081/model.json")
        .then(promisedModel => {
          console.log("LOADED");
          const example = tf.fromPixels(new ImageData(img.width, img.height));
          console.log("example: ", example);
          const prediction = promisedModel.predict(example);
          predValue = prediction;

          console.log("PREDVALUE: ", predValue);
        })
        .catch(err => {
          console.log("ERROR");
          console.log(err);
        });
    }
  },
  mounted() {
    this.loadModel();
  }
};
</script>
