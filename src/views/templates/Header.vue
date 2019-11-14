<template>
  <div>
    <v-app-bar color="white accent-4" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="primary--text display-1">Group</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="pr-4 mr-4">
        <div class="right-watermark"></div>
      </v-btn>

      </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>
<style scoped>
.right-watermark{
  background-image: url('../../assets/img/right-watermark.png');
  width: 100px;
  height: 50px;
  background-size: cover;
}
</style>