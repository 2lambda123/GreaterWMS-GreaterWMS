(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{"393d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[n("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,filter:e.filter,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[n("q-btn-group",{attrs:{push:""}},[n("q-btn",{attrs:{label:e.$t("refresh"),icon:"refresh"},on:{click:function(t){return e.reFresh()}}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n             "+e._s(e.$t("refreshtip"))+"\n           ")])],1),n("q-btn",{attrs:{label:e.$t("download"),icon:"cloud_download"},on:{click:function(t){return e.downloadData()}}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n            "+e._s(e.$t("downloadtip"))+"\n           ")])],1)],1),n("q-space"),n("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:e.$t("search")},on:{blur:function(t){return e.getSearchList()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getSearchList()}},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"search"},on:{click:function(t){return e.getSearchList()}}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[n("q-tr",{attrs:{props:t}},[n("q-td",{key:"bin_name",attrs:{props:t}},[e._v("\n           "+e._s(t.row.bin_name)+"\n         ")]),n("q-td",{key:"goods_code",attrs:{props:t}},[e._v("\n           "+e._s(t.row.goods_code)+"\n         ")]),n("q-td",{key:"goods_desc",attrs:{props:t}},[e._v("\n           "+e._s(t.row.goods_desc)+"\n         ")]),n("q-td",{key:"goods_qty",attrs:{props:t}},[e._v("\n           "+e._s(t.row.goods_qty)+"\n         ")]),n("q-td",{key:"pick_qty",attrs:{props:t}},[e._v("\n           "+e._s(t.row.pick_qty)+"\n         ")]),n("q-td",{key:"picked_qty",attrs:{props:t}},[e._v("\n           "+e._s(t.row.picked_qty)+"\n         ")]),n("q-td",{key:"bin_size",attrs:{props:t}},[e._v("\n           "+e._s(t.row.bin_size)+"\n         ")]),n("q-td",{key:"bin_property",attrs:{props:t}},[e._v("\n           "+e._s(t.row.bin_property)+"\n         ")]),n("q-td",{key:"create_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.create_time)+"\n         ")]),n("q-td",{key:"update_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.update_time)+"\n         ")]),n("q-td",{key:"action",staticStyle:{width:"50px"},attrs:{props:t}},[n("q-btn",{directives:[{name:"show",rawName:"v-show",value:"Inbound"!==e.$q.localStorage.getItem("staff_type")&&"Outbound"!==e.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Inbound' &&\n                          $q.localStorage.getItem('staff_type') !== 'Outbound'\n                         "}],attrs:{round:"",flat:"",push:"",color:"purple",icon:"move_to_inbox"},on:{click:function(n){return e.BinMove(t.row)}}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n               "+e._s(e.$t("movetobin"))+"\n            ")])],1)],1)],1)]}}])})],1),[n("div",{staticClass:"q-pa-lg flex flex-center"},[n("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("previous"))+"\n        ")])],1),n("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("next"))+"\n        ")])],1),n("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)],n("q-dialog",{model:{value:e.moveForm,callback:function(t){e.moveForm=t},expression:"moveForm"}},[n("q-card",{staticClass:"shadow-24"},[n("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[n("div",[e._v(e._s(e.movedata.goods_code)+" "+e._s(e.$t("frombin"))+" "+e._s(e.movedata.bin_name))]),n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[n("q-tooltip",[e._v(e._s(e.$t("index.close")))])],1)],1),n("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[n("q-input",{staticStyle:{"margin-bottom":"5px"},attrs:{dense:"",outlined:"",square:"",debounce:"500",type:"number",label:e.$t("stock.view_stocklist.goods_qty"),rules:[function(e){return e&&e>0||"Please Enter the Qty, It must > 0"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.MoveToBinSubmit()}},scopedSlots:e._u([{key:"before",fn:function(){return[n("q-select",{attrs:{dense:"",outlined:"",square:"","use-input":"","hide-selected":"","fill-input":"",label:e.$t("warehouse.view_binset.bin_name"),options:e.options},on:{filter:e.filterFn,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.MoveToBinSubmit()}},scopedSlots:e._u([{key:"no-option",fn:function(){return[n("q-item",[n("q-item-section",{staticClass:"text-grey"},[e._v("\n                   No results\n                 ")])],1)]},proxy:!0},e.movedata.move_to_bin?{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(t){t.stopPropagation(),e.movedata.move_to_bin=""}}})]},proxy:!0}:null],null,!0),model:{value:e.movedata.move_to_bin,callback:function(t){e.$set(e.movedata,"move_to_bin",t)},expression:"movedata.move_to_bin"}})]},proxy:!0}]),model:{value:e.movedata.move_qty,callback:function(t){e.$set(e.movedata,"move_qty",e._n(t))},expression:"movedata.move_qty"}})],1),n("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[n("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.MoveToBinCancel()}}},[e._v(e._s(e.$t("cancel")))]),n("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.MoveToBinSubmit()}}},[e._v(e._s(e.$t("submit")))])],1)],1)],1)],2)},o=[],i=n("3004"),s=n("bd4c"),r=n("a357"),l=n("a639"),c=n("18d6"),p={name:"Pagestockbinlist",data(){return{openid:"",login_name:"",authin:"0",pathname:"stock/bin/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],bin_size_list:[],bin_property_list:[],warehouse_list:[],columns:[{name:"bin_name",required:!0,label:this.$t("warehouse.view_binset.bin_name"),align:"left",field:"bin_name"},{name:"goods_code",label:this.$t("stock.view_stocklist.goods_code"),field:"goods_code",align:"center"},{name:"goods_desc",label:this.$t("stock.view_stocklist.goods_desc"),field:"onhand_stock",align:"center"},{name:"goods_qty",label:this.$t("stock.view_stocklist.onhand_stock"),field:"goods_qty",align:"center"},{name:"pick_qty",label:this.$t("stock.view_stocklist.pick_stock"),field:"pick_qty",align:"center"},{name:"picked_qty",label:this.$t("stock.view_stocklist.picked_stock"),field:"picked_qty",align:"center"},{name:"bin_size",label:this.$t("warehouse.view_binset.bin_size"),field:"bin_size",align:"center"},{name:"bin_property",label:this.$t("warehouse.view_binset.bin_property"),field:"bin_property",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},options:[],moveForm:!1,movedata:{}}},methods:{getList(){var e=this;c["a"].has("auth")&&Object(i["e"])(e.pathname,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getSearchList(){var e=this;c["a"].has("auth")&&Object(i["e"])(e.pathname+"?bin_name__icontains="+e.filter,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;c["a"].has("auth")&&Object(i["e"])(e.pathname_previous,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;c["a"].has("auth")&&Object(i["e"])(e.pathname_next,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()},BinMove(e){var t=this;t.moveForm=!0,t.movedata=e},MoveToBinCancel(){var e=this;e.moveForm=!1,e.movedata={}},MoveToBinSubmit(){var e=this;Object(i["h"])(e.pathname+e.movedata.id+"/",e.movedata).then((t=>{e.getList(),e.MoveToBinCancel(),e.$q.notify({message:"Bin Moving Success",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},filterFn(e,t,n){var a=this;e.length<1?n():t((()=>{const t=e.toLowerCase();Object(i["e"])("binset/?bin_name__icontains="+t).then((e=>{var t=[];e.results.forEach((e=>{t.push(e.bin_name)})),l["a"].set("bin_name",t),a.options=l["a"].getItem("bin_name")})).catch((e=>{a.$q.notify({message:e.detail,icon:"close",color:"negative"})}))}))},downloadData(){var e=this;Object(i["f"])("stock/filebinlist/?lang="+c["a"].getItem("lang")).then((t=>{var n=Date.now(),a=s["b"].formatDate(n,"YYYYMMDDHHmmssSSS");const o=Object(r["a"])("stockbinlist_"+a+".csv","\ufeff"+t.data,"text/csv");!0!==o&&e.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))}},created(){var e=this;c["a"].has("openid")?e.openid=c["a"].getItem("openid"):(e.openid="",c["a"].set("openid","")),c["a"].has("login_name")?e.login_name=c["a"].getItem("login_name"):(e.login_name="",c["a"].set("login_name","")),c["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){var e=this;e.$q.platform.is.electron?e.height=String(e.$q.screen.height-290)+"px":e.height=e.$q.screen.height-290+"px"},updated(){},destroyed(){}},d=p,u=n("42e1"),_=n("b8b7"),m=n("eaac"),h=n("e7a9"),b=n("9c40"),v=n("05c0"),f=n("2c91"),g=n("27f9"),y=n("0016"),k=n("bd08"),q=n("db86"),w=n("24e8"),x=n("f09f"),$=n("d847"),S=n("a370"),C=n("ddd8"),Q=n("66e5"),I=n("4074"),O=n("7f67"),B=n("eebe"),L=n.n(B),M=Object(u["a"])(d,a,o,!1,null,null,null);"function"===typeof _["default"]&&Object(_["default"])(M);t["default"]=M.exports;L()(M,"components",{QTable:m["a"],QBtnGroup:h["a"],QBtn:b["a"],QTooltip:v["a"],QSpace:f["a"],QInput:g["a"],QIcon:y["a"],QTr:k["a"],QTd:q["a"],QDialog:w["a"],QCard:x["a"],QBar:$["a"],QCardSection:S["a"],QSelect:C["a"],QItem:Q["a"],QItemSection:I["a"]}),L()(M,"directives",{ClosePopup:O["a"]})},"5d1c":function(e,t){},b8b7:function(e,t,n){"use strict";var a=n("5d1c"),o=n.n(a);t["default"]=o.a}}]);