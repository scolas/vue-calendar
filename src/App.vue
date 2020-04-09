<template>
  <v-app>
    <v-content>
      <nv/>
      <cal/>
    </v-content>
  </v-app>
</template>

<script>
import Calendar from './components/Calendar.vue'
import nav from './components/nav.vue'
export default {
  name: 'App',
  components: {
    cal: Calendar,
    nv: nav,
  },
  data: () => ({
    //
  })
};
</script>  
