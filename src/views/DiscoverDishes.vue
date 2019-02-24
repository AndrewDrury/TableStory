<template>
  <div class="discover-dishes verticalCenter">
    <b-container fluid class="p-0">
      <b-col class="p-0">
        <b-row class="card-top m-0">
          <b-col>
            <b-row>
              <div style="font-size: 20px;">Discover Dishes</div>
            </b-row>
            <b-row class="my-3">
              <b-btn
                class="btn btn-light"
                style="font-size: 11px; width: 14em; height: 2em; padding-top: 2px; padding-bottom: 2px;"
              >Search</b-btn>
            </b-row>
          </b-col>
        </b-row>

        <b-card class="card-gen" style="margin: auto;">
          <b-col>
            <b-row>
              <b-col>
                <b-row class="image imageItem left"></b-row>
              </b-col>
            </b-row>
            <b-row class="pt-2">
              <b-col class="text-left pl-0 pt-1" style="font-size: 14px;">55 bites</b-col>
              <div
                class="float-right rightAlign"
                style="background: url('/img/star.png'); background-size: cover;"
              >
                <h4>&nbsp;</h4>
              </div>
            </b-row>
            <b-row class="text-left">
              <label style="font-size: 13px;">
                Posted by
                <b>
                  <u>
                    <a to="/other-profile">Amy King</a>
                  </u>
                </b>
                5 hours ago
              </label>
            </b-row>
          </b-col>
        </b-card>
      </b-col>
    </b-container>
    <b-row class="botnav">
      <nav-bar></nav-bar>
    </b-row>
  </div>
</template>


<style lang="scss">
@import "../assets/main.scss";
@import "../assets/variables.scss";

.desc {
  font-size: 11px;
  color: #a2a2a2;
}

.count {
  font-size: 11px;
}

.card-top {
  border-radius: 0px;
  box-shadow: 0 2px 27px 0 rgba(198, 195, 180, 0.5);
  border: 1px solid #cbcbcb;
  padding: 10px;
  width: 100%;
}

.card-gen {
  border-radius: 8px;
  box-shadow: 0 2px 27px 0 rgba(198, 195, 180, 0.5);
  margin-top: 10px;
  width: 90%;
}

.picture {
  width: 90%;
}

.imageItem {
  background: url("/img/pizza1.jpg");
  background-size: cover;
}

.left {
  width: 90vw;
  height: 171px;
  margin-right: 0px;
}
// .full {
//   width: 100%;
//   height: 100%;
//   // height: 135px;
//   margin-right: 0px;
// }

.right {
  width: 75px;
  height: 60px;
}

.botnav {
  position: absolute;
  bottom: 0px;
  margin-left: auto;
  width: 100%;
}

.rightAlign {
  height: 23px;
  width: 23px;
}
</style>

<script>
import nav from "@/components/BottomNav.vue";

export default {
  components: {
    "nav-bar": nav
  },
  data: () => {
    return {};
  }
};
</script>
