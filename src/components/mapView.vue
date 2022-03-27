<template>
  <div style="height: 100%; width: 100%">
    <l-map zoom="11" :center="[42.141739, -82.784338]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
      ></l-tile-layer>

      <l-marker
        class="mark"
        v-for="point of this.OldPoints"
        :lat-lng="[
          point.geometry.coordinates[1],
          point.geometry.coordinates[0],
        ]"
        :key="point[0]"
        :icon="this.icon"
      >
        <l-popup>
          Address:
          {{ point.properties.street_address }}
          Lat: {{ point.geometry.coordinates[1] }} Long:
          {{ point.geometry.coordinates[0] }}
        </l-popup>
      </l-marker>

      <l-marker
        class="mark"
        v-for="point of this.NewPoints"
        :lat-lng="[
          point.geometry.coordinates[1],
          point.geometry.coordinates[0],
        ]"
        :key="point[0]"
        :icon="this.iconB"
      >
        <l-popup>
          Address:
          {{ point.properties.address }}\n Lat:
          {{ point.geometry.coordinates[1] }} Long:
          {{ point.geometry.coordinates[0] }}
        </l-popup>
      </l-marker>
      <l-control-layers />
    </l-map>
  </div>
</template>
<script lang="ts">
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LControlLayers,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LControlLayers,
  },
  props: {
    OldPoints: Array,
    NewPoints: Array,
  },
  data() {
    return {
      zoom: 11,
      center: [42.141739, -82.784338],
      OldiconLink: "./lighting.png",
      icon: L.icon({
        iconUrl:
          "https://img.icons8.com/ios-filled/500/000000/lightning-bolt--v1.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
      iconB: L.icon({
        iconUrl: "https://img.icons8.com/nolan/96/lightning-bolt.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
    };
  },
  computed: {},
  mounted() {},
};
</script>
<style scoped></style>
