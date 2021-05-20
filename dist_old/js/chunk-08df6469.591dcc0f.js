(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08df6469"],{"019f":function(t,e,s){},"1d52":function(t,e,s){},"1e08":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"delivery-process-dispatch-entry",attrs:{id:"delivery-process-dispatch-entry"}},[s("Heading",{attrs:{pathName:t.pathName,routeName:t.routeName}}),s("div",{staticClass:"delivery-process-dispatch-entry-inner"},[s("div",{staticClass:"dispatch-entry-tab-section"},[s("b-tabs",{staticClass:"mt-3 dispatch-entry-tabs"},[s("b-tab",{attrs:{title:"Manual Entry",active:""}},[s("div",{staticClass:"manual-entry-tab"},[s("div",{staticClass:"manual-entry-tab-inner"},[s("div",{staticClass:"input-section"},[s("div",{staticClass:"row input-section-inner"},[s("div",{staticClass:"col-lg-3 col-md-3 col-sm-6 delivery-schedule-no"},[s("div",{staticClass:"delivery-schedule-no-inner"},[s("span",{staticClass:"label"},[t._v("Gate Pass No")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.gate_pass_no,expression:"gate_pass_no"}],attrs:{type:"text",id:"ds_gate_pass_no"},domProps:{value:t.gate_pass_no},on:{keyup:function(e){return t.gatePassNoKeyUpHnadler(e)},mouseover:function(e){return t.mouseOverBearerNameEventandler(e)},mouseleave:function(e){return t.mouseOverBearerNameEventandler(e)},input:function(e){e.target.composing||(t.gate_pass_no=e.target.value)}}})])]),s("div",{staticClass:"col-lg-3 col-md-3 col-sm-6 da-sr-name"},[s("div",{staticClass:"da-sr-name-inner"},[s("span",{staticClass:"label"},[t._v("Bearer Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.SR_NAME,expression:"SR_NAME"}],attrs:{type:"text",readonly:""},domProps:{value:t.SR_NAME},on:{input:function(e){e.target.composing||(t.SR_NAME=e.target.value)}}})])]),s("div",{staticClass:"col-lg-3 col-md-3 col-sm-6 dispatch-date"},[s("div",{staticClass:"dispatch-date-inner"},[s("span",{staticClass:"label"},[t._v("Dispatch Date")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dispatch_date,expression:"dispatch_date"}],attrs:{type:"date",id:"ds_dispatch_date"},domProps:{value:t.dispatch_date},on:{input:function(e){e.target.composing||(t.dispatch_date=e.target.value)}}})])]),s("div",{staticClass:"col-lg-3 col-md-3 col-sm-6 dispatch-time"},[s("div",{staticClass:"dispatch-time-inner"},[s("span",{staticClass:"label"},[t._v("Dispatch Time")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dispatch_time,expression:"dispatch_time"}],attrs:{type:"text",id:"ds_dispatch_time"},domProps:{value:t.dispatch_time},on:{input:function(e){e.target.composing||(t.dispatch_time=e.target.value)}}})])])])]),s("div",{staticClass:"row submit-section"},[t.SR_NAME?s("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 submit-section-inner"},[s("button",{on:{click:t.dispatchNowClickHandler}},[t._v("Dispatch Now")])]):t._e()])])])]),s("b-tab",{attrs:{title:"Bar Code Scan"}},[s("div",{staticClass:"bar-code-scan-tab"},[s("div",{staticClass:"bar-code-scan-tab-inner"},[s("div",{staticClass:"delivery-details-section"},[s("div",{staticClass:"row delivery-details-section-inner"},[s("div",{staticClass:"col-lg-3 col-md-3 col-sm-6 delivery-schedule-no-section"},[s("p",{staticClass:"schedule-no"},[t._v(" GP No: "),s("span",[t._v("DSID102131")])])]),s("div",{staticClass:"col-lg-3 col-md-3 col-sm-6 da-sr-section"},[s("p",{staticClass:"da-sr"},[t._v("SR: "),s("span",[t._v("Mehedi Hassan")])])]),s("div",{staticClass:"col-lg-3 col-md-3 col-sm-6 dispatch-time"},[s("p",{staticClass:"time"},[t._v("Out-time: "),s("span",[t._v("08:30PM")])])]),s("div",{staticClass:"col-lg-3 col-md-3 col-sm-6 dispatch-date"},[s("p",{staticClass:"date"},[t._v("Date: "),s("span",[t._v("21/12/2020")])])])])]),s("div",{staticClass:"row submit-section"},[s("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 submit-section-inner"},[s("button",[t._v("Dispatch Now")])])])])])])],1)],1)]),t.success_dispatch?s("div",{staticClass:"modal-popup-section order-proceed-modal"},[s("div",{staticClass:"modal-popup-section-inner order-proceed-modal-inner"},[s("div",{staticClass:"jmi-progressbar",attrs:{id:"progressbar"}},[t.success_dispatch_msg?t._e():s("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}),s("p",[t._v(t._s(t.success_dispatch_msg))])],1)])]):t._e()],1)},i=[],n=(s("b0c0"),s("d3b7"),s("ac1f"),s("25f0"),s("1276"),s("96cf"),s("1da1")),c=s("f9e2"),r=s("1136"),o=new r["a"],l={components:{Heading:c["a"]},data:function(){return{routeName:"Dispatch Entry",parentPath:"Local Sales",pathName:[],gate_pass_no:null,GP_ID:null,SR_NAME:null,dispatch_date:null,dispatch_time:null,success_dispatch:!1,success_dispatch_msg:null}},created:function(){this.$emit("routeName",this.$route.name),this.createBreadcrumbData()},mounted:function(){document.getElementById("ds_dispatch_date").value=(new Date).toISOString().substring(0,10),document.getElementById("ds_dispatch_time").value=(new Date).toString().split(" ")[4]},methods:{createBreadcrumbData:function(){this.pathName=[{name:"Features"},{name:"Local Sales"},{name:"Dispatch Entry"}]},gatePassNoKeyUpHnadler:function(t){console.log(t.which),console.log(t.key);var e=document.querySelector("#ds_gate_pass_no");console.log(e.value),"Enter"!==t.key&&"Tab"!==t.key||this.DISPATCH_ENTRY_GP_NO__FROM_SERVICE(e.value.toString().toUpperCase())},mouseOverBearerNameEventandler:function(t){console.log("working "+this.gate_pass_no),this.gatePassNoKeyUpHnadler(t)},dispatchNowClickHandler:function(){this.CREATE_DISPATCH__FROM_SERVICE()},DISPATCH_ENTRY_GP_NO__FROM_SERVICE:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.GP_ID=null,e.SR_NAME=null,e.gate_pass_no=null,s.next=5,o.getDispatchEntryByGPNo_DS_DISPATCH_ENTRY(t).then((function(t){console.log(t.data),200===t.data.response_code||201===t.data.response_code?(e.gate_pass_no=t.data.gate_pass_info.gp_no,e.GP_ID=t.data.gate_pass_info.id,e.SR_NAME=t.data.gate_pass_info.gp_for,e.dispatch_date=(new Date).toISOString().substring(0,10),e.dispatch_time=(new Date).toString().split(" ")[4]):(e.success_dispatch=!0,e.success_dispatch_msg="Invalid Gate pass number."),setTimeout((function(){e.success_dispatch=!1,e.success_dispatch_msg=null}),2e3)})).catch((function(t){t&&console.log("Server Error 500. "+t)}));case 5:case"end":return s.stop()}}),s)})))()},CREATE_DISPATCH__FROM_SERVICE:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.success_dispatch=!0,e.next=3,o.getCreateDIspatch_DS_DISPATCH_ENTRY(t.GP_ID).then((function(e){console.log(e.data),t.success_dispatch_msg=e.data.message,setTimeout((function(){t.success_dispatch=!1,t.$router.push("/features/users/dashboard")}),2e3)})).catch((function(t){t&&console.log("Server Error 500. "+t)}));case 3:case"end":return e.stop()}}),e)})))()}}},d=l,u=(s("76a2"),s("2877")),p=s("6544"),m=s.n(p),_=s("490a"),h=Object(u["a"])(d,a,i,!1,null,"1833e59c",null);e["default"]=h.exports;m()(h,{VProgressCircular:_["a"]})},"73b0":function(t,e,s){"use strict";s("1d52")},"76a2":function(t,e,s){"use strict";s("019f")},f9e2:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"heading-title-breadcrumb",attrs:{id:"heading-title-breadcrumb"}},[s("div",{staticClass:"title-section"},[s("p",{staticClass:"page-title"},[t._v(t._s(t.routeName_))])]),s("div",{staticClass:"breadcrumb-section"},[s("p",{staticClass:"breadcrumb-sec"},t._l(t.paths,(function(e,a){return s("a",{key:a},[s("span",{on:{click:function(s){return t.sbuClick(e.name)}}},[t._v(t._s(e.name))]),e.sep?s("span",[t._v(" > ")]):t._e()])})),0)])])},i=[],n=(s("ac1f"),s("5319"),{props:["pathName","routeName"],data:function(){return{routeName_:this.routeName,paths:[]}},created:function(){this.bereadCrumbCreator()},methods:{bereadCrumbCreator:function(){for(var t={sep:" > "},e=0;e<this.pathName.length;e++)this.paths.push(this.pathName[e]),e+1<this.pathName.length&&this.paths.push(t)},sbuClick:function(t){"SBU"===t&&this.$router.replace("/adm/sbu")}}}),c=n,r=(s("73b0"),s("2877")),o=Object(r["a"])(c,a,i,!1,null,"9961313e",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-08df6469.591dcc0f.js.map