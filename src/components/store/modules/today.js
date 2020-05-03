//import axios from 'axios';

const state = {
    events: [
        {
            id: 1,
            title: "Meeting",
            date: "4/21/2020"
        },
        {
            id: 2,
            title: "2 Meeting",
            date: "4/21/2020"
        },
        {
            id: 3,
            title: 'Calendar',
            date: "4/21/2020"
        },
        {
            id: 4,
            title: 'Calendar',
            date: "4/21/2020"
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
        let events = [];
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

          
        console.log(commit);
       commit('setEvents', events);
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
        
    }

}

const mutations = {
    setEvents: (state, events) => (state.events = events),
    setAppointments: (state, appointments) => (state.appointments = appointments),
    acceptAppointments: (state, id) => state.appointments = state.appointments.filter(appointments => appointments.id !== id)
}

export default {
    state,
    getters,
    actions,
    mutations
}