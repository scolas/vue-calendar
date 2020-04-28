<template>
  <v-app>
    <v-content>
     
      <Today/>
    </v-content>
  </v-app>
</template>

<script>
import Today from "../../components/Today.vue"
//import TodayHeader from "../../components/TodayHeader"

export default {
  name: 'Home',
  components: {
    //TodayHeader,
    Today
  },
  data: () => ({
    
  })
};
</script>  
