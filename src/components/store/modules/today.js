//import axios from 'axios';

const state = {
    events: [
        {
            id: 1,
            title: "Meeting",
            startDate: "2020-05-08",
            endDate: "2020-05-08",
            startTime: "17:39:57",
            endTime: "17:39:57",
            location: "Home"
        },
        {
            id: 2,
            title: "Finsh website",
            startDate: "2020-05-08",
            startTime: "17:39:57",
            endDate: "2020-05-08",
            endTime: "17:39:57",
            location: "YouTube",
            invited: ['Scolas']
        },
        {
            id: 3,
            title: 'Demo laurel',
            startDate: "2020-05-08",
            endDate: "2020-05-08",
            startTime: "17:39:57",
            endTime: "17:39:57",
            location: "Office"
        },
        {
            id: 4,
            title: 'Calendar',
            startDate: "2020-05-08",
            endDate: "2020-05-08",
            startTime: "17:39:57",
            endTime: "17:39:57",
            location: "Building",
            invited: ['Scott', 'Colas']
        }
    ],

    appointments: [
        {
            id: 1,
            title: "Dr Steven",
            date: "5/15/2020"
        },
        {
            id: 2,
            title: "Team Meeting",
            date: "5/05/2020"
        },
        {
            id: 3,
            title: 'Launch Appoinments App',
            date: "5/21/2020"
        }
    ]
}

const getters = {
    allEvents: state => state.events,
    allAppointments: state => state.appointments,
}

const actions = {
    
    async fetchEvents({ commit }) {
       /* let events = [];
        var moment = require('moment');
        var uemail = sessionStorage.getItem('username');
         //let datas = [];
        fetch("https://eventapicalendar.azurewebsites.net/api/events?username="+uemail+"")
        .then(response => response.json())
        .then((data) => {
          //datas = data;
          //console.log(datas);
          
           data.forEach(function(item){
              let appData = item;
              let startDay = moment(item.day).format('YYYY-MM-DD');
              //appData.id = item.id;             
              appData.start = startDay;
              //appData.title = item.details;
              appData.end = startDay;
              //appData.details = item.name;
              //appData.color = "#820a28";

              events.push(appData);
            })
        })
        
        var person = {name:"Meeting", location:"NYC", startDate:"2020-05-08", startTime:"01:10 PM", endDate:"2020-05-08", endTime:"01:10 PM", invitey:['Ralph','Stephan']};
        var person1 = {name:"finish app", location:"Office", startDate:"2020-05-08", startTime:"01:10 PM", endDate:"2020-05-08", endTime:"01:10 PM", invitey:[]};
          events.push(person);
          events.push(person1);
       
       console.log(events[1].day+"day");
       commit('setEvents', events);*/console.log(commit);
    },
    async fetchTodayEvents({ commit }) {
        let events = [];
        var moment = require('moment');
        var uemail = sessionStorage.getItem('username');
         //let datas = [];
        fetch("https://eventapicalendar.azurewebsites.net/api/todayevents?username="+uemail+"")
        .then(response => response.json())
        .then((data) => {
          //datas = data;
          //console.log(datas);
          
           data.forEach(function(item){
              let appData = item;
              let startDay = moment(item.day).format('YYYY-MM-DD');
              //appData.id = item.id;             
              appData.start = startDay;
              //appData.title = item.details;
              appData.end = startDay;
              //appData.details = item.name;
              //appData.color = "#820a28";

              events.push(appData);
            })
        })
        
        var person = {name:"Meeting", location:"NYC", day:"08/22/2020"};
        var person1 = {name:"finish app", location:"Office", day:"07/22/2020"};
          events.push(person);
          events.push(person1);
       console.log(commit);
       commit('setTodayEvents', events);
    },
    async fetchAppointments({ commit }) {
        console.log("fetch appointments");
        let appointment = [];
        var moment = require('moment');
        var uemail = sessionStorage.getItem('username');
         //let datas = [];
        fetch("https://eventapicalendar.azurewebsites.net/api/events/appointments?username="+uemail+"")
        .then(response => response.json())
        .then((data) => {
          //datas = data;
          //console.log(datas);
          
           data.forEach(function(item){
              let appointmentData = item;
              let startDay = moment(item.day).format('YYYY-MM-DD');
              //appData.id = item.id;             
              appointmentData.start = startDay;
              appointment.push(item);
            })
        })

          
        console.log(commit+" appp: "+JSON.stringify(appointment));
       commit('setAppointments', appointment);
    },
    async updateEvents({ commit }, event) {
       console.log("fetch appointments"+event+commit);
        let appointment = [];
        //var moment = require('moment');
        //var uemail = sessionStorage.getItem('username');


          
        //console.log(commit+" appp: "+JSON.stringify(appointment));
       commit('setAppointments', appointment);
    },
    async acceptAppointments({ commit }, id){
        
        ///var uemail = sessionStorage.getItem('username');
        fetch("https://eventapicalendar.azurewebsites.net/api/events/acceptappointment?id="+id+"", {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
        .then( (response) => { 
            //do something awesome that makes the world a better place
            console.log(commit+"accpted event"+response);
        });
        
      
    },
    async denyAppointments({commit}, id){
        fetch("https://eventapicalendar.azurewebsites.net/api/events/denyappointment?id="+id+"", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then( (response) => { 
            //do something awesome that makes the world a better place
            console.log(commit+"deny"+response);
        });
        
    },
    async addEvent({ commit }, event){
        //completed is the status
        console.log("add to b4 post"+event);
        //const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
        //console.log("todo added"+response.data);
        //commit a mutation/ response data has the new todo nad that will updte the list
        //commit('newEvent', response.data);
        commit('newEvent', event);
    },

}

const mutations = {
    setEvents: (state, events) => (state.events = events),
    updateEvent: (state, events) => (state.events = events),
    newEvent: (state, event) => state.events.unshift(event),
    setTodayEvents: (state, events) => (state.events = events),
    setAppointments: (state, appointments) => (state.appointments = appointments),
    acceptAppointments: (state, id) => state.appointments = state.appointments.filter(appointments => appointments.id !== id)
}

export default {
    state,
    getters,
    actions,
    mutations
}