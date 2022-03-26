<script setup lang="ts">
import { ref } from "vue";
import MapView from "../components/mapView.vue";
let points = ref({
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
});
</script>

<template>
  <main>
    <MapView :points="points.points" class="map" />
    <div class="cont">
      <div class="obj"></div>
      <div class="obj"></div>
      <div class="obj"></div>
      <div class="obj"></div>
      <div class="obj"></div>
      <div class="obj"></div>
      <div class="obj"></div>
      <div class="obj"></div>
    </div>
  </main>
</template>
<style scoped>
main {
  background-color: #001431;
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0%;
  position: absolute;
}
.map {
  position: fixed;
  z-index: 0;
}
.cont {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
}
.obj {
  position: relative;
  z-index: 2;
  background-color: green;
  opacity: 0.5;
  height: 10%;
  width: 10%;
  margin: 2%;
}
</style>
