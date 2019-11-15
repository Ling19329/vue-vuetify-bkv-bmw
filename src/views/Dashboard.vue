<template>
  <v-layout row wrap justify-center>
    <v-col cols="12" sm="9" xs="12" class="mt-10 pt-10">
      <v-layout column wrap>
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
          <v-col
            cols="12"
            md="3"
            sm="6"
            xs="12"
            v-for="(panel, index) in panelData"
            :key="index"
          >
            <product-panel
              :id="panel.id"
              :panelBackground="panel.panelBackground"
              :panelTitle="panel.panelTitle"
              :panelDescription="panel.panelDescription"
              :panelFeature="panel.panelFeature"
              :checked="panel.checked"
              :checkPanel="selectPanels"
            >
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
import ProductPanel from "@/components/ProductPanel.vue";
export default {
  name: "Dashboard",
  components: {
    ProductPanel
  },
  props: {},
  data() {
    return {
      days: ["01.12.2019"],
      panelData: [
        {
          id: 0,
          panelTitle: "Stationär",
          panelDescription:
            "Maximales Wohlbefinden, <br />sowie beste Leistungen.",
          panelFeature: [
            "Behandlung durch den Chefarzt",
            "Ein- oder Zweibettzimmer",
            "Freie Krankenhausauswahl"
          ],
          panelBackground: "tertiary",
          checked: true
        },
        {
          id: 1,
          panelTitle: "Zahn",
          panelDescription:
            "Optimaler Schutz vor hohen<br/> Selbstkosten beim Zahnarzt.",
          panelFeature: [
            "Zahnbehandlung 100%",
            "Zahnersatz, Inlays & Implantate",
            "Prof. Zahnreinigung 150€/Jahr"
          ],
          panelBackground: "quinary",
          checked: false,
        },
        {
          id: 2,
          panelTitle: "Ambulant",
          panelDescription:
            "Maximales Wohlbefinden, <br />sowie beste Leistungen.",
          panelFeature: [
            "Erstattung für Arzneimittel 100%",
            "Heilpraktiker 80%",
            "Sehhilfen 120€/Jahr"
          ],
          panelBackground: "primary",
          checked: false
        },
        {
          id: 3,
          panelTitle: "Vorsorge",
          panelDescription:
            "Mit dem Vorsorgepaket sind<br /> Sie bestens geschützt & versorgt.",
          panelFeature: [
            "Vorsorge 100%",
            "Schutzimpfungen 100%",
            "Erstattung für Präventionen"
          ],
          panelBackground: "senary",
          checked: false
        }
      ]
    };
  },
  methods: {
    selectPanels(id){
      this.panelData[id].checked = !this.panelData[id].checked; 
      console.log('panelData', this.panelData);
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>