(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{5225:function(t,e,a){"use strict";var n=a("79f6"),s=a.n(n);e["default"]=s.a},"79f6":function(t,e){},e8ac:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-input",{staticStyle:{display:"none"},model:{value:t.scaneddata.request_time,callback:function(e){t.$set(t.scaneddata,"request_time",e)},expression:"scaneddata.request_time"}}),a("q-card",{directives:[{name:"show",rawName:"v-show",value:!t.fab,expression:"!fab"}],style:{width:t.width,height:t.height}},[a("q-card-section",[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{color:"purple",label:t.$t("stock.view_stocklist.cyclecountresult")},on:{click:function(e){return t.ConfirmCount()}}})],1)],1),a("q-scroll-area",{style:{height:t.scroll_height,width:t.width},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[a("q-markup-table",[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v(t._s(t.bin_name_label))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.goods_code_label))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.physical_label))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.action_label))])])]),a("tbody",[t._l(t.table_list,(function(e,n){return a("tr",{key:n},[a("td",{class:{"scan-background text-center":e.bin_name===t.bin_scan,"text-center":e.bin_name!==t.bin_scan}},[t._v(t._s(e.bin_name))]),a("td",{class:{"scan-background text-center":e.bin_name===t.bin_scan&&e.goods_code===t.goods_scan,"text-center":e.bin_name!==t.bin_scan&&e.goods_code!==t.goods_scan}},[t._v(t._s(e.goods_code))]),a("td",{class:{"scan-background text-center":e.bin_name===t.bin_scan&&e.goods_code===t.goods_scan,"text-center":e.bin_name!==t.bin_scan&&e.goods_code!==t.goods_scan}},[t._v(t._s(e.physical_inventory))]),a("td",{staticClass:"text-center"},[a("q-btn",{staticStyle:{width:"50px"},attrs:{round:"",flat:"",push:"",color:"purple",icon:"repeat"},on:{click:function(e){return t.repeatCount(n)}}})],1)])}))],2)])],1),a("q-separator",{attrs:{dark:""}})],1)],1)},s=[],o=a("3004"),i=a("18d6"),c=a("09f9"),r={name:"Pagezebra_cyclecount",data(){return{openid:"",login_name:"",authin:"0",pathname:"cyclecount/",width:"",height:"",scroll_height:"",table_list:[],bin_name_label:this.$t("warehouse.view_binset.bin_name"),goods_code_label:this.$t("stock.view_stocklist.goods_code"),physical_label:this.$t("stock.view_stocklist.physical_inventory"),action_label:this.$t("action"),thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#E0E0E0",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#EEEEEE",width:"9px",opacity:.2},bar_scanned:"",bin_scan:"",goods_scan:""}},methods:{getList(){var t=this;Object(o["e"])(t.pathname,{}).then((e=>{t.table_list=e})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getGoodsList(t){var e=this;Object(o["e"])("goods/?goods_code="+t,{}).then((t=>{0===t.results.length?(navigator.vibrate(100),e.$q.notify({message:"No Goods Data",position:"top",icon:"close",color:"negative"})):1===t.results.length?e.table_list.filter((a=>{if(a.bin_name.includes(e.bin_scan)&&a.goods_code.includes(t.results[0].goods_code))return e.goods_scan=t.results[0].goods_code,a.physical_inventory+=1,a.difference=a.physical_inventory-a.goods_qty,!1})):(navigator.vibrate(100),e.$q.notify({message:"Repeating Data",position:"top",icon:"close",color:"negative"}))})).catch((t=>{navigator.vibrate(100),e.$q.notify({message:t.detail,position:"top",icon:"close",color:"negative"})}))},getBinList(t){var e=this;Object(o["e"])("binset/?bin_name="+t,{}).then((t=>{0===t.results.length?(navigator.vibrate(100),e.$q.notify({message:"No Bin Data",position:"top",icon:"close",color:"negative"})):1===t.results.length?e.bin_scan=t.results[0].bin_name:(navigator.vibrate(100),e.$q.notify({message:"Repeating Data",position:"top",icon:"close",color:"negative"}))})).catch((t=>{navigator.vibrate(100),e.$q.notify({message:t.detail,position:"top",icon:"close",color:"negative"})}))},repeatCount(t){var e=this;e.goods_scan="",e.table_list[t].physical_inventory=0},ConfirmCount(){var t=this;Object(o["i"])(t.pathname,t.table_list).then((e=>{t.reFresh(),t.$q.notify({message:"Success Confirm Cycle Count",position:"top",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,position:"top",icon:"close",color:"negative"})}))},reFresh(){var t=this;t.table_list=[],t.barscan="",t.bin_scan="",t.goods_scan="",t.getList()}},computed:{fab:{get(){return this.$store.state.fabchange.fab}},scaneddata:{get(){return this.$store.state.scanedsolve.scaneddata}}},created(){var t=this;i["a"].has("openid")?t.openid=i["a"].getItem("openid"):(t.openid="",i["a"].set("openid","")),i["a"].has("login_name")?t.login_name=i["a"].getItem("login_name"):(t.login_name="",i["a"].set("login_name","")),i["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0"},mounted(){var t=this;t.width=1*c["a"].width+"px",t.height=c["a"].height-50+"px",t.scroll_height=c["a"].height-175+"px"},updated(){var t=this;""!==t.scaneddata&&t.bar_scanned!==t.scaneddata.request_time&&("BINSET"===t.scaneddata.mode?(t.bar_scanned=t.scaneddata.request_time,t.getBinList(t.scaneddata.code)):"GOODS"===t.scaneddata.mode?""!==t.bin_scan?(t.bar_scanned=t.scaneddata.request_time,t.getGoodsList(t.scaneddata.code)):t.$q.notify({message:"No Bin Query Data",position:"top",icon:"close",color:"negative"}):t.$q.notify({message:"No Query Data",position:"top",icon:"close",color:"negative"}))},beforeDestroy(){},destroyed(){}},l=r,d=a("42e1"),_=a("5225"),h=a("27f9"),g=a("f09f"),b=a("a370"),u=a("e7a9"),p=a("9c40"),m=a("4983"),v=a("2bb1"),y=a("eb85"),f=a("eebe"),q=a.n(f),w=Object(d["a"])(l,n,s,!1,null,null,null);"function"===typeof _["default"]&&Object(_["default"])(w);e["default"]=w.exports;q()(w,"components",{QInput:h["a"],QCard:g["a"],QCardSection:b["a"],QBtnGroup:u["a"],QBtn:p["a"],QScrollArea:m["a"],QMarkupTable:v["a"],QSeparator:y["a"]})}}]);