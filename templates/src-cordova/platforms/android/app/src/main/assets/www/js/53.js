(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{"0bf2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,filter:t.filter,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:t.$t("refresh"),icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n             "+t._s(t.$t("refreshtip"))+"\n           ")])],1)],1)]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"staff_type",attrs:{props:e}},[t._v("\n             "+t._s(e.row.staff_type)+"\n           ")]),a("q-td",{key:"creater",attrs:{props:e}},[t._v("\n             "+t._s(e.row.creater)+"\n           ")]),a("q-td",{key:"create_time",attrs:{props:e}},[t._v("\n           "+t._s(e.row.create_time)+"\n         ")]),a("q-td",{key:"update_time",attrs:{props:e}},[t._v("\n           "+t._s(e.row.update_time)+"\n         ")])],1)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("previous"),icon:"navigate_before"},on:{click:function(e){return t.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          "+t._s(t.$t("previous"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("next"),"icon-right":"navigate_next"},on:{click:function(e){return t.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          "+t._s(t.$t("next"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.pathname_previous&&!t.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:t.$t("no_data")}})],1)]],2)},s=[],i=a("3004"),o=a("18d6"),r={name:"Pagestafflist",data(){return{openid:"",login_name:"",authin:"0",pathname:"staff/type/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"staff_type",required:!0,label:this.$t("staff.view_staff.staff_type"),align:"left",field:"staff_type"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"}],filter:"",pagination:{page:1,rowsPerPage:"30"}}},methods:{getList(){var t=this;o["a"].has("auth")&&Object(i["e"])(t.pathname,{}).then((e=>{t.table_list=e.results,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListPrevious(){var t=this;o["a"].has("auth")&&Object(i["e"])(t.pathname_previous,{}).then((e=>{t.table_list=e.results,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;o["a"].has("auth")&&Object(i["e"])(t.pathname_next,{}).then((e=>{t.table_list=e.results,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.getList()}},created(){var t=this;o["a"].has("openid")?t.openid=o["a"].getItem("openid"):(t.openid="",o["a"].set("openid","")),o["a"].has("login_name")?t.login_name=o["a"].getItem("login_name"):(t.login_name="",o["a"].set("login_name","")),o["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0"},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-290)+"px":t.height=t.$q.screen.height-290+"px"},updated(){},destroyed(){}},l=r,p=a("42e1"),c=a("c694"),h=a("eaac"),u=a("e7a9"),f=a("9c40"),d=a("05c0"),m=a("bd08"),_=a("db86"),g=a("eebe"),v=a.n(g),b=Object(p["a"])(l,n,s,!1,null,null,null);"function"===typeof c["default"]&&Object(c["default"])(b);e["default"]=b.exports;v()(b,"components",{QTable:h["a"],QBtnGroup:u["a"],QBtn:f["a"],QTooltip:d["a"],QTr:m["a"],QTd:_["a"]})},"1fd3":function(t,e){},c694:function(t,e,a){"use strict";var n=a("1fd3"),s=a.n(n);e["default"]=s.a}}]);