<template>
  <div style="height: 100%; width: 100%">
    <l-map zoom="11" :center="[42.141739, -82.784338]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
      ></l-tile-layer>

      <l-marker v-for="point of this.points" :lat-lng="point" :key="point[0]">
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
  LControlLayers,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlLayers,
  },
  props: {
    points: Array,
  },
  data() {
    return {
      zoom: 11,
      center: [42.141739, -82.784338],
    };
  },
  computed: {},
  mounted() {
    console.log(this.points);
  },
};
</script>
