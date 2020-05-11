<template>
    <div>  
        <div id="headerContainer">
            <div id="dateHeader">
                <p id="daytext">{{this.getday()}} </p>
            </div>
            <div id="addheader">
                <!--<a v-bind:is-published="true" @click="openModal()"><i class="fas fa-plus-circle"></i></a>--> 
                <!--<button type="button" data-toggle="modal" data-target="#myModal"><i class="fas fa-plus-circle"></i></button>-->
                <button type="button" data-toggle="modal" data-target="#addModal"><i class="fas fa-plus-circle"></i></button>
            </div>
            <br>
        </div>
        <hr>
        <!--<v-btn color="primary" class="mr-4" @click="dialog = true" dark>
            New Event
        </v-btn>-->
        <div v-for="event in allEvents.slice().reverse()" :key="event.id" class="events">
            <div id="eventtxt">
                
                <h5 style="display:inline;">{{event.title}} </h5>
                <span class="wheretxt">{{event.startDate}} · {{event.location}}</span><br>
                <!--<span class="locationtxt">{{getday()}} · {{event.location}}</span><br>-->
                <!--<i id="trashi" class="fas fa-trash-alt"></i>-->
                <!-- <i class="far fa-calendar-times"></i>-->
                <button @click="newDeleteEvent(event.id)"><i class="far fa-trash-alt"></i></button>
                <!--<i id="trashi" class="fas fa-minus-circle"></i>-->
                <!--<button @click="editingEvent(event)"><i class="far fa-edit"></i></button>-->
                <button @click="editingEvent(event)" type="button" data-toggle="modal" data-target="#myModal"><i class="far fa-edit"></i></button>
                <hr>
            </div>
        </div> 


            <!-- Modal -->
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                
                <!-- Modal content-->
                <div class="modal-content">
                    
                    <div class="modal-header">
                    <h4>Add New Task</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    
                    </div>

                    <form class="modal-body">
                         <input type="text" class="form-control" id="eventTitle3" placeholder="Event Title">
                        
                        <input  type="text" class="form-control" id="eventLocation3" placeholder="Location">
                 
                        <div id="startContainer">
                            <input  type="date" class="form-control" id="eventStartDate3" placeholder="Start Date">
                            <input type="time" class="form-control" id="eventStartTime3" placeholder="Start Time">
                        </div>
                        <div id="endContainer">
                            <input  type="date" class="form-control" id="eventEndDate3" placeholder="End Date">
                            <input  type="time" class="form-control" id="eventEndTime3" placeholder="End Time">
                        </div>
                    
                        
                        <div class="container1">
                            <button class="add_form_field">Invite Others &nbsp; 
                            <span style="font-size:16px; font-weight:bold;">+ </span>
                            </button>
                            <!--<div><input type="text" name="mytext[]" id="invite" placeholder="Enter Invite" class="form-control name_list"></div>-->
                        </div>

                    </form>
                    <div class="modal-footer">
                        <button @click="updateNewEventModal()" id="sEvent" color="primary" class="mr-4" data-toggle="modal" data-target="#myModal">Save</button>
                        <button color="primary"  @click="rmv()" type="button" id="closemodal" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div> 
                </div>
                
                </div>
            </div>


            <!--Add Modal -->
            <div class="modal fade" id="addModal" role="dialog">
                <div class="modal-dialog">
                
                <!-- Modal content-->
                <div class="modal-content">
                    
                    <div class="modal-header">
                    <h4>Add New Task</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    
                    </div>

                    <form class="modal-body">
                         <input type="text" class="form-control" id="eventTitle4" placeholder="Event Title">
                        
                        <input  type="text" class="form-control" id="eventLocation4" placeholder="Location">
                 
                        <div id="startContainer">
                            <input  type="date" class="form-control" id="eventStartDate4" placeholder="Start Date">
                            <input type="time" class="form-control" id="eventStartTime4" placeholder="Start Time">
                        </div>
                        <div id="endContainer">
                            <input  type="date" class="form-control" id="eventEndDate4" placeholder="End Date">
                            <input  type="time" class="form-control" id="eventEndTime4" placeholder="End Time">
                        </div>
                    
                        
                        <div class="container1">
                            <button class="add_form_field">Invite Others &nbsp; 
                            <span style="font-size:16px; font-weight:bold;">+ </span>
                            </button>
                            <!--<div><input type="text" name="mytext[]" id="invite" placeholder="Enter Invite" class="form-control name_list"></div>-->
                        </div>

                    </form>
                    <div class="modal-footer">
                        <button @click="addNewModalEvent()" id="sEvent" color="primary" class="mr-4" data-toggle="modal" data-target="#addModal">Save</button>
                        <button color="primary"  @click="rmv()" type="button" id="closemodal" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div> 
                </div>
                
                </div>
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
                       
                       <input type="text" v-model="invite" id="invite1" placeholder="Enter Invite" class="form-control name_list">
      
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
import $ from 'jquery'
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
        addi(){
            var title = $('#eventTitle3').val();
            var location = $('#eventLocation3').val();
            var sdate = $('#eventStartDate3').val();
            var edate = $('#eventEndDate3').val();
            var sTime = $('#eventEndDate3').val();
            var eTime = $('#eventEndTime3').val();
            var values = $("input[id='invitey']").map(function(){return $(this).val();}).get();

            console.log("addi()"+sdate+edate+title+location+eTime+sTime+values);
       

        },
        rmv(){
            $('.name_list').remove();
            $('.delete').remove();
            console.log("input removed");
            this.currentlyEditing = null;
        },
        editEvent(eventInvite){
            this.eventInvite = eventInvite.data();
            //console.log(event);
        },
        getday(){
            var d = new Date();
            var weekday=new Array(7);
            weekday[0]="Monday";
            weekday[1]="Tuesday";
            weekday[2]="Wednesday";
            weekday[3]="Thursday";
            weekday[4]="Friday";
            weekday[5]="Saturday";
            weekday[6]="Sunday";


            var months=new Array(7);
            months[0]="Jan";
            months[1]="Feb";
            months[2]="March";
            months[3]="April";
            months[4]="May";
           // console.log(weekday[d.getDay()-1]);
            var month = d.getMonth();
            //console.log(months[month]+" "+d.getDay()+", "+ d.getFullYear());
            var fullday = months[month]+" "+d.getDay()+", "+ d.getFullYear();
            //return(weekday[d.getDay()-1]);
            return fullday
        },
        addmoreppl(){

            
        },
        async addNewEvent(){
  
            var title = $('#eventTitle1').val();
            var location = $('#eventLocation1').val();
            var sdate = $('#eventStartDate1').val();
            var edate = $('#eventEndDate1').val();
            var sTime = $('#eventEndDate1').val();
            var eTime = $('#eventEndTime1').val();
            var values = $("input[id='invitey']").map(function(){return $(this).val();}).get();

            console.log("addNew()"+sdate+edate+title+location+eTime+sTime+values);
       


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
            //addEvent//
        },
        async addNewModalEvent(){
            var tempEvent = [];
            var title = $('#eventTitle4').val();
            var location = $('#eventLocation4').val();
            var sdate = $('#eventStartDate4').val();
            var edate = $('#eventEndDate4').val();
            var sTime = $('#eventEndDate4').val();
            var eTime = $('#eventEndTime4').val();
            var values = $("input[id='invitey']").map(function(){return $(this).val();}).get();

            console.log("addNew()"+sdate+edate+title+location+eTime+sTime+values);

            tempEvent.title = $('#eventTitle4').val();
            tempEvent.name = $('#eventTitle4').val();
            tempEvent.location = $('#eventLocation4').val();
            tempEvent.startDate = $('#eventStartDate4').val();
            tempEvent.startTime = $('#eventStartTime4').val();
            tempEvent.endDate = $('#eventEndDate4').val();
            tempEvent.endTime = $('#eventEndTime4').val();
            this.addEvent(tempEvent);
            //this.tempEvent = null;

            //addEvent//
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
            //this.dialog = true
            //this.selectedOpen = true
            this.selectedEvent = event
            this.currentlyEditing = event
          // this.currentlyEditing = event.id;
          // data-toggle="modal" data-target="#myModal"
           // $.noConflict(); 
           // $('#myModal').modal('show'); 
           var now = new Date();

            var day = ("0" + now.getDate()).slice(-2);
            var month = ("0" + (now.getMonth() + 1)).slice(-2);
            var today = now.getFullYear()+"-"+(month)+"-"+(day);
           // var wrapper = $(".container1");
            //var dt = new Date();
            //var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();


            $('#datePicker').val(today);
            $('#eventTitle3').val(event.title);
            $('#eventLocation3').val(event.location);
            $('#eventStartDate3').val(event.startDate);
            $('#eventStartTime3').val("17:39:57");
            $('#eventEndDate3').val(event.endDate);
            $('#eventEndTime3').val("17:39:57");
            
           /* $.each( event.invitey, function( i, val ) {
                $(wrapper).append('<div><input value="'+val+'" type="text" name="xyz[]" id="invitey" class="form-control name_list"><a href="#" class="delete">Delete</a></div>'); //add input box
                console.log(event.invitey.length+i+val);
            });*/

            
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
        async updateNewEventModal(){
           // var uemail = sessionStorage.getItem('username');
            
            this.currentlyEditing.title = $('#eventTitle3').val();
            this.currentlyEditing.name = $('#eventTitle3').val();
            this.currentlyEditing.location = $('#eventLocation3').val();
            this.currentlyEditing.startDate = $('#eventStartDate3').val();
            this.currentlyEditing.startTime = $('#eventStartTime3').val();
            this.currentlyEditing.endDate = $('#eventEndDate3').val();
            this.currentlyEditing.endTime = $('#eventEndTime3').val();
            console.log(this.currentlyEditing)
            //this.addEvent(this.currentlyEditing);

            this.selectedOpen = false;
            this.currentlyEditing = null;
           // this.dialog = false;
        },
   
        //calling delete todo directly from @click
        ...mapActions(['fetchEvents','addEvent'])
    },
    computed: mapGetters(['allEvents']),
    created(){
        //created is a lifecycle method
        this.fetchEvents();
        this.getday();
        console.log(this.events+" this is all events ");
    }
}
</script>
<style scoped>

.wheretxt{
    font-size: 15px;
    color: #65676b;
}
.locationtxt{
    /*font-size: 20px;*/
    font-size: .8125rem;
    color: #65676b;
}
.events{
   /* background-color: #5fc9f8;*/
   /* background-color: #F8F8F8;*/
    /*background-color: #F5F5F5;*/
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    position: relative;
    text-align: center;
}



#eventtxt{
    text-align: left;
}


#trashi{
    bottom: 10px;
    right:10px;
    color: black;
    cursor: pointer
}
#date{
   font-size: .85714rem;  
}

#eventTitle,#eventTitle3, #eventLocation,#eventLocation3,#startContainer,#startContainer3,#endContainer,#endContainer3{
    margin-bottom: 15px;
}
#startContainer,#startContainer3,#endContainer,#endContainer3{
    width:100%
}
#eventStartDate,#eventStartDate3, #eventEndDate,#eventEndDate3{
    float: left;
    width:45%;
    margin-right: 25px;  
}

#eventStartTime,#eventStartTime3, #eventEndTime,#eventEndTime3{
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

}
#dateHeader{
    width: 78%;
    float: left;
}
#addHeader{
    width: 19%;
}
#daytext{
    font-size: 20px;
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