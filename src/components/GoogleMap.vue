<template>
  <div class="map" :id="mapName"></div>
</template>

<script>
import Vue from "vue";

const themeRed = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36
      },
      {
        color: "#333333"
      },
      {
        lightness: 40
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#ffffff"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#fefefe"
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#fefefe"
      },
      {
        lightness: 17
      },
      {
        weight: 1.2
      }
    ]
  },
  {
    featureType: "administrative.province",
    elementType: "labels.text",
    stylers: [
      {
        saturation: "22"
      },
      {
        color: "#ff0000"
      },
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.province",
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#E86464"
      },
      {
        saturation: "51"
      },
      {
        lightness: "6"
      }
    ]
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#0a0101"
      },
      {
        lightness: "-61"
      },
      {
        saturation: "-24"
      },
      {
        gamma: "0.72"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#000000"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5"
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5"
      },
      {
        lightness: 21
      }
    ]
  },
  {
    featureType: "poi.business",
    elementType: "all",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "poi.business",
    elementType: "labels.icon",
    stylers: [
      {
        color: "#E86464"
      },
      {
        saturation: "21"
      },
      {
        lightness: "20"
      }
    ]
  },
  {
    featureType: "poi.government",
    elementType: "all",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "poi.government",
    elementType: "labels.icon",
    stylers: [
      {
        color: "#000000"
      },
      {
        weight: "1.00"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "all",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#dedede"
      },
      {
        lightness: 21
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#dfdfdf"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#E86464"
      },
      {
        saturation: "31"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff"
      },
      {
        lightness: 17
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#ffffff"
      },
      {
        lightness: 29
      },
      {
        weight: 0.2
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff"
      },
      {
        lightness: 18
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3a3a3a"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: "42"
      },
      {
        saturation: "7"
      },
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#f2f2f2"
      },
      {
        lightness: 19
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#e9e9e9"
      },
      {
        lightness: 17
      }
    ]
  }
];

export default Vue.extend({
  name: "google-map",
  props: {
    name: {
      default: () => "google-map",
      type: String,
      required: true
    },
    coords: {
      default: () => [{ lat: 43.451021, lng: -80.498524 }],
      type: Array
    },
    centerCoord: {
      default: () => {
        return { lat: 43.451021, lng: -80.498524 };
      },
      type: Object
    },
    imageUrl: {
      default: () => "",
      type: String
    },
    theme: {
      default: themeRed,
      type: String
    },
  },
  data: function() {
    return {
      mapName: this.name,
      markerCoords: this.coords,
      center: this.centerCoord,
      markerImage: this.imageUrl
    };
  },
  mounted() {
    const element = document.getElementById(this.mapName);
    const options = {
      zoom: 14,
      center: this.center,
      styles: this.theme
    };
    // eslint-disable-next-line
    const map = new google.maps.Map(element, options);
    this.markerCoords.forEach(coord => {
      var icon = {
        url: this.markerImage,
        scaledSize: new google.maps.Size(29.52, 45.6)
      };
      // eslint-disable-next-line
      const marker = new google.maps.Marker({
        position: coord,
        map: map,
        icon: this.markerImage.length ? icon : this.markerImage
      });
    });
  },
});
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: gray;
}
</style>
