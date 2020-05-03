<template>
  <v-app>
    <v-content>
      <div id="today">   
        <Today/>
      </div>
      <div id="appoint">
          <Appointment/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Today from "../../components/Today.vue"
import Appointment from "../../components/Appointments.vue"

export default {
  name: 'Home',
  components: {
    Appointment,
    Today
  },
  data: () => ({
    
  })
};
</script>  
<style scoped>
      /*#app{  
        width: 100%;
        margin-left: 15%;
        border-radius: 5px;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 12px;
      }*/


      #app{  
        background: #F2F3F5;
      }
      



      #today{  
        width: 33%;
        float: left;
        background: white;
        margin-left: 15%;
        border-radius: 5px;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 12px;
      }

      #appoint{  
        width: 32%;
        float: left;
        background: white;
        margin-left: 15%;
        border-radius: 5px;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 12px;
      }
</style>