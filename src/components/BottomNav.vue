<template>
  <v-card class="card">
    <b-container>
      <b-row>
        <b-col class="d-flex float-right" cols="3" @click="toPlaces">
          <img src="/img/map-paper.png">
        </b-col>
        <b-col class="d-flex align-items-center" cols="2" @click="toDishes">
          <img src="/img/users-2.png">
        </b-col>
        <b-col class="d-flex float-left" cols="2" @click="toCamera">
          <img src="/img/photo-camera.png">
        </b-col>
        <b-col class="d-flex align-items-center" cols="2" @click="toFavourites">
          <img src="/img/star-2.png">
        </b-col>
        <b-col class="d-flex float-left" cols="3" @click="toProfile">
          <img src="/img/user.png">
        </b-col>
      </b-row>
    </b-container>
  </v-card>
</template>

<style>
.card {
  border-radius: 0px;
  box-shadow: 0 2px 27px 0 rgba(198, 195, 180, 0.5);
  width: 100%;
  margin-top: 20px;
  bottom: 0;
}
</style>

<script>
export default {
  methods: {
    toPlaces() {
      this.$router.push("/discover-places");
      // this.$router.go("discover-places");
    },
    toDishes() {
      this.$router.push("/discover-dishes");
    },
    toCamera() {
      this.$router.push("/camera");
    },
    toProfile() {
      this.$router.push("/my-profile");
    },
    toFavourites() {
      this.$router.push("/favourites");
    }
  }
};
</script>


