<template>
  <v-layout row wrap justify-center>
    <v-col cols="12" sm="8" xs="12" class="mt-10 pt-10">
      <v-layout row wrap justify-center="">
        <v-col cols="12" sm="6">
          <h2>Ihre betriebliche Gesundheitsförderung</h2>
          <p class="pb-0 mb-0 mt-4 text-start caption">Geburtsdatum</p>
          <v-select
            class="mt-0 pt-0"
            :items="days"
            v-model="days[0]"
            :rules="[v => !!v || '']"
          ></v-select>
        </v-col>
      </v-layout>

      <v-btn large block primary>hello</v-btn>
    </v-col>
  </v-layout>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
  props: {},
  data() {
    return {
      days: ['01.12.2019']
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
</style>