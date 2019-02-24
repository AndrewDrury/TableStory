<template>
  <div class="my-profile verticalCenter">
    <b-container fluid class="p-0">
      <b-col class="p-0">
        <b-row class="card-top m-0">
          <b-col>
            <b-row>
              <div style="font-size: 27px;">Joseph Birk</div>
            </b-row>
            <b-row>
              <div class="desc">Fitness freak. Big smoothie fan.</div>
            </b-row>
            <b-row class="py-2">
              <div class="count">0 serving</div>
              <div class="count ml-5">0 served</div>
            </b-row>
            <b-row>
              <b-btn
                class="btn btn-light"
                style="font-size: 11px; width: 90%; height: 2em; padding-top: 2px; padding-bottom: 2px;"
              >Edit Profile</b-btn>
            </b-row>
          </b-col>
          <b-col class="d-flex align-items-center" style="background:url('/img/pizza1.jpg')"></b-col>
        </b-row>
        <b-row>
          <b-col class="p-3">
            <b-row class="pl-4 pl-4 mt-3 mb-3">
              <b-btn
                class="mr-2 btn btn-primary"
                style="font-size: 11px; width: 20%; padding-top: 5px; padding-bottom: 5px;"
              >Dishes</b-btn>
              <b-btn
                class="mr-5 btn btn-light"
                style="font-size: 11px; width: 20%; padding-top: 5px; padding-bottom: 5px;"
              >Places</b-btn>
              <div
                class="ml-3"
                style="width: 25.5%; height: 28px; background:url('/img/view-buttons.png'); background-size: contain;"
              >
                <h4>&nbsp;</h4>
              </div>
            </b-row>
            <b-row class="px-4">
              <b-card class="card-gen">
                <b-col>
                  <b-row>
                    <b-col>
                      <b-row class="image imageItem left"></b-row>
                    </b-col>
                    <b-col>
                      <b-row class="image imageItem right" style="margin-bottom: 15px;"></b-row>
                      <b-row class="image imageItem right"></b-row>
                    </b-col>
                  </b-row>
                  <b-row class="pt-2">
                    <b-col class="text-left pl-0 pt-1" style="font-size: 14px;">Toronto Pizza</b-col>
                    <!-- <b-col> -->
                    <div
                      class="float-right rightAlign"
                      style="background: url('/img/star.png'); background-size: cover;"
                    >
                      <h4>&nbsp;</h4>
                    </div>
                    <!-- </b-col> -->
                  </b-row>
                </b-col>
              </b-card>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-container>
    <b-row class="botnav">
      <nav-bar></nav-bar>
    </b-row>
  </div>
</template>


<style lang="scss">
@import url("/src/assets/main.scss");
@import url("/src/assets/variables.scss");

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
  width: 100%;
}

.picture {
  width: 90%;
}

.imageItem {
  background: url("/img/pizza1.jpg");
  background-size: cover;
}

.left {
  width: 135px;
  height: 135px;
  margin-right: 0px;
}

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