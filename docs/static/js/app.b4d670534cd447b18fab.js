webpackJsonp([1],{"1uuo":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n("fZjL"),o=n.n(l),s=n("7+uW"),a={name:"App",props:{source:String},data:function(){return{drawer:null}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{on:{click:function(e){return t.$router.push("/")}}},[n("v-list-item-action",[n("v-icon",[t._v("home")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Home")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.$router.push("/follow")}}},[n("v-list-item-action",[n("v-icon",[t._v("contact_mail")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Follow")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.$router.push("/trans")}}},[n("v-list-item-action",[n("v-icon",[t._v("contact_mail")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Trans")])],1)],1)],1)],1),t._v(" "),n("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",[t._v("Application")])],1),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("router-view")],1)],1)],1),t._v(" "),n("v-footer",{attrs:{color:"indigo",app:""}},[n("span",{staticClass:"white--text"},[t._v("© 2019")])])],1)},staticRenderFns:[]};var i=n("VU/8")(a,r,!1,function(t){n("QY7n")},null,null).exports,c=n("/ocq"),u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var d=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(t){n("1uuo")},"data-v-d8ec41bc",null).exports,v=n("kxiW"),f=n.n(v).a.initializeApp({apiKey:"AIzaSyCEurQnQFz4Grjg41M5NLp6M_SYIbBTQcY",authDomain:"fir-vue-a31ed.firebaseapp.com",databaseURL:"https://fir-vue-a31ed.firebaseio.com",projectId:"fir-vue-a31ed",storageBucket:"fir-vue-a31ed.appspot.com",messagingSenderId:"831126869596",appId:"1:831126869596:web:068cfcd6953cc10b"}).firestore(),p=f.collection("follows"),m=f.collection("trans"),_={data:function(){return{newFollow:""}},methods:{addFollow:function(){p.add({Level:3,rating:3,Types:["NewItem"],Status:0,Code:this.newFollow.trim(),CreatedAt:Date.now(),Deleted:!1}).then(function(t){console.log("Document written with ID: ",t.id)}).catch(function(t){console.error("Error adding document: ",t)}),this.newFollow=""},clear:function(){this.newFollow=""}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticStyle:{background:"#FFFFFF"},attrs:{cols:"12",md:"12"}},[n("v-form",[n("v-text-field",{attrs:{label:"Input Code"},model:{value:t.newFollow,callback:function(e){t.newFollow=e},expression:"newFollow"}}),t._v(" "),n("v-btn",{on:{click:function(e){return e.preventDefault(),t.addFollow()}}},[t._v("Add")]),t._v(" "),n("v-btn",{on:{click:t.clear}},[t._v("clear")])],1)],1)},staticRenderFns:[]},w=n("VU/8")(_,h,!1,null,null,null).exports,b=n("Dd8w"),g=n.n(b),j=n("woOf"),k=n.n(j),x={props:["follow"],data:function(){var t=["Upper","Middle","Lower","NewItem"];return{levels:t,le:t[this.follow.Level],localFollow:k()({},this.follow)}},methods:{updateFollow:function(t){t.Level=this.levels.indexOf(this.le),p.doc(this.follow.id).update(g()({},t)).then(function(t){console.log("Updated document!")}).catch(function(t){console.error("Error updating document text: ",t)}),this.$emit("nodeUpdated",t.Code)}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",[n("v-row",{staticClass:"mx-auto pa-2"},[n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-select",{attrs:{items:t.levels,label:"Level"},model:{value:t.le,callback:function(e){t.le=e},expression:"le"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"9"}},[n("v-rating",{model:{value:t.localFollow.rating,callback:function(e){t.$set(t.localFollow,"rating",e)},expression:"localFollow.rating"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-text-field",{attrs:{label:"Stop Loss"},model:{value:t.localFollow.StopLoss,callback:function(e){t.$set(t.localFollow,"StopLoss",e)},expression:"localFollow.StopLoss"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-text-field",{attrs:{label:"Take Profit"},model:{value:t.localFollow.TakeProfit,callback:function(e){t.$set(t.localFollow,"TakeProfit",e)},expression:"localFollow.TakeProfit"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"12"}},[n("v-btn",{staticClass:"mr-4",on:{click:function(e){return e.preventDefault(),t.updateFollow(t.localFollow)}}},[t._v("Save")])],1)],1)],1)},staticRenderFns:[]},F=n("VU/8")(x,y,!1,null,null,null).exports,T=n("Gu7T"),N=n.n(T),E={data:function(){return{newNote:""}},props:["follow"],methods:{addNote:function(){var t={Memo:this.newNote.replace(/(?:\r\n|\r|\n)/g,"<br>"),AddDate:Math.floor(Date.now()/1e3),Status:""};if(void 0===this.follow.Note)var e=[];else e=this.follow.Note;e.push(t),p.doc(this.follow.id).update({Note:e}).then(function(t){console.log(" Updated Note")}).catch(function(t){console.error("Error adding document: ",t)}),this.newNote=""}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("v-list",t._l(t.follow.Note,function(e,l){return n("v-list-item",{key:l,attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t._f("formatDate")(e.AddDate)))]),t._v(" "),n("v-list-item-subtitle",{staticClass:"pre-formatted"},[t._v(t._s(t._f("newline")(e.Memo)))]),t._v(" "),n("v-divider")],1)],1)}),1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"12"}},[n("v-form",{ref:"form"},[n("v-textarea",{attrs:{solo:"",label:"new note"},model:{value:t.newNote,callback:function(e){t.newNote=e},expression:"newNote"}}),t._v(" "),n("v-btn",{staticClass:"mr-4",on:{click:function(e){return e.preventDefault(),t.addNote()}}},[t._v("Add")])],1)],1)],1)},staticRenderFns:[]};var S={props:["follow"],data:function(){return{level:["Upper","Middle","Lowwer","NewItem"]}},components:{NoteList:n("VU/8")(E,D,!1,function(t){n("nShw")},"data-v-b8bbdac8",null).exports},methods:{updateFollow:function(t){var e;console.log(t.rating),(e=p.doc(t.id)).update.apply(e,N()(t)).then(function(e){console.log("Updated document with ID: ",t.Code)}).catch(function(t){console.error("Error updateing document: ",t)})},deleteFollow:function(t){confirm("Are you want delete it ??")&&p.doc(t.id).update({Deleted:!0})},editFollow:function(t){this.currentlyEditing=t.id,this.followEditText=t.Name,this.$emit("updateNode",t.id)}}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.follow.Status>0?"red lighten-4":""},[n("v-expansion-panel-header",[n("v-row",[n("v-col",{attrs:{cols:"4",md:"2"}},[t._v("\n        "+t._s(t.follow.Code)+"\n      ")]),t._v(" "),n("v-col",{attrs:{cols:"4",md:"2"}},[n("p",{class:t.follow.Status>2?"red--text":""},[t._v(t._s(t.follow.Status))])]),t._v(" "),n("v-col",{attrs:{cols:"8",md:"6"}},[n("v-rating",{attrs:{small:"",readonly:""},model:{value:t.follow.rating,callback:function(e){t.$set(t.follow,"rating",e)},expression:"follow.rating"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"2"}},[n("v-btn",{staticClass:"d-inline",attrs:{small:"",outlined:"",color:"warning"},on:{click:function(e){return t.deleteFollow(t.follow)}}},[n("v-icon",[t._v("delete")])],1),t._v(" "),n("v-btn",{staticClass:"d-inline",attrs:{small:"",outlined:"",color:"success"},on:{click:function(e){return t.editFollow(t.follow)}}},[n("v-icon",[t._v("edit")])],1)],1)],1)],1),t._v(" "),n("v-expansion-panel-content",[n("v-chip-group",{attrs:{column:"","active-class":"primary--text"}},[n("v-chip",[t._v(" "+t._s(t.level[t.follow.Level])+" ")]),t._v(" "),t._l(t.follow.Types,function(e){return n("v-chip",{key:e},[t._v("\n          "+t._s(e)+"\n        ")])})],2),t._v(" "),n("note-list",{attrs:{follow:t.follow}})],1)],1)},staticRenderFns:[]},z={data:function(){return{follows:[],currentlyEditing:null,type:"Follow",search:"",panel:[]}},computed:{filterList:function(){var t=this;return this.follows.filter(function(e){var n=!0;return"Follow"===t.type&&(n=n&&Number(e.rating)>3&&Number(e.Level)<2),"Upper"===t.type&&(n=n&&0===Number(e.Level)),"Middle"===t.type&&(n=n&&1===Number(e.Level)),"Lower"===t.type&&(n=n&&2===Number(e.Level)),"NewItem"===t.type&&(n=n&&3===Number(e.Level)),n="Deleted"===t.type?n&&!0===e.Deleted:n&&!1===e.Deleted,""!==t.search.trim()&&(n=n&&e.Code.includes(t.search.trim())),n})}},components:{FollowEdit:F,FollowDetail:n("VU/8")(S,L,!1,null,null,null).exports},firestore:function(){return{follows:p.orderBy("Level","asc").orderBy("Status","desc")}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",[n("v-select",{attrs:{items:["Follow","Upper","Middle","Lower","NewItem","Deleted"],label:"Level",solo:""},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),t._v(" "),n("v-text-field",{attrs:{placeholder:"Search",solo:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-expansion-panels",{model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(t.filterList,function(e){return n("v-expansion-panel",{key:e.id},[t.currentlyEditing!==e.id?n("follow-detail",{attrs:{follow:e},on:{updateNode:function(e){t.currentlyEditing=e}}}):n("follow-edit",{attrs:{follow:e},on:{nodeUpdated:function(e){t.currentlyEditing=null,t.panel=[]}}})],1)}),1)],1)},staticRenderFns:[]},U={name:"Follow",data:function(){return{dialog:null}},components:{FollowCreate:w,FollowList:n("VU/8")(z,C,!1,null,null,null).exports}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"mx-auto pa-2"},[n("v-card-text",{staticStyle:{height:"100px",position:"relative"}},[n("v-btn",{attrs:{absolute:"",dark:"",fab:"",middle:"",left:"",color:"pink"},on:{click:function(e){t.dialog=!t.dialog}}},[n("v-icon",[t._v("add")])],1)],1),t._v(" "),n("follow-list"),t._v(" "),n("v-dialog",{staticStyle:{background:"#3A1C71"},attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("follow-create")],1)],1)},staticRenderFns:[]},I=n("VU/8")(U,$,!1,null,null,null).exports,P={data:function(){return{newtrans:""}},methods:{addtrans:function(){m.add({code:this.newtrans.trim(),created_at:Date.now(),updated_at:Date.now(),status:!1,profit:0,sell_price:0,bought_price:0}).then(function(t){console.log("Document written with ID: ",t.id)}).catch(function(t){console.error("Error adding document: ",t)}),this.newtrans=""},clear:function(){this.newtrans=""}}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticStyle:{background:"#FFFFFF"},attrs:{cols:"12",md:"12"}},[n("v-form",[n("v-text-field",{attrs:{label:"Input Code"},model:{value:t.newtrans,callback:function(e){t.newtrans=e},expression:"newtrans"}}),t._v(" "),n("v-btn",{on:{click:function(e){return e.preventDefault(),t.addtrans()}}},[t._v("Add")]),t._v(" "),n("v-btn",{on:{click:t.clear}},[t._v("clear")])],1)],1)},staticRenderFns:[]},V=n("VU/8")(P,R,!1,null,null,null).exports,B={props:["trans"],data:function(){return{menu2:!1,menu:!1,localTrans:k()({},this.trans)}},methods:{updatetrans:function(t){0!==t.sell_price&&""!==t.sell_price&&(t.profit=(t.sell_price-t.bought_price)*t.bought_volume),m.doc(this.trans.id).update(g()({},t)).then(function(t){console.log("Updated document!")}).catch(function(t){console.error("Error updating document text: ",t)}),this.$emit("nodeUpdated",t.Code)}}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",[n("v-row",{staticClass:"mx-auto pa-2"},[n("v-col",{attrs:{cols:"12"}},[n("v-subheader",[t._v("\n        Bought Information\n      ")]),t._v(" "),n("v-divider")],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-text-field",{attrs:{label:"Bought Price"},model:{value:t.localTrans.bought_price,callback:function(e){t.$set(t.localTrans,"bought_price",e)},expression:"localTrans.bought_price"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-text-field",{attrs:{label:"Volume"},model:{value:t.localTrans.bought_volume,callback:function(e){t.$set(t.localTrans,"bought_volume",e)},expression:"localTrans.bought_volume"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-text-field",t._g({attrs:{label:"Bought Date","prepend-icon":"event",readonly:""},model:{value:t.localTrans.bought_date,callback:function(e){t.$set(t.localTrans,"bought_date",e)},expression:"localTrans.bought_date"}},l))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-date-picker",{on:{input:function(e){t.menu=!1}},model:{value:t.localTrans.bought_date,callback:function(e){t.$set(t.localTrans,"bought_date",e)},expression:"localTrans.bought_date"}})],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-text-field",{attrs:{label:"Stop Loss"},model:{value:t.localTrans.stop_loss,callback:function(e){t.$set(t.localTrans,"stop_loss",e)},expression:"localTrans.stop_loss"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-text-field",{attrs:{label:"Take Profit"},model:{value:t.localTrans.take_profit,callback:function(e){t.$set(t.localTrans,"take_profit",e)},expression:"localTrans.take_profit"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-subheader",[t._v("\n        Sell Information\n      ")]),t._v(" "),n("v-divider")],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Sell Price"},model:{value:t.localTrans.sell_price,callback:function(e){t.$set(t.localTrans,"sell_price",e)},expression:"localTrans.sell_price"}})],1),t._v(" "),n("v-col",{attrs:{justify:"space-around",cols:"12",sm:"6",md:"6"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-text-field",t._g({attrs:{label:"Sell Date","prepend-icon":"event",readonly:""},model:{value:t.localTrans.sell_date,callback:function(e){t.$set(t.localTrans,"sell_date",e)},expression:"localTrans.sell_date"}},l))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),n("v-date-picker",{on:{input:function(e){t.menu2=!1}},model:{value:t.localTrans.sell_date,callback:function(e){t.$set(t.localTrans,"sell_date",e)},expression:"localTrans.sell_date"}})],1)],1),t._v(" "),n("v-col",[n("v-checkbox",{attrs:{label:"Transaction Finish"},model:{value:t.localTrans.status,callback:function(e){t.$set(t.localTrans,"status",e)},expression:"localTrans.status"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"12"}},[n("v-btn",{staticClass:"mr-4",on:{click:function(e){return e.preventDefault(),t.updatetrans(t.localTrans)}}},[t._v("Save")])],1)],1)],1)},staticRenderFns:[]},M=n("VU/8")(B,A,!1,null,null,null).exports,q={data:function(){return{newNote:""}},props:["trans"],methods:{addNote:function(){var t={memo:this.newNote.replace(/(?:\r\n|\r|\n)/g,"<br>"),created_at:Math.floor(Date.now()/1e3),status:!1};if(void 0===this.trans.note)var e=[];else e=this.trans.note;e.push(t),m.doc(this.trans.id).update({note:e}).then(function(t){console.log(" Updated Note")}).catch(function(t){console.error("Error adding document: ",t)}),this.newNote=""}}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("v-list",t._l(t.trans.note,function(e,l){return n("v-list-item",{key:l,attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t._f("formatDate")(e.created_at)))]),t._v(" "),n("v-list-item-subtitle",{staticClass:"pre-formatted"},[t._v(t._s(t._f("newline")(e.memo)))]),t._v(" "),n("v-divider")],1)],1)}),1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"12"}},[n("v-form",{ref:"form"},[n("v-textarea",{attrs:{solo:"",label:"new note"},model:{value:t.newNote,callback:function(e){t.newNote=e},expression:"newNote"}}),t._v(" "),n("v-btn",{staticClass:"mr-4",on:{click:function(e){return e.preventDefault(),t.addNote()}}},[t._v("Add")])],1)],1)],1)},staticRenderFns:[]};var H={props:["trans"],components:{NoteList:n("VU/8")(q,O,!1,function(t){n("RX3c")},"data-v-22772eaf",null).exports},methods:{edittrans:function(t){this.currentlyEditing=t.id,this.$emit("updateNode",t.id)}}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.trans.profit<0?"red lighten-4":""},[n("v-expansion-panel-header",[n("v-row",[n("v-col",{attrs:{cols:"4",md:"2"}},[t._v("\n        "+t._s(t.trans.code)+"\n      ")]),t._v(" "),n("v-col",{attrs:{cols:"4",md:"2"}},[n("p",{class:t.trans.profit<0?"red--text":""},[t._v(t._s(new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}).format(t.trans.profit)))])]),t._v(" "),n("v-col",{attrs:{cols:"8",md:"6"}},[n("p",[t._v(t._s(t.trans.bought_date))])]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"2"}},[n("v-btn",{staticClass:"d-inline",attrs:{small:"",outlined:"",color:"success"},on:{click:function(e){return t.edittrans(t.trans)}}},[n("v-icon",[t._v("edit")])],1)],1)],1)],1),t._v(" "),n("v-expansion-panel-content",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-subheader",[t._v("\n          Bought Information\n        ")]),t._v(" "),n("v-divider")],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-text-field",{attrs:{label:"Bought Price",readonly:""},model:{value:t.trans.bought_price,callback:function(e){t.$set(t.trans,"bought_price",e)},expression:"trans.bought_price"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-text-field",{attrs:{label:"Volume",readonly:""},model:{value:t.trans.bought_volume,callback:function(e){t.$set(t.trans,"bought_volume",e)},expression:"trans.bought_volume"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Bought Date",readonly:""},model:{value:t.trans.bought_date,callback:function(e){t.$set(t.trans,"bought_date",e)},expression:"trans.bought_date"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-text-field",{attrs:{label:"Stop Loss",readonly:""},model:{value:t.trans.stop_loss,callback:function(e){t.$set(t.trans,"stop_loss",e)},expression:"trans.stop_loss"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[n("v-text-field",{attrs:{label:"Take Profit",readonly:""},model:{value:t.trans.take_profit,callback:function(e){t.$set(t.trans,"take_profit",e)},expression:"trans.take_profit"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-subheader",[t._v("\n          Sell Information\n        ")]),t._v(" "),n("v-divider")],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Sell Price",readonly:""},model:{value:t.trans.sell_price,callback:function(e){t.$set(t.trans,"sell_price",e)},expression:"trans.sell_price"}})],1),t._v(" "),n("v-col",{attrs:{justify:"space-around",cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Sell Date",readonly:""},model:{value:t.trans.sell_date,callback:function(e){t.$set(t.trans,"sell_date",e)},expression:"trans.sell_date"}})],1),t._v(" "),n("v-col",[n("v-checkbox",{attrs:{label:"Transaction Finish",readonly:""},model:{value:t.trans.status,callback:function(e){t.$set(t.trans,"status",e)},expression:"trans.status"}})],1)],1),t._v(" "),n("note-list",{attrs:{trans:t.trans}})],1)],1)},staticRenderFns:[]},X={data:function(){return{Trans:[],currentlyEditing:null,type:null,search:"",panel:[]}},computed:{filterList:function(){var t=this;return this.Trans.filter(function(e){var n=!0;return n="Finish"===t.type?n&&!0===e.status:n&&!1===e.status,"Won"===t.type&&(n=n&&Number(e.profit)>0),"Lower"===t.type&&(n=n&&Number(e.profit)<=0),""!==t.search.trim()&&(n=n&&e.code.includes(t.search.trim())),n})}},components:{TransEdit:M,TransDetail:n("VU/8")(H,W,!1,null,null,null).exports},firestore:function(){return{Trans:m.orderBy("created_at","desc").orderBy("updated_at","desc")}}},Y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",[n("v-select",{attrs:{items:["Default","Finish","Won","Loss"],label:"Status",solo:""},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),t._v(" "),n("v-text-field",{attrs:{placeholder:"Search",solo:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-expansion-panels",{model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(t.filterList,function(e){return n("v-expansion-panel",{key:e.id},[t.currentlyEditing!==e.id?n("trans-detail",{attrs:{trans:e},on:{updateNode:function(e){t.currentlyEditing=e}}}):n("trans-edit",{attrs:{trans:e},on:{nodeUpdated:function(e){t.currentlyEditing=null,t.panel=[]}}})],1)}),1)],1)},staticRenderFns:[]},Q={name:"trans",data:function(){return{dialog:null}},components:{transCreate:V,transList:n("VU/8")(X,Y,!1,null,null,null).exports}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"mx-auto pa-2"},[n("v-card-text",{staticStyle:{height:"100px",position:"relative"}},[n("v-btn",{attrs:{absolute:"",dark:"",fab:"",middle:"",left:"",color:"pink"},on:{click:function(e){t.dialog=!t.dialog}}},[n("v-icon",[t._v("add")])],1)],1),t._v(" "),n("trans-list"),t._v(" "),n("v-dialog",{staticStyle:{background:"#3A1C71"},attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("trans-create")],1)],1)},staticRenderFns:[]},J=n("VU/8")(Q,G,!1,null,null,null).exports;s.default.use(c.a);var K=new c.a({routes:[{path:"/",name:"HelloWorld",component:d},{path:"/follow",name:I,component:I},{path:"/trans",name:J,component:J}]}),Z=n("hnaQ"),tt=(n("gJtD"),n("3EgV")),et=n.n(tt),nt=(n("QCv7"),n("PJh5")),lt=n.n(nt);s.default.config.productionTip=!1,s.default.use(Z.a),s.default.use(et.a),s.default.filter("formatDate",function(t){if(t)return lt.a.unix(t).format("YYYY/MM/DD hh:mm")}),s.default.filter("newline",function(t){if(console.log(t),t)return t.replace("<br>","\n")}),s.default.filter("getKeyFromValue",function(t,e){return o()(t).find(function(n){return t[n]===e})}),new s.default({el:"#app",router:K,vuetify:new et.a({icons:{iconfont:"md"}}),components:{App:i},template:"<App/>"})},QCv7:function(t,e){},QY7n:function(t,e){},RX3c:function(t,e){},gJtD:function(t,e){},nShw:function(t,e){},uslO:function(t,e,n){var l={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function o(t){return n(s(t))}function s(t){var e=l[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(l)},o.resolve=s,t.exports=o,o.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.b4d670534cd447b18fab.js.map