(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{"7f50":function(t,e,s){"use strict";var o=s("9041"),a=s.n(o);e["default"]=a.a},9041:function(t,e){},a8a4:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[s("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,filter:t.filter,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[s("q-btn-group",{attrs:{push:""}},[s("q-btn",{attrs:{label:t.$t("refresh"),icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[s("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n             "+t._s(t.$t("refreshtip"))+"\n           ")])],1),s("q-btn",{attrs:{label:t.$t("download"),icon:"cloud_download"},on:{click:function(e){return t.downloadData()}}},[s("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n             "+t._s(t.$t("downloadtip"))+"\n           ")])],1)],1),s("q-space"),s("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:t.$t("search")},on:{blur:function(e){return t.getSearchList()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getSearchList()}},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"search"},on:{click:function(e){return t.getSearchList()}}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(e){return[s("q-tr",{attrs:{props:e}},[s("q-td",{key:"goods_code",attrs:{props:e}},[t._v("\n           "+t._s(e.row.goods_code)+"\n         ")]),s("q-td",{key:"goods_desc",attrs:{props:e}},[t._v("\n           "+t._s(e.row.goods_desc)+"\n         ")]),s("q-td",{key:"goods_qty",attrs:{props:e}},[t._v("\n           "+t._s(e.row.goods_qty)+"\n         ")]),s("q-td",{key:"onhand_stock",attrs:{props:e}},[t._v("\n           "+t._s(e.row.onhand_stock)+"\n         ")]),s("q-td",{key:"can_order_stock",attrs:{props:e}},[t._v("\n           "+t._s(e.row.can_order_stock)+"\n         ")]),s("q-td",{key:"ordered_stock",attrs:{props:e}},[t._v("\n           "+t._s(e.row.ordered_stock)+"\n         ")]),s("q-td",{key:"inspect_stock",attrs:{props:e}},[t._v("\n           "+t._s(e.row.inspect_stock)+"\n         ")]),s("q-td",{key:"hold_stock",attrs:{props:e}},[t._v("\n           "+t._s(e.row.hold_stock)+"\n         ")]),s("q-td",{key:"damage_stock",attrs:{props:e}},[t._v("\n             "+t._s(e.row.damage_stock)+"\n         ")]),s("q-td",{key:"asn_stock",attrs:{props:e}},[t._v("\n           "+t._s(e.row.asn_stock)+"\n         ")]),s("q-td",{key:"dn_stock",attrs:{props:e}},[t._v("\n           "+t._s(e.row.dn_stock)+"\n         ")]),s("q-td",{key:"pre_load_stock",attrs:{props:e}},[t._v("\n           "+t._s(e.row.pre_load_stock)+"\n         ")]),s("q-td",{key:"pre_sort_stock",attrs:{props:e}},[t._v("\n           "+t._s(e.row.pre_sort_stock)+"\n         ")]),s("q-td",{key:"sorted_stock",attrs:{props:e}},[t._v("\n           "+t._s(e.row.sorted_stock)+"\n         ")]),s("q-td",{key:"pick_stock",attrs:{props:e}},[t._v("\n           "+t._s(e.row.pick_stock)+"\n         ")]),s("q-td",{key:"picked_stock",attrs:{props:e}},[t._v("\n           "+t._s(e.row.picked_stock)+"\n         ")]),s("q-td",{key:"back_order_stock",attrs:{props:e}},[t._v("\n           "+t._s(e.row.back_order_stock)+"\n         ")]),s("q-td",{key:"create_time",attrs:{props:e}},[t._v("\n           "+t._s(e.row.create_time)+"\n         ")]),s("q-td",{key:"update_time",attrs:{props:e}},[t._v("\n           "+t._s(e.row.update_time)+"\n         ")])],1)]}}])})],1),[s("div",{staticClass:"q-pa-lg flex flex-center"},[s("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("previous"),icon:"navigate_before"},on:{click:function(e){return t.getListPrevious()}}},[s("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          "+t._s(t.$t("previous"))+"\n        ")])],1),s("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("next"),"icon-right":"navigate_next"},on:{click:function(e){return t.getListNext()}}},[s("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          "+t._s(t.$t("next"))+"\n        ")])],1),s("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.pathname_previous&&!t.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:t.$t("no_data")}})],1)]],2)},a=[],n=s("3004"),i=s("bd4c"),r=s("a357"),c=s("18d6"),l={name:"Pagestocklist",data(){return{openid:"",login_name:"",authin:"0",pathname:"stock/list/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],bin_size_list:[],bin_property_list:[],warehouse_list:[],columns:[{name:"goods_code",required:!0,label:this.$t("stock.view_stocklist.goods_code"),align:"left",field:"goods_code"},{name:"goods_desc",label:this.$t("stock.view_stocklist.goods_desc"),field:"goods_desc",align:"center"},{name:"goods_qty",label:this.$t("stock.view_stocklist.goods_qty"),field:"goods_qty",align:"center"},{name:"onhand_stock",label:this.$t("stock.view_stocklist.onhand_stock"),field:"onhand_stock",align:"center"},{name:"can_order_stock",label:this.$t("stock.view_stocklist.can_order_stock"),field:"can_order_stock",align:"center"},{name:"ordered_stock",label:this.$t("stock.view_stocklist.ordered_stock"),field:"ordered_stock",align:"center"},{name:"inspect_stock",label:this.$t("stock.view_stocklist.inspect_stock"),field:"inspect_stock",align:"center"},{name:"hold_stock",label:this.$t("stock.view_stocklist.hold_stock"),field:"hold_stock",align:"center"},{name:"damage_stock",label:this.$t("stock.view_stocklist.damage_stock"),field:"damage_stock",align:"center"},{name:"asn_stock",label:this.$t("stock.view_stocklist.asn_stock"),field:"asn_stock",align:"center"},{name:"dn_stock",label:this.$t("stock.view_stocklist.dn_stock"),field:"dn_stock",align:"center"},{name:"pre_load_stock",label:this.$t("stock.view_stocklist.pre_load_stock"),field:"pre_load_stock",align:"center"},{name:"pre_sort_stock",label:this.$t("stock.view_stocklist.pre_sort_stock"),field:"pre_sort_stock",align:"center"},{name:"sorted_stock",label:this.$t("stock.view_stocklist.sorted_stock"),field:"sorted_stock",align:"center"},{name:"pick_stock",label:this.$t("stock.view_stocklist.pick_stock"),field:"pick_stock",align:"center"},{name:"picked_stock",label:this.$t("stock.view_stocklist.picked_stock"),field:"picked_stock",align:"center"},{name:"back_order_stock",label:this.$t("stock.view_stocklist.back_order_stock"),field:"back_order_stock",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"}],filter:"",pagination:{page:1,rowsPerPage:"30"}}},methods:{getList(){var t=this;c["a"].has("auth")&&Object(n["d"])(t.pathname+"?ordering=-update_time",{}).then((e=>{t.table_list=e.results,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getSearchList(){var t=this;c["a"].has("auth")&&Object(n["d"])(t.pathname+"?ordering=-update_time&goods_code__icontains="+t.filter,{}).then((e=>{t.table_list=e.results,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListPrevious(){var t=this;c["a"].has("auth")&&Object(n["d"])(t.pathname_previous,{}).then((e=>{t.table_list=e.results,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;c["a"].has("auth")&&Object(n["d"])(t.pathname_next,{}).then((e=>{t.table_list=e.results,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.getList()},downloadData(){var t=this;Object(n["e"])("stock/filelist/?lang="+c["a"].getItem("lang")).then((e=>{var s=Date.now(),o=i["a"].formatDate(s,"YYYYMMDDHHmmssSSS");const a=Object(r["a"])("stocklist_"+o+".csv","\ufeff"+e.data,"text/csv");!0!==a&&t.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))}},created(){var t=this;c["a"].has("openid")?t.openid=c["a"].getItem("openid"):(t.openid="",c["a"].set("openid","")),c["a"].has("login_name")?t.login_name=c["a"].getItem("login_name"):(t.login_name="",c["a"].set("login_name","")),c["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0"},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-290)+"px":t.height=t.$q.screen.height-290+"px"},updated(){},destroyed(){}},_=l,d=s("42e1"),p=s("7f50"),k=s("eaac"),h=s("e7a9"),u=s("9c40"),g=s("05c0"),m=s("2c91"),f=s("27f9"),v=s("0016"),b=s("bd08"),w=s("db86"),y=s("eebe"),q=s.n(y),$=Object(d["a"])(_,o,a,!1,null,null,null);"function"===typeof p["default"]&&Object(p["default"])($);e["default"]=$.exports;q()($,"components",{QTable:k["a"],QBtnGroup:h["a"],QBtn:u["a"],QTooltip:g["a"],QSpace:m["a"],QInput:f["a"],QIcon:v["a"],QTr:b["a"],QTd:w["a"]})}}]);