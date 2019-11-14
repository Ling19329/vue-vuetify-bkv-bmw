<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7" sm="10">
          <main-panel :panelTitle="panelTitle">
            <template v-slot>
              <div :class="{'px-10': $vuetify.breakpoint.smAndUp}">

              <p
                :class="[ $vuetify.breakpoint.smAndUp ? 'title' : 'title' ] + ' text-start mb-8'"
              >Zur Berechnung Ihres persönlichen Beitrags, benötigen wir ihr Geburtsdatum.</p>
              <p class="pb-0 mb-0 mt-4 text-start body-2">Geburtsdatum</p>
              <v-layout row>
                <v-col cols="12" sm="4" xs="12">
                  <v-select :items="days" label="TT"></v-select>
                </v-col>

                <v-col cols="12" sm="4" xs="12">
                  <v-select :items="months" label="MM"></v-select>
                </v-col>

                <v-col cols="12" sm="4" xs="12">
                  <v-select :items="years" label="JJJJ"></v-select>
                </v-col>
              </v-layout>

              <v-btn depressed large color="error" class="mt-4">Preise Berechnen</v-btn>
              </div>
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
      panelTitle: "Mein Geburtsdatum",
      days: [
        '01', '02', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
      ],
      months: [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
      ],
      years: [
        '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'
      ]
    };
  }
};
</script>
