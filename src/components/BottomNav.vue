<template>
  <v-card class="card">
    <b-container>
      <b-row>
        <b-col class="d-flex align-items-center" style="width: 20%;">
          <a :to="'/discover-places/'">
            <img src="/img/map-paper.png">
          </a>
        </b-col>
        <b-col class="d-flex align-items-center" style="width: 20%;" @click="toDishes">
          <img src="/img/users-2.png">
        </b-col>
        <b-col class="d-flex align-items-center" style="width: 20%;" @click="toCamera">
          <img src="/img/photo-camera.png">
        </b-col>
        <b-col class="d-flex align-items-center" style="width: 20%;">
          <img src="/img/star-2.png">
        </b-col>
        <b-col class="d-flex align-items-center" style="width: 20%;" @click="toProfile">
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
      this.$router.push("discover-places");
    },
    toDishes() {
      this.$router.push("discover-dishes");
    },
    toCamera() {
      this.$router.push("camera");
    },
    toProfile() {
      this.$router.push("my-profile");
    }
  }
};
</script>


