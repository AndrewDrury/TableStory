<template>
  <div class="other-profile">
    <b-container fluid class="p-0">
      <b-col class="p-0">
        <b-row class="card-top m-0">
          <b-col>
            <b-row>
              <div style="font-size: 27px;">Amy King</div>
            </b-row>
            <b-row>
              <div class="desc">Meat-Lover. 22. Coffee always.</div>
            </b-row>
            <b-row>
              <div class="count">19 serving 70 served</div>
            </b-row>
            <b-row>
              <b-btn class="btn btn-light" style="font-size: 11px; width: 90%; padding-top: 2px; padding-bottom: 2px;">Serve Me</b-btn>
            </b-row>
          </b-col>
          <b-col class="d-flex align-items-center" style="background:url('/img/pizza1.jpg')">
          </b-col>
        </b-row>
        <b-row class="pl-4 pl-4 mt-3 mb-3">
          <b-btn class="mr-2 btn btn-primary" style="font-size: 11px; width: 20%; padding-top: 5px; padding-bottom: 5px;">Dishes</b-btn>
          <b-btn class="mr-5 btn btn-light" style="font-size: 11px; width: 20%; padding-top: 5px; padding-bottom: 5px;">Places</b-btn>
          <div class="ml-3" style="width: 25.5%; height: 28px; background:url('/img/view-buttons.png'); background-size: contain;">
            <h4> &nbsp; </h4>
          </div>
        </b-row>
        <b-row class="pl-4 pr-4">
          <b-card class="card-gen">
            <b-col>
              <b-row>
                <b-col>
                  <b-row class="image left">
                  </b-row>
                </b-col>
                <b-col>
                  <b-row class="image right" style="margin-bottom: 15px;">
                  </b-row>
                  <b-row class="image right">
                  </b-row>
                </b-col>
              </b-row>
              <b-row>
                <b-row>
                  <b-col class="text-left" style="font-size: 14px;">Toronto Pizza</b-col>
                  <div class="" style="width: 27%; background: url('/img/star.png'); background-size: cover">
                    <h4> &nbsp; </h4>
                  </div>
                </b-row>
              </b-row>
            </b-col>
          </b-card>
        </b-row>
        <b-row class="pl-4 pr-4">
          <b-card class="card-gen">
            <b-col>
              <b-row>
                <b-col>
                  <b-row class="image left">
                  </b-row>
                </b-col>
                <b-col>
                  <b-row class="image right" style="margin-bottom: 15px;">
                  </b-row>
                  <b-row class="image right">
                  </b-row>
                </b-col>
              </b-row>
              <b-row>
                <b-row>
                  <b-col class="text-left" style="font-size: 14px;">Toronto Pizza</b-col>
                  <div class="" style="width: 27%; background: url('/img/star.png'); background-size: cover">
                    <h4> &nbsp; </h4>
                  </div>
                </b-row>
              </b-row>
            </b-col>
          </b-card>
        </b-row>
        <b-row>
          <nav-bar></nav-bar>
        </b-row>
      </b-col>
    </b-container>
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
  width: 90%
}

.image {
  background: url('/img/pizza1.jpg');
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
