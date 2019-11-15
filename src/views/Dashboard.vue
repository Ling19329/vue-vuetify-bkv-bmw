<template>
  <v-layout row wrap justify-center>
    <v-col cols="12" sm="8" xs="12" class="mt-10 pt-10">
      <v-layout column wrap >
        <v-row justify="center">
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
        </v-row>

        <v-row justify="center">
          <v-col cols="12" sm="3" xs="6">
            <product-panel panelBackground="primary">
              <div>slot content</div>
            </product-panel>
          </v-col>

          <v-col cols="12" sm="3" xs="6">
            <product-panel>
              <div>slot content</div>
            </product-panel>
          </v-col>

          <v-col cols="12" sm="3" xs="6">
            <product-panel>
              <div>slot content</div>
            </product-panel>
          </v-col>

          <v-col cols="12" sm="3" xs="6">
            <product-panel>
              <div>slot content</div>
            </product-panel>
          </v-col>
        </v-row>
      </v-layout>
      <v-btn large block primary>hello</v-btn>
    </v-col>
  </v-layout>
</template>

<script>
import ProductPanel from '@/components/ProductPanel.vue'
export default {
  name: "Dashboard",
  components: {
    ProductPanel
  },
  props: {},
  data() {
    return {
      days: ["01.12.2019"]
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
</style>