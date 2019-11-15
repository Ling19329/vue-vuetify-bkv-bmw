<template>
  <div :class="panelBackground">
    <p class="mb-2 subtitle text-left pl-2">Stationär</p>
    <v-card class="mx-auto pa-10" outlined>
      <slot>No slot content defined</slot>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ProductPanel",
  props: {
    panelTitle: String,
    panelDescription: String,
    panelBackground: String
  },
  data() {
    return {};
  }
};
</script>
<style scoped>

</style>