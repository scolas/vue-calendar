(function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={home:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;o.push([3,"chunk-vendors"]),n()})({3:function(e,t,n){e.exports=n("81a6")},"402c":function(e,t,n){"use strict";var a=n("2b0e"),s=n("f309");a["a"].use(s["a"]),t["a"]=new s["a"]({})},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=o,e.exports=s,s.id="4678"},"81a6":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("Today")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"headerContainer"}},[e._m(0),n("div",{attrs:{id:"addheader"}},[n("a",{attrs:{"is-published":!0},on:{click:function(t){return e.openModal()}}},[n("i",{staticClass:"fas fa-plus-circle"})])]),n("br")]),n("hr"),e._l(e.allEvents.slice().reverse(),(function(t){return n("div",{key:t.id,staticClass:"events"},[n("label",[e._v("Event Title:")]),e._v(e._s(t.name)),n("br"),n("label",[e._v("Location:")]),e._v(" "+e._s(t.location)),n("br"),n("span",{attrs:{id:"date"}},[e._v(e._s(t.day))]),n("i",{staticClass:"fas fa-trash-alt",attrs:{id:"trashi"}}),e._v(" "),n("br"),n("button",{on:{click:function(n){return e.editingEvent(t)}}},[e._v("Editing")])])})),n("v-dialog",{attrs:{"max-width":"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-container",[null==e.currentlyEditing?n("v-form",{on:{submit:function(t){return t.preventDefault(),e.addNewEvent(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"eventTitle",placeholder:"Event Title"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],staticClass:"form-control",attrs:{type:"text",id:"eventLocation",placeholder:"Location"},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}}),n("div",{attrs:{id:"startContainer"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.startDate,expression:"startDate"}],staticClass:"form-control",attrs:{type:"date",id:"eventStartDate",placeholder:"Start Date"},domProps:{value:e.startDate},on:{input:function(t){t.target.composing||(e.startDate=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.startTime,expression:"startTime"}],staticClass:"form-control",attrs:{type:"time",id:"eventStartTime",placeholder:"Start Date"},domProps:{value:e.startTime},on:{input:function(t){t.target.composing||(e.startTime=t.target.value)}}})]),n("div",{attrs:{id:"endContainer"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.endDate,expression:"endDate"}],staticClass:"form-control",attrs:{type:"date",id:"eventEndDate",placeholder:"End Date"},domProps:{value:e.endDate},on:{input:function(t){t.target.composing||(e.endDate=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.endTime,expression:"endTime"}],staticClass:"form-control",attrs:{type:"time",id:"eventEndTime",placeholder:"End Date"},domProps:{value:e.endTime},on:{input:function(t){t.target.composing||(e.endTime=t.target.value)}}})]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.invite,expression:"invite"}],staticClass:"form-control name_list",attrs:{type:"text",id:"invite",placeholder:"Enter Invite"},domProps:{value:e.invite},on:{input:function(t){t.target.composing||(e.invite=t.target.value)}}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{clickstop:function(t){e.dialog=e.flase}}},[e._v("Create Event")])],1):n("v-form",{on:{submit:function(t){return t.preventDefault(),e.addNewEvent(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"eventTitle",placeholder:[[e.selectedEvent.name]]},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "+e._s(e.selectedEvent.name)+" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],staticClass:"form-control",attrs:{type:"text",id:"eventLocation",placeholder:"Location"},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}}),n("div",{attrs:{id:"startContainer"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.startDate,expression:"startDate"}],staticClass:"form-control",attrs:{type:"date",id:"eventStartDate",placeholder:"Start Date"},domProps:{value:e.startDate},on:{input:function(t){t.target.composing||(e.startDate=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.startTime,expression:"startTime"}],staticClass:"form-control",attrs:{type:"time",id:"eventStartTime",placeholder:"Start Date"},domProps:{value:e.startTime},on:{input:function(t){t.target.composing||(e.startTime=t.target.value)}}})]),n("div",{attrs:{id:"endContainer"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.endDate,expression:"endDate"}],staticClass:"form-control",attrs:{type:"date",id:"eventEndDate",placeholder:"End Date"},domProps:{value:e.endDate},on:{input:function(t){t.target.composing||(e.endDate=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.endTime,expression:"endTime"}],staticClass:"form-control",attrs:{type:"time",id:"eventEndTime",placeholder:"End Date"},domProps:{value:e.endTime},on:{input:function(t){t.target.composing||(e.endTime=t.target.value)}}})]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.invite,expression:"invite"}],staticClass:"form-control name_list",attrs:{type:"text",id:"invite",placeholder:"Enter Invite"},domProps:{value:e.invite},on:{input:function(t){t.target.composing||(e.invite=t.target.value)}}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{clickstop:function(t){e.dialog=e.flase}}},[e._v("Create Event")])],1)],1)],1)],1)],2)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"dateHeader"}},[n("h1",[e._v("Today Tuesday 4/21/20 ")]),n("i",{staticClass:"fas fa-cloud-sun",attrs:{id:"weather"}})])}],c=(n("b0c0"),n("d3b7"),n("96cf"),n("1da1")),l=n("5530"),d=n("2f62"),u={name:"Today",data:function(){return{name:null,details:null,startDate:null,startTime:null,endDate:null,endTime:null,location:null,events:{},eventInvite:null,invite:null,color:"#1976D2",currentlyEditing:null,selectedEvent:{},selectedElement:null,selectedOpen:!1,dialog:!1}},methods:Object(l["a"])({editEvent:function(e){this.eventInvite=e.data(),console.log(event)},addNewEvent:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=sessionStorage.getItem("token"),a=sessionStorage.getItem("username"),console.log("this is email:"+a+" token"+n),fetch("https://eventcalendarapi.azurewebsites.net/api/events",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,title:e.title,day:e.startDate,location:e.location,setBy:a,attendent:e.invite})}).then((function(e){console.log("Post to table"+e)})).catch((function(e){console.log("Request failed",e)}));case 4:case"end":return t.stop()}}),t)})))()},showEvents:function(e){var t=this,n=e.nativeEvent,a=e.allEvents;console.log("test"+a);var s=function(){t.selectedEvent=event,t.selectedElement=n.target,setTimeout((function(){return t.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(s,10)):s(),n.stopPropagation()},openModal:function(){this.currentlyEditing=null,this.dialog=!0},editingEvent:function(e){this.dialog=!0,this.selectedOpen=!0,this.selectedEvent=e,this.currentlyEditing=e.id,console.log(e)},newDeleteEvent:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log(e),fetch("https://eventcalendarapi.azurewebsites.net/api/events/"+e,{method:"delete",headers:{"Content-Type":"application/json"}}),t.selectedOpen=!1,t.getEvents();case 4:case"end":return n.stop()}}),n)})))()}},Object(d["b"])(["fetchEvents"])),computed:Object(d["c"])(["allEvents"]),created:function(){this.fetchEvents(),console.log(this.events+" this is all events ")}},m=u,f=(n("b3df"),n("2877")),v=n("6544"),p=n.n(v),b=n("8336"),j=n("b0af"),h=n("a523"),g=n("169a"),y=n("4bd4"),w=Object(f["a"])(m,r,i,!1,null,"9a4aaacc",null),E=w.exports;p()(w,{VBtn:b["a"],VCard:j["a"],VContainer:h["a"],VDialog:g["a"],VForm:y["a"]});var T={name:"Home",components:{Today:E},data:function(){return{}}},k=T,D=n("7496"),x=n("a75b"),C=Object(f["a"])(k,s,o,!1,null,null,null),_=C.exports;p()(C,{VApp:D["a"],VContent:x["a"]});var O=n("402c"),z=n("3f9d"),P=(n("4de4"),{todos:[{id:1,title:"Todo one"},{id:2,title:"Todo two"}]}),N={allTodos:function(e){return e.todos}},S={},M={setTodos:function(e,t){return e.todos=t},newTodo:function(e,t){return e.todos.unshift(t)},removeTodo:function(e,t){return e.todos=e.todos.filter((function(e){return e.id!==t}))}},I={state:P,getters:N,actions:S,mutations:M},R=(n("4160"),n("159b"),{events:[{id:1,title:"Meeting",date:"4/21/2020"},{id:2,title:"2 Meeting",date:"4/21/2020"},{id:3,title:"Calendar",date:"4/21/2020"}]}),V={allEvents:function(e){return e.events}},L={fetchEvents:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,s,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,s=[],o=n("c1df"),r=sessionStorage.getItem("username"),fetch("https://eventcalendarapi.azurewebsites.net/api/events?username="+r).then((function(e){return e.json()})).then((function(e){e.forEach((function(e){var t=e,n=o(e.day).format("YYYY-MM-DD");t.id=e.id,t.start=n,t.title=e.details,t.end=n,t.details=e.name,t.color="#820a28",s.push(t)}))})),a("setEvents",s);case 6:case"end":return t.stop()}}),t)})))()}},Y={setEvents:function(e,t){return e.events=t}},$={state:R,getters:V,actions:L,mutations:Y};a["a"].use(d["a"]);var q=new d["a"].Store({modules:{todos:I,events:$}});a["a"].use(z["a"]),a["a"].config.productionTip=!1,new a["a"]({vuetify:O["a"],store:q,render:function(e){return e(_)}}).$mount("#app")},"8a7c":function(e,t,n){},b3df:function(e,t,n){"use strict";var a=n("8a7c"),s=n.n(a);s.a}});
//# sourceMappingURL=home.f1799c64.js.map