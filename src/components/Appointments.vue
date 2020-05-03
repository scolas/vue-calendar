<template>
    <div>
        <div id="dateHeader">
            <h4>Appointments</h4>

        <div v-for="event in allAppointments" :key="event.id" class="events">
            <label >Title:</label>{{event.invitetitle}}<br>
            <label >Status:</label>{{event.status}}<br>

            <div>
                <button @click="acceptAppointments(event.id)" id="acceptbtn" type="button" class="btn btn-primary">Accept</button>
                <button @click="denyAppointments(event.id)" id="denybtn" type="button" class="btn btn-danger">Decline</button>
            </div>
        </div> 

        </div>
        <br>
    </div>
</template>
<script>
import  {mapGetters, mapActions} from 'vuex'
export default {
    name: "Appointments",
    data:() => ({
        name: null,
        details: null,
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null,
        location: null,
        
    }),
    methods: {
         ...mapActions(['fetchAppointments','acceptAppointments','denyAppointments']),
    }, 
    computed: mapGetters(['allAppointments']),
    created(){
        //created is a lifecycle method
        this.fetchAppointments();
        //console.log(this.events+" this is all events ");
    }
}
</script>
<style>
#denybtn{
    margin-left: 2px;
}

</style>