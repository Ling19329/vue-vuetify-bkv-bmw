<template>
  <div id="app">
    <v-app id="inspire">
      <page-header name="page-header" />
      <page-content />
      <page-footer />
    </v-app>
  </div>
</template>
<script>
import PageHeader from "@/views/templates/Header";
import PageContent from "@/views/templates/Content";
import PageFooter from "@/views/templates/Footer";
export default {
  name: "app",
  components: {
    PageHeader,
    PageContent,
    PageFooter
  },
  mounted() {}
};
</script>
<style>
#app {
  font-family: "Meta Pro", Medium, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.v-application .primary--text {
    color: #1976d2 !important;
    caret-color: #1976d2 !important;
}


</style>
