<template>
  <v-app>
    <v-content>
      <cal/>
    </v-content>
  </v-app>
</template>

<script>
import Calendar from '../../components/Calendar.vue'
export default {
  name: 'App',
  components: {
    cal: Calendar,
  },
  data: () => ({
    //
  })
};
</script>  
