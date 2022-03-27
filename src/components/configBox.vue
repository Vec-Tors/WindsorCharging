<template>
  <main>
    <p>
      <input
        type="checkbox"
        value="Existing"
        @change="$emit('data', configValues)"
        :checked="configValues.showExisting"
      />
      Show Existing/Built
    </p>
    <p>
      <input
        type="checkbox"
        value="Disabled"
        @change="$emit('data', configValues)"
        :checked="configValues.showDisabled"
      />
      Show Temporarily Disabled
    </p>
    <p>
      <input
        type="checkbox"
        value="Operational"
        @change="$emit('data', configValues)"
        v-model="configValues.showOperational"
      />
      Show Operational
    </p>

    <br />
    <p>
      <input
        type="checkbox"
        value="Generated"
        @change="$emit('data', configValues)"
        v-model="configValues.showGenerated"
      />
      Show Generated
    </p>
    <br />
    <input
      type="number"
      class="inpField"
      @change="$emit('data', configValues)"
      v-model.number="configValues.amountToGenerate"
    />
    <p>Amount To Generate</p>
    <p>Charger Types:</p>
    <p v-for="charger in chargeTypes" :key="charger">
      {{ charger
      }}<input
        type="checkbox"
        class="inpField"
        @change="
          () => {
            $emit('data', configValues);
            
          }
        "
      />
    </p>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
let chargeTypes = [
  "NEMA1450",
  "NEMA515",
  "NEMA520",
  "J1772",
  "J1772COMBO",
  "CHADEMO",
  "TESLA",
];
defineEmits(["data"]);
const props = defineProps<{
  showExisting: boolean;
  showDisabled: boolean;
  showGenerated: boolean;
  showOperational: boolean;
  amountToGenerate: number;
  chargers: Array<
    | "NEMA1450"
    | "NEMA515"
    | "NEMA520"
    | "J1772"
    | "J1772COMBO"
    | "CHADEMO"
    | "TESLA"
  >;
}>();
let configValues = ref({
  showExisting: props.showExisting,
  showDisabled: props.showDisabled,
  showGenerated: props.showGenerated,
  showOperational: props.showOperational,
  amountToGenerate: props.amountToGenerate,
  chargers: props.chargers,
});
</script>
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
