<template>
    <div>
        <v-btn color="primary" class="mr-4" @click="dialog = true" dark>
            New Event
        </v-btn>
        <div v-for="event in allEvents" :key="event.id" class="events">
            {{event.title}}
            {{event.name}}
            <span id="date">{{event.day}}</span>
            
            <i class="fas fa-trash-alt"></i> 
        </div> 
        <!-- ADD NEW EVENT -->
        <v-dialog v-model="dialog" max-width="500">
            <v-card>
                <v-container>
                    <v-form @submit.prevent="addNewEvent">
                        <input v-model="name" type="text" class="form-control" id="eventTitle"  placeholder="Event Title">
                        
                        <input v-model="location" type="text" class="form-control" id="eventLocation" placeholder="Location">
                 
                        <div id="startContainer">
                            <input v-model="startDate" type="date" class="form-control" id="eventStartDate" placeholder="Start Date">
                            <input v-model="startTime" type="time" class="form-control" id="eventStartTime" placeholder="Start Date">
                        </div>
                        <div id="endContainer">
                            <input v-model="endDate" type="date" class="form-control" id="eventEndDate" placeholder="End Date">
                            <input v-model="endTime" type="time" class="form-control" id="eventEndTime" placeholder="End Date">
                        </div>
                        <v-btn type="submit" color="primary" class="mr-4"
                        @clickstop="dialog=flase">Create Event</v-btn>
                    </v-form>
                </v-container>
            </v-card>
        </v-dialog> 
    </div>
</template>
<script>
import  {mapGetters, mapActions} from 'vuex'
export default {
    name: "Today",
    data:() => ({
        name: null,
        details: null,
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null,
        location: null,
        color: "#1976D2",
        currentlyEditing: null,
        dialog: false
    }),
    methods: {
        //calling delete todo directly from @click
        ...mapActions(['fetchEvents'])
    },
    computed: mapGetters(['allEvents']),
    created(){
        //created is a lifecycle method
        this.fetchEvents();
    }
}
</script>
<style scoped>
.events{
   /* background-color: #5fc9f8;*/
   /* background-color: #F8F8F8;*/
    background-color: #F5F5F5;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    position: relative;
    text-align: center;
}

i{
    position: absolute;
    bottom: 10px;
    right:10px;
    color: black;
    cursor: pointer
}
#date{
   font-size: .85714rem;
   
}

#eventTitle, #eventLocation,#startContainer,#endContainer{
    margin-bottom: 15px;
}
#startContainer,#endContainer{
    width:100%
}
#eventStartDate, #eventEndDate{
    float: left;
    width:45%;
    margin-right: 25px;
   
}

#eventStartTime, #eventEndTime{
    width:45%; 
}
</style>