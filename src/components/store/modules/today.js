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
        }
    ]
}

const getters = {
    allEvents: state => state.events
}

const actions = {
    
    async fetchEvents({ commit }) {
        let events = [];
        var moment = require('moment');
        var uemail = sessionStorage.getItem('username');
         //let datas = [];
        fetch("https://eventcalendarapi.azurewebsites.net/api/events?username="+uemail+"")
        .then(response => response.json())
        .then((data) => {
          //datas = data;
          //console.log(datas);
          
           data.forEach(function(item){
              let appData = item;
              let startDay = moment(item.day).format('YYYY-MM-DD');
              appData.id = item.id;             
              appData.start = startDay;
              appData.title = item.details;
              appData.end = startDay;
              appData.details = item.name;
              appData.color = "#820a28";

              events.push(appData);
            })
        })

          
        //console.log(events);
        commit('setEvents', events);
    },

}

const mutations = {
    setEvents: (state, events) => (state.events = events),
}

export default {
    state,
    getters,
    actions,
    mutations
}