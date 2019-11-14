<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7" sm="10">
          <main-panel :panelTitle="panelTitle">
            <template v-slot>
              <p :class="[ $vuetify.breakpoint.smAndUp ? 'px-10' : 'title' ] + ' text-start'">Zur Berechnung Ihres persönlichen Beitrags, benötigen wir ihr Geburtsdatum.</p>
              <v-btn depressed large color="error" class="mt-4">Jetzt Starten</v-btn>
            </template>
          </main-panel>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src

import MainPanel from "@/views/templates/MainPanel.vue";
export default {
  name: "InputDayOfBirthday",
  components: {
    MainPanel
  },
  data() {
    return {
      panelTitle: "Mein Geburtsdatum"
    }
  }
};
</script>
