<template>
  <div class="welcome">
    <b-container fluid class="p-0" style="height: 100vh;">
      <video class="background-size: cover;" autoplay muted loop id="myVideo">
        <source src="@/assets/Welcome.mp4" type="video/mp4">
      </video>
      <!-- <b-col class="overlay">
        <b-row>
          <h1 style="margin:auto;">Welcome to blank!</h1>
        </b-row>
        <b-row>
          <b-col>
            <img src="@/assets/logo.png" class="image" height="96" width="96">
          </b-col>
        </b-row>
      </b-col>-->
      <b-carousel
        class="overlay"
        id="carousel1"
        controls
        indicators
        :interval="40000"
        img-width="1024"
        img-height="700"
        v-model="slide"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with custom text -->
        <b-carousel-slide class="transparent" style="height: 250px;">
          <img src="@/assets/logo-plate.png" class="image" height="55" width="55">
          <h1 class="mt-4">Welcome to</h1>
          <h1 class="mb-4">TableStory</h1>
        </b-carousel-slide>

        <b-carousel-slide class="transparent" style="height: 250px;">
          <img src="@/assets/logo-photo.png" class="image" height="47" width="47">
          <h1 class="mt-4">Upload Your</h1>
          <h1 class="mb-4">Tasty Pics</h1>
        </b-carousel-slide>

        <b-carousel-slide class="transparent" style="height: 250px;">
          <img src="@/assets/logo-map.png" class="image" height="45" width="45">
          <h1 class="mt-4">Discover New</h1>
          <h1 class="mb-4">Places to Eat</h1>
        </b-carousel-slide>

        <b-carousel-slide class="transparent" style="height: 250px;">
          <img src="@/assets/logo-users.png" class="image" height="50" width="50">
          <h1 class="mt-4">Build Your</h1>
          <h1 class="mb-4">Food Network</h1>
        </b-carousel-slide>
      </b-carousel>
      <a class="bottom" href="/build-profile/">Next</a>
    </b-container>
  </div>
</template>

<style lang="scss">
@import url("/src/assets/main.scss");

#myVideo {
  display: block;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: -40em;
  margin-left: auto;
}

.transparent {
  background-color: rgba($color: #fff, $alpha: 0);
}

.bottom {
  width: 100%;
  color: white;
  background-color: rgba($color: #fff, $alpha: 0);
  position: absolute;
  top: 600px;
  left: 0px;
  font-size: 20px;
}

h1 {
  color: white;
}
</style>


<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.extend({
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  name: "welcome",
  components: {
    HelloWorld
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
});
</script>