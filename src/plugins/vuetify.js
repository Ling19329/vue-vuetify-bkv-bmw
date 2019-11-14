import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#00718F',
            secondary: '#035370',
            accent: '#49d586',
            error: '#ED706C',
            tertiary: "#035370",
            content: '#E5F0F3'
          },
        },
      },
});
