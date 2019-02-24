<template>
  <div>
    {{ predValue }}
    <b-row>
      <b-col>
        <img src="@/assets/pizza1.jpg">
      </b-col>
    </b-row>
  </div>
</template>

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
          imageData;
          //   const example = tf.fromPixels(new ImageData(img.width, img.height));
          const prediction = promisedModel.predict(example);
          predValue = prediction;
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
