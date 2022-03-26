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
  data() {
    return {
      zoom: 11,
      center: [42.141739, -82.784338],
      points: [
        [42.167112, -82.816715],
        [42.173674, -82.819467],
        [42.183564, -82.83277],
        [42.2498644, -82.9496771],
        [42.226898, -82.994958],
        [42.226869, -82.995019],
        [42.308918, -82.870616],
        [42.036245, -82.714061],
        [42.034764, -82.917965],
        [42.314019, -82.916044],
        [42.24031, -83.013994],
        [42.313713, -82.924253],
        [42.282045, -82.981717],
        [42.273189, -83.00278],
        [42.27347, -83.00262],
        [42.273293, -83.00354],
        [42.274246, -83.006671],
        [42.292654, -83.012514],
        [42.305572, -83.001366],
        [42.299522, -83.012098],
        [42.245404, -83.058533],
        [42.273169, -83.047966],
        [42.239116, -82.550227],
        [42.325065, -83.007556],
        [42.3172986, -83.0444972],
        [42.241722, -83.102857],
      ],
    };
  },
  computed: {},
};
</script>
