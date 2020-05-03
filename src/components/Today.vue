<template>
    <div>
       
        <div id="headerContainer">
            <div id="dateHeader">
                <h1>Today Tuesday 4/21/20  </h1>
                <i id="weather"  class="fas fa-cloud-sun"></i>
            </div>
            <div id="addheader">
            <a v-bind:is-published="true" @click="openModal()"><i class="fas fa-plus-circle"></i></a> 
            </div>
            <br>
        </div>
        <hr>
        <!--<v-btn color="primary" class="mr-4" @click="dialog = true" dark>
            New Event
        </v-btn>-->
        <div v-for="event in allEvents.slice().reverse()" :key="event.id" class="events">
            <label >Event Title:</label>{{event.name}}<br>
            <label >Location:</label> {{event.location}}<br>
            <span id="date">{{event.day}}</span>
            
            <i id="trashi" class="fas fa-trash-alt"></i> <br>
            <button @click="editingEvent(event)">Editing</button>
        </div> 






        <!-- ADD NEW EVENT -->
        <v-dialog v-model="dialog" max-width="500">
            <v-card>
                <v-container>
                    <v-form v-if="currentlyEditing == null" @submit.prevent="addNewEvent">
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
                       
                       <input type="text" v-model="invite" id="invite" placeholder="Enter Invite" class="form-control name_list">
                    
                        <v-btn type="submit" color="primary" class="mr-4"
                        @clickstop="dialog=flase">Create Event</v-btn>
                    </v-form>
                    <v-form v-else @submit.prevent="updateNewEvent(selectedEvent)">
                        <input v-model="name" type="text" class="form-control" id="eventTitle" :placeholder="[[selectedEvent.name]]">
                        
                        <input v-model="location" type="text" class="form-control" id="eventLocation" :placeholder="[[selectedEvent.location]]">
                 
                        <div id="startContainer">
                            <input v-model="startDate" type="date" class="form-control" id="eventStartDate" :placeholder="[[selectedEvent.date]]">
                            <input v-model="startTime" type="time" class="form-control" id="eventStartTime" placeholder="Start Date">
                        </div>
                        <div id="endContainer">
                            <input v-model="endDate" type="date" class="form-control" id="eventEndDate" placeholder="End Date">
                            <input v-model="endTime" type="time" class="form-control" id="eventEndTime" placeholder="End Date">
                        </div>
                       
                       <input type="text" v-model="invite" id="invite" placeholder="Enter Invite" class="form-control name_list">
                    
                        <v-btn type="submit" color="primary" class="mr-4"
                        @clickstop="dialog=flase">Save</v-btn>
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
        events: {},
        eventInvite: null,
        invite: null,
        color: "#1976D2",
        currentlyEditing: null,
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        dialog: false
    }),
    methods: {
        editEvent(eventInvite){
            this.eventInvite = eventInvite.data();
            console.log(event);
        },
        async addNewEvent(){
           var token = sessionStorage.getItem('token');
           var uemail = sessionStorage.getItem('username');
           console.log( "this is email:"+uemail+" token"+token);
            fetch("https://eventapicalendar.azurewebsites.net/api/events", {
              method: "post",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },

              //make sure to serialize your JSON body
              body: JSON.stringify({
                name: this.name,
                title: this.title,
                day: this.startDate,
                location: this.location,
                setBy: uemail,
                attendent: this.invite
              })
            })
            .then( (response) => { 
              //do something awesome that makes the world a better place
              console.log("Post to table"+response);
            }).catch(function(error) {
                console.log('Request failed', error)
            });
            this.dialog = false;
        },
        showEvents ({ nativeEvent, allEvents }) {
            console.log("test"+allEvents);
            const open = () => {
                this.selectedEvent = event
                this.selectedElement = nativeEvent.target
                setTimeout(() => this.selectedOpen = true, 10)
            }
            if (this.selectedOpen) {
                this.selectedOpen = false
                setTimeout(open, 10)
            } else {
                open()
            }
            nativeEvent.stopPropagation()
        },
        openModal(){
            this.currentlyEditing = null
            this.dialog = true
        }, 
        editingEvent(event){
            this.dialog = true
            this.selectedOpen = true
            this.selectedEvent = event
            this.currentlyEditing = event.id;
            console.log(event)
        }, 
        async newDeleteEvent(ev){
            console.log(ev);
            //https://calendareventapi.azurewebsites.net/api/events/
            fetch("https://eventcalendarapi.azurewebsites.net/api/events/"+ev+"", {
              method: "delete",
              headers: {
                'Content-Type': 'application/json'
              },
            })
            this.selectedOpen = false;
            this.getEvents(); 
        },
        async updateNewEvent(ev){
            var uemail = sessionStorage.getItem('username');
            console.log(this.currentlyEditing+"this is id"+this.name+"update event test"+JSON.stringify(ev));
            fetch("https://eventapicalendar.azurewebsites.net/api/events/"+this.currentlyEditing+"", {
              method: "put",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              
              //https://calendareventapi.azurewebsites.net/api/events/
              //make sure to serialize your JSON body
              body: JSON.stringify({
                name: this.name,
                title: this.name,
                day: this.startDate,
                location: this.location,
                setBy: uemail
              })
            })
            .then( (response) => { 
              //do something awesome that makes the world a better place
              console.log("Put to table"+response);
            });
            this.selectedOpen = false;
            this.currentlyEditing = null;
            this.dialog = false;
        },
   
        //calling delete todo directly from @click
        ...mapActions(['fetchEvents']),
    },
    computed: mapGetters(['allEvents']),
    created(){
        //created is a lifecycle method
        this.fetchEvents();
        console.log(this.events+" this is all events ");
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

#trashi{
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

#weather {
    bottom: 10px;
    right:10px;
    color: rgb(0, 0, 0);
    cursor: pointer;
    display: inline-block;
}
h1{
    font-size: 1.57143rem;
    margin: 0;
    font-weight: 400;
    margin-block-start: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
#headerContainer{
    width: 100%;
    height: 150px;
}
#dateHeader{
    width: 50%;
    float: left;
}
#addHeader{
}


#tags {
  float: left;
  border: 1px solid #ccc;
  padding: 4px;
  font-family: Arial;
}

#tags span.tag {
  cursor: pointer;
  display: block;
  float: left;
  color: #555;
  background: #add;
  padding: 5px 10px;
  padding-right: 30px;
  margin: 4px;
}

#tags span.tag:hover {
  opacity: 0.7;
}

#tags span.tag:after {
  position: absolute;
  content: "×";
  border: 1px solid;
  border-radius: 10px;
  padding: 0 4px;
  margin: 3px 0 10px 7px;
  font-size: 10px;
}

#tags input {
  background: #eee;
  border: 0;
  margin: 4px;
  padding: 7px;
  width: auto;
}

</style>