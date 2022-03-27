<template>
  <main>
    <p><input type="checkbox" value="Existing" /> Show Existing/Built</p>
    <p><input type="checkbox" value="Disabled" /> Show Temporarily Disabled</p>
    <p><input type="checkbox" value="Disabled" /> Show Operational</p>

    <br />
    <p><input type="checkbox" value="Generated" /> Show Generated</p>
    <br />
    <input type="number" class="inpField" value="10" />
    <p>Amount To Generate</p>
  </main>
</template>
<script setup lang="ts"></script>
<style scoped>
main {
  position: fixed;
  color: #ffffff;
  background-color: #001431;
  z-index: 10;
}
.inpField {
  width: 95%;
}
</style>
