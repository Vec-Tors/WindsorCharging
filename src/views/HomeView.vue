<script setup lang="ts">
import * as L from "leaflet";
import MapView from "../components/mapView.vue";

// Add OSM tile layer to the Leaflet map.
</script>

<template>
  <main>
    <MapView />
  </main>
</template>
<style scoped>
main {
  position: absolute;
  background-color: #001431;
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0%;
  z-index: -1;
}
.map {
  height: 500px;
  width: 500px;
  z-index: 1;
}
</style>
