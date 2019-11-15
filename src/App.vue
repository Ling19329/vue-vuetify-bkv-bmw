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
<style lang="scss">
#app {
  font-family: "Meta Pro-Regular", Medium, Arial, sans-serif!important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
