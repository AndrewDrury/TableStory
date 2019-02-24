<template>
  <div class="discover-places">
      <b-container fluid class="p-0">
        <b-col>
            <b-row>
                <h1 style="margin:auto;">Discover Places</h1>
            </b-row>
            <b-row style="width:1000px; height:1000px;">
              <google-map
                name="map"
                :coords="coords"
                :centerCoord="centerCoord"
              ></google-map>
            </b-row>
        </b-col>
    </b-container>
  </div>
</template>


<style lang="scss">
@import url("/src/assets/main.scss");
@import url("/src/assets/variables.scss");

</style>

<script>
import googleMap from '@/components/GoogleMap.vue'

export default {
  components: {
    'google-map' : googleMap,
  },
  data: () => {
    return {
      coords: [
        {
          lat: 43.7874696,
          lng: -79.2615894
        },
      ],
      centerCoord: {
        lat: 43.7874696,
        lng: -79.2615894
      }
    }
  }
}
</script>
