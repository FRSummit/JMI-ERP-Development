(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6505c7e8"],{"024d":function(t,e,a){"use strict";a("b497")},"0a11":function(t,e,a){},"234c":function(t,e,a){"use strict";a("55f3")},"4fd8":function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));a("a9e3"),a("b680"),a("ac1f"),a("1276");var n=a("d4ec"),i=a("bee2"),s=a("b242"),o=new s["a"],l=function(){function t(){Object(n["a"])(this,t)}return Object(i["a"])(t,[{key:"print_invoice",value:function(t,e,a,n){var i=window.open("","PRINT");return i.document.write("<html><head><title>Invoice Summery</title><style>"+this.addStylePrint_3()+'</style></head><body style=""><div class="print-section" style="page-break-before: always; overflow: hidden; padding-right: 1px;"><div class="print-section-inner"><table style=""><thead><tr style=""><td colspan="6" style=""><p style="display: inline-block; text-align: center; font-size: 16px; text-decoration: underline;">'+t+'</p></td></tr><tr style=""><td colspan="5" style=""><p style="display: inline-block; float: left;"><span class="label">No. of Invoices</span><span class="label-value">: '+(n&&n.invoice_count?n.invoice_count:"")+'</span></p><p style="display: inline-block; float: right;"><span class="label">Depot</span><span class="label-value">: '+(n&&n.depo_name?n.depo_name:"")+'</span></p></td></tr><tr style=""><td colspan="5" style=""><p style="display: inline-block; float: left;"><span class="label">DS No</span><span class="label-value">: '+(n&&n.ds_no?n.ds_no:"")+'</span></p><p style="display: inline-block; float: right;"><span class="label">Delivery Date</span><span class="label-value">: '+(n&&n.delivery_date?n.delivery_date.split(" ")[0]:"")+'</span></p></td></tr><tr style=""><td colspan="5" style="padding-bottom: 20px;"><p style="display: inline-block; float: left;"><span class="label">Territory</span><span class="label-value">: '+(n&&n.territory_id?n.territory_id:"")+"</span></p></td></tr>"+this.create_table_header(e)+"</thead><tbody>"+this.create_table_body_data(a)+'<tr style="page-break-inside: avoid; page-break-after: always;"><td colspan="5" style="padding-top: 40px;"><p style="display: inline-block; width: 33%; font-size: 14px; text-align: left;"><span class="label">Issued By</span></p><p style="display: inline-block; width: 33%; font-size: 14px;"><span class="label">Checked By</span></p><p style="display: inline-block; width: 33%; font-size: 14px; text-align: right;"><span class="label">Received By</span></p></td></tr></tbody></table></div></div>'),i.document.write("</body></html>"),i.document.close(),i.focus(),i.print(),!0}},{key:"printing_Date_Format",value:function(){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}},{key:"addStylePrint_3",value:function(){var t="";return t+="@page {size: 8.5in 11in;margin: 30mm 10mm 30mm 15mm; border: 1px solid #000000}NaNbody {margin: 0px;font-family: calibri;font-weight: 100;}p {margin: 0px;font-weight: 100;}table {border-collapse: collapse;color:black;font-size: 12px;width: 100%; text-align: center;text-align: center;font-family: calibri;page-break-inside: auto;}thead {display: table-header-group;}thead p {font-size: 12px;line-height: 1;padding: 2px 0;margin: 0;}tr {}thead tr th{font-weight: 100;}tbody {display: table-header-group;}table thead th, table tbody td {font-weight: 100;padding: 2px 6px;}}",t}},{key:"create_table_header",value:function(t){for(var e="",a=0;a<t.length;a++)e+='<th  style="border: 1px solid #000000;'+t[a].style+'">'+t[a].th+"</th>";return'<tr><th  style="border: 1px solid #000000;">Sl No.</th>'+e+"</tr>"}},{key:"create_table_body_data",value:function(t){for(var e="",a=0;a<t.length;a++)e+='<tr style="page-break-before: always;"><td style="border: 1px solid #000000;">'+(a+1)+'</td><td style="border: 1px solid #000000;">'+t[a].invoice_id+'</td><td style="border: 1px solid #000000;">'+t[a].customer_type+'</td><td style="border: 1px solid #000000; text-align: left;">'+t[a].customer_name+'</td><td style="border: 1px solid #000000; text-align: right;">'+o.comaSeparate(Number(t[a].amount).toFixed(2))+"</td></tr>";return e}}]),t}()},"55f3":function(t,e,a){},8995:function(t,e,a){},9437:function(t,e,a){},9632:function(t,e,a){"use strict";a("9437")},b497:function(t,e,a){},c36a:function(t,e,a){"use strict";a("0a11")},d29a:function(t,e,a){"use strict";a("8995")},d43d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"invoice-challan-printing",attrs:{id:"invoice-challan-printing"}},[a("Heading",{attrs:{pathName:t.pathName,routeName:t.routeName}}),a("div",{staticClass:"invoice-challan-printing-section"},[a("div",{staticClass:"invoice-challan-printing-inner"},[a("InvoiceChallanPrintingLeftList",{on:{invoice_id_from_left:t.invoiceIdFromLeftHandler}}),a("div",{staticClass:"invoice-challan-printing-detail-section"},[a("div",{staticClass:"invoice-challan-printing-detail-inner"},[a("DetailSection",{attrs:{SCHEDULE_DETAILS_LIST:t.SCHEDULE_DETAILS_LIST,SCHEDULE_DETAILS_LIST_CHEMIST:t.SCHEDULE_DETAILS_LIST_CHEMIST,SCHEDULE_DETAILS_LIST_INSTITUTION:t.SCHEDULE_DETAILS_LIST_INSTITUTION,INVOICE_FOR_CURRENT_DS_LIST:t.INVOICE_FOR_CURRENT_DS_LIST,HEADER_DATA:t.HEADER_DATA},on:{ADD_INVOICE_TO_CURRENT_SCHEDULE:t.addInvoiceToCurrentSchedule}})],1)])],1)]),t.loading_popup_modal?a("div",{staticClass:"modal-popup-section info-modal",attrs:{id:"info-modal"}},[a("div",{staticClass:"modal-popup-section-inner update-successfully-modal-inner"},[t._m(0),a("p",{staticClass:"popup-text info"},[t._v(t._s(t.loading_message?t.loading_message:"Please wait, we are processing ..."))])])]):t._e()],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"proceed-popup-icon"},[a("i",{staticClass:"zmdi zmdi-check-circle"})])}],s=(a("b0c0"),a("96cf"),a("1da1")),o=a("f9e2"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"invoice-challan-printing-left-list",attrs:{id:"invoice-challan-printing-left-list"}},[a("div",{staticClass:"invoice-challan-printing-list-section"},[a("div",{staticClass:"invoice-challan-printing-list-section-inner"},[a("div",{staticClass:"jmi-search-section",attrs:{id:"jmi-search-section"}},[a("div",{staticClass:"form-group has-search"},[a("span",{staticClass:"fa fa-search form-control-feedback"}),a("input",{staticClass:"form-control",attrs:{type:"text",id:"search-filter",placeholder:"Search by ID No"},on:{keyup:t.searchKeyUpHandler}})])]),a("div",{staticClass:"location-title"},[a("div",{staticClass:"location-title-inner"},[a("p",[t._v("Delivery Schedule List ("),a("span",[t._v(t._s(t.INVOICE_LIST.length))]),t._v(")")])])]),a("div",{staticClass:"location-list-section"},[a("div",{staticClass:"location-list-section-inner"},t._l(t.INVOICE_LIST,(function(e,n){return a("div",{key:n,staticClass:"invoice-challan-printing-section-list",attrs:{id:"invoice-challan-printing-section-list-"+n},on:{click:function(a){return t.invoiceClickHandler(e,n)}}},[a("div",{staticClass:"invoice-challan-printing-section-list-inner"},[a("div",{staticClass:"name-status-section"},[a("div",{staticClass:"name-section"},[a("p",{staticClass:"name-text"},[t._v("DS"+t._s(e.id))])]),a("div",{staticClass:"status-section"},[a("p",{staticClass:"status-text"},[t._v(" "+t._s(e.schedule_date.split(" ")[0])+" ")])])]),a("div",{staticClass:"contact-number-section"},[a("p",{staticClass:"contact-number jmi-txt-nowrap-ellipsis-middle_60"},[t._v(t._s(e.da_info.name))]),a("p",{staticClass:"status",class:e.gate_pass_id?"Completed":"Initial"},[a("span",{staticClass:"status-icon"}),t._v(t._s(e.gate_pass_id?"On Delivery":"Initial Phase"))])])])])})),0)])])])])},c=[],r=a("1136"),d=a("9bd4"),_=new r["a"],u=new d["a"],p={components:{},data:function(){return{selectedDA:null,DSI_list:[{}],locations_details_list:[],INVOICE_LIST:[]}},created:function(){var t=this;_.getDAlistForDeliverySchedule().then((function(e){t.DSI_list=e.data})),_.getInvoiceChallanListForDeliverySchedule().then((function(e){t.locations_details_list=e.data}))},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.DELIVERY_SCHEDULE_LIST__FROM_SERVICE();case 2:case"end":return e.stop()}}),e)})))()},methods:{onChange:function(){console.log(this.selectedDA)},invoiceClickHandler:function(t,e){for(var a=document.getElementsByClassName("invoice-challan-printing-section-list").length,n=0;n<a;n++)document.querySelector("#invoice-challan-printing-section-list-"+n).className="invoice-challan-printing-section-list";"invoice-challan-printing-section-list"===document.querySelector("#invoice-challan-printing-section-list-"+e).className?document.querySelector("#invoice-challan-printing-section-list-"+e).className="invoice-challan-printing-section-list active":document.querySelector("#invoice-challan-printing-section-list-"+e).className="invoice-challan-printing-section-list",this.$emit("invoice_id_from_left",t.id)},searchKeyUpHandler:function(t){console.log(t.key);var e=document.getElementById("search-filter"),a=e.value.toUpperCase(),n=document.querySelectorAll(".invoice-challan-printing-section-list"),i="name-text";u.searchById_LeftSidebar(a,n,i)},DELIVERY_SCHEDULE_LIST__FROM_SERVICE:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:_.getDeliveryScheduleList_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING().then((function(e){console.log(e.data),t.INVOICE_LIST=e.data.schedule_list}));case 1:case"end":return e.stop()}}),e)})))()}}},E=p,I=(a("234c"),a("2877")),v=Object(I["a"])(E,l,c,!1,null,"10f07014",null),C=v.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"invoice-challan-print-detail-section"},[a("div",{staticClass:"invoice-challan-print-detail-section-inner"},[a("div",{staticClass:"invoice-challan-printing-detail-header-section"},[a("div",{staticClass:"invoice-challan-printing-detail-header-section-inner"},[a("div",{staticClass:"packing-preparation-status-section"},[a("div",{staticClass:"packing-preparation-status-section-inner"},[a("div",{staticClass:"packing-preparation-tab-section"},[a("v-card",{attrs:{color:"basil"}},[a("v-tabs",{attrs:{"background-color":"transparent",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.status_list,(function(e,n){return a("v-tab",{key:n,staticClass:"packing-tab",attrs:{disabled:"done"!==e.status_class?"":t.disabled}},[a("div",{staticClass:"tab-icon",class:e.status_class},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-check"})])]),a("div",{staticClass:"tab-name-section",class:e.status_class},[a("span",{staticClass:"tab-name"},[t._v(t._s(e.status_name))]),n+1<t.status_list.length?a("span",{staticClass:"background-fixed-h-row"}):t._e()])])})),1),a("v-tabs-items",{staticClass:"tab-container",staticStyle:{"padding-top":"30px"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.status_list,(function(e,n){return a("v-tab-item",{key:n},[a("v-card",{attrs:{color:"basil",flat:""}},["Institution"===e.status_name?a("v-card",[a("DetailsDataList",{attrs:{tab:e.status_name,SCHEDULE_DETAILS_LIST:t.SCHEDULE_DETAILS_LIST_INSTITUTION,HEADER_DATA:t.HEADER_DATA}})],1):t._e(),"Chemist"===e.status_name?a("v-card",[a("DetailsDataList",{attrs:{tab:e.status_name,SCHEDULE_DETAILS_LIST:t.SCHEDULE_DETAILS_LIST_CHEMIST,HEADER_DATA:t.HEADER_DATA}})],1):t._e(),"Add Invoice to DS"===e.status_name?a("v-card",[a("AddInvoiceToDS",{attrs:{tab:e.status_name,INVOICE_FOR_CURRENT_DS_LIST:t.INVOICE_FOR_CURRENT_DS_LIST},on:{cancel_from_add_invoice_to_ds:t.cancelFromAddInvoiceToDS,ADD_INVOICE_TO_CURRENT_SCHEDULE:t.addInvoiceToCurrentSchedule}})],1):t._e()],1)],1)})),1)],1)],1)])])])])])])},h=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-data-list",attrs:{id:"detail-data-list"}},[a("div",{staticClass:"detail-data-list-inner"},[a("div",{staticClass:"detail-data-submit-section hide"},[a("div",{staticClass:"detail-data-submit-section-inner"},["Institution"===t.tab||"Chemist"===t.tab?a("div",{staticClass:"serial-range-custom-section"},[a("div",{staticClass:"serial-range-custom-section-inner"},[a("div",{staticClass:"range-customization-section"},[a("div",{staticClass:"range-customization-section-inner"},[a("span",[t._v("Serial Range:")]),a("form",{staticClass:"input-btns"},[a("p",[a("input",{attrs:{type:"radio",checked:"checked",name:"serialRange",value:"Default"},on:{change:function(e){return t.onChange("Default")}}}),t._v(" "),a("span",{class:t.radioSpanDefaultClass},[t._v("Default")])]),a("p",[a("input",{attrs:{type:"radio",name:"serialRange",value:"Custom"},on:{change:function(e){return t.onChange("Custom")}}}),t._v(" "),a("span",{class:t.radioSpanCustomClass},[t._v("Custom")])])])])])])]):t._e(),t._m(0)])]),a("span",{staticClass:"print-all-icon"},[a("i",{staticClass:"zmdi zmdi-print",on:{click:t.printAllInvoiceClickHandler}}),a("span",{staticClass:"tool-tip"},[t._v("Print")])]),a("div",{staticClass:"detail-data-list-section"},[a("div",{staticClass:"detail-data-list-section-inner"},[a("table",{staticClass:"data-table",attrs:{cellspacing:"0",width:"100%"}},[t._m(1),a("tbody",t._l(t.SCHEDULE_DETAILS_LIST,(function(e,n){return a("tr",{key:n,staticClass:"data-table-data-row"},[a("td",[t._v(t._s(n+1))]),a("td",{staticStyle:{color:"#026CD1","font-weight":"500"}},[t._v(t._s(e.get_invoice&&e.get_invoice.invoice_no?e.get_invoice.invoice_no:""))]),a("td",[t._v(t._s(e.customer_info&&e.customer_info.customer_type?t.checkCustomerType(e.customer_info.customer_type):""))]),a("td",[t._v(t._s(e.customer_info&&e.customer_info.customer_name?e.customer_info.customer_name:""))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.comaSrparation(Number(e.invoice_amt).toFixed(2))))]),a("td",{staticStyle:{width:"10%"}},[a("i",{staticClass:"zmdi zmdi-print",on:{click:function(a){return t.printInvoice(e.invoice_id,n)}}})])])})),0)])])])])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"submit-btn-section"},[a("div",{staticClass:"submit-btn-section-inner"},[a("button",[t._v("Print & Next")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"data-table-head-row"},[a("th",[t._v("SL No")]),a("th",[t._v("Invoice No")]),a("th",[t._v("Customer Type")]),a("th",[t._v("Customer Name")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("Amount")]),a("th",{staticStyle:{width:"10%"}})])])}],D=a("8784"),T=a("1539"),g=a("b242"),L=a("4fd8"),b=new r["a"],y=new D["a"],R=new T["a"],N=new g["a"],A=new L["a"],O={props:["tab","SCHEDULE_DETAILS_LIST","HEADER_DATA"],components:{},data:function(){return{table_header:["SL No","Invoice ID","Customer Type","Customer Name","Amount",""],radioSpanDefaultClass:"active",radioSpanCustomClass:null}},methods:{onChange:function(t){switch(t){case"Default":console.log("D : "+t),this.radioSpanDefaultClass="active",this.radioSpanCustomClass="";break;case"Custom":console.log("C : "+t),this.radioSpanDefaultClass="",this.radioSpanCustomClass="active";break;default:break}},comaSrparation:function(t){return N.comaSeparate(t)},printAllInvoiceClickHandler:function(){console.log("print ALl"),console.log(this.tab);var t="Invoice Summary",e=[{th:"INVOICE No",style:""},{th:"CUSTOMER TYPE",style:""},{th:"CUSTOMER NAME",style:"text-align: left;"},{th:"AMOUNT",style:"text-align: right;"}];console.log(e.length);for(var a=[],n=0;n<this.SCHEDULE_DETAILS_LIST.length;n++){var i={invoice_id:this.SCHEDULE_DETAILS_LIST[n].get_invoice.invoice_no,customer_type:this.checkCustomerType(this.SCHEDULE_DETAILS_LIST[n].customer_info.customer_type),customer_name:this.SCHEDULE_DETAILS_LIST[n].customer_info.customer_name,amount:this.SCHEDULE_DETAILS_LIST[n].invoice_amt};a.push(i)}A.print_invoice(t,e,a,this.HEADER_DATA),console.log(a)},checkCustomerType:function(t){return console.log(t),"422"===t?"Chemist":"424"===t?"Institute":void 0},printInvoice:function(t,e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("index : "+e),console.log(t),n.next=4,a.PRING_INVOCIE_DETAILS__FROM_SERVICE(t);case 4:case"end":return n.stop()}}),n)})))()},PRING_INVOCIE_DETAILS__FROM_SERVICE:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:b.getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING(t).then((function(t){console.log(t.data),"Chemist"===e.tab?t.data.invoice_details.invoice_details.length>0?y.print_invoice(t.data.invoice_details,t.data.due_details):alert("No data found"):"Institution"===e.tab?t.data.invoice_details.invoice_details.length>0?R.print_invoice(t.data.invoice_details):alert("No data found"):alert("Print not designed")}));case 1:case"end":return a.stop()}}),a)})))()}}},H=O,U=(a("c36a"),Object(I["a"])(H,S,f,!1,null,"f4c20bfa",null)),k=U.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-data-list",attrs:{id:"detail-data-list"}},[a("div",{staticClass:"detail-data-list-inner"},[t.component_activate?a("div",{staticClass:"modal-popup-section update-successfully-modal",attrs:{id:"update-successfully-modal"}},[a("div",{staticClass:"modal-popup-section-inner update-successfully-modal-inner",staticStyle:{width:"340px",top:"25%",padding:"20px 30px"}},[a("p",{staticClass:"jmi-title jmi-title_f16_cl026CD1_left"},[t._v("Select Invoice")]),a("div",{staticStyle:{"text-align":"left"}},[a("div",{staticClass:"jmi-scroll-section"},t._l(t.INVOICE_FOR_CURRENT_DS_LIST,(function(e,n){return a("div",{key:n},[a("input",{staticClass:"jmi-input-checkbox",attrs:{id:"add-invoice-to-ds-"+n,type:"checkbox"},domProps:{value:n}}),a("label",{attrs:{for:"vehicle1"}},[t._v(t._s(e.invoice_no)+" - "+t._s(e.sbu_customer_info&&e.sbu_customer_info.display_name?e.sbu_customer_info.display_name:""))])])})),0),a("div",{staticClass:"jmi-submit-section"},[a("button",{staticClass:"jmi-cancel-btn",on:{click:t.cancelClickHandler}},[t._v("Cancel")]),a("button",{staticClass:"jmi-confirm-btn",on:{click:t.addInvoiceClickHandler}},[t._v("Add")])])])])]):t._e()])])},w=[],V={props:["tab","SCHEDULE_DETAILS_LIST","INVOICE_FOR_CURRENT_DS_LIST"],components:{},data:function(){return{component_activate:!1,SELECTED_INVOICE:[]}},created:function(){console.log(this.tab)},mounted:function(){var t=this;console.log(this.tab),setTimeout((function(){t.component_activate=!0}),100)},methods:{defaultAllCheckbox:function(){setTimeout((function(){for(var t=0;t<10;t++){var e=document.querySelector("#add-invoice-to-ds-"+t);console.log(e),e.checked=!1}}),10)},cancelClickHandler:function(){this.$emit("cancel_from_add_invoice_to_ds")},addInvoiceClickHandler:function(){this.SELECTED_INVOICE=[];for(var t=0;t<this.INVOICE_FOR_CURRENT_DS_LIST.length;t++){var e=document.querySelector("#add-invoice-to-ds-"+t);!0===e.checked&&this.SELECTED_INVOICE.push(this.INVOICE_FOR_CURRENT_DS_LIST[t].id)}this.SELECTED_INVOICE.length>0?(console.log(this.SELECTED_INVOICE),this.$emit("ADD_INVOICE_TO_CURRENT_SCHEDULE",this.SELECTED_INVOICE),this.$emit("cancel_from_add_invoice_to_ds")):alert("Please Select at least one invoice or cancel this")}},watch:{component_activate:function(t,e){console.log(t+"  "+e)}}},F=V,j=(a("d29a"),Object(I["a"])(F,x,w,!1,null,"dc3bf82a",null)),M=j.exports,P={props:["SCHEDULE_DETAILS_LIST","SCHEDULE_DETAILS_LIST_CHEMIST","SCHEDULE_DETAILS_LIST_INSTITUTION","INVOICE_FOR_CURRENT_DS_LIST","HEADER_DATA"],components:{DetailsDataList:k,AddInvoiceToDS:M},data:function(){return{tab:null,status_list:[{status_class:"done",status_name:"Institution"},{status_class:"done",status_name:"Chemist"},{status_class:"done",status_name:"Add Invoice to DS"}]}},created:function(){this.$getLocation({}).then((function(t){console.log(t)}))},mounted:function(){},methods:{centerClick:function(t){console.log(t)},findRoute:function(){console.log("find route")},saveRoute:function(){console.log("save route")},geolocate:function(){var t=this;console.log("here"),navigator.geolocation.getCurrentPosition((function(e){console.log("here 2"),console.log(t.markers),t.center={lat:e.coords.latitude,lng:e.coords.longitude}})),this.markers.push({position:{lat:this.center.lat,lng:this.center.lng}}),console.log(this.markers)},cancelFromAddInvoiceToDS:function(){console.log("cancel btn clicked"),document.querySelector(".packing-tab.v-tab").click()},addInvoiceToCurrentSchedule:function(t){this.$emit("ADD_INVOICE_TO_CURRENT_SCHEDULE",t)}}},$=P,z=(a("9632"),a("6544")),G=a.n(z),q=a("b0af"),Y=a("71a3"),B=a("c671"),J=a("fe57"),K=a("aac8"),Q=Object(I["a"])($,m,h,!1,null,"10caa1a7",null),W=Q.exports;G()(Q,{VCard:q["a"],VTab:Y["a"],VTabItem:B["a"],VTabs:J["a"],VTabsItems:K["a"]});var X=new r["a"],Z={components:{Heading:o["a"],InvoiceChallanPrintingLeftList:C,DetailSection:W},data:function(){return{routeName:"Pending DS Invoice List",parentPath:"Local Sales",pathName:[],SCHEDULE_DETAILS_LIST:[],SCHEDULE_DETAILS_LIST_CHEMIST:[],SCHEDULE_DETAILS_LIST_INSTITUTION:[],INVOICE_FOR_CURRENT_DS_LIST:[],DS_ID:null,DA_ID:null,CURRENT_SCHEDULE_ID:null,HEADER_DATA:[],loading_popup_modal:!1,loading_message:null}},created:function(){this.$emit("routeName",this.$route.name),this.createBreadcrumbData()},mounted:function(){},methods:{createBreadcrumbData:function(){this.pathName=[{name:"Features"},{name:"Local Sales"},{name:"Pending DS Invoice List"}]},invoiceIdFromLeftHandler:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(t),e.CURRENT_SCHEDULE_ID=null,e.CURRENT_SCHEDULE_ID=t,a.next=5,e.DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE(t);case 5:case"end":return a.stop()}}),a)})))()},addInvoiceToCurrentSchedule:function(t){this.ADD_INVOICE_TO_CURRENT_DS__FROM_SERVICE(t)},DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.SCHEDULE_DETAILS_LIST=[],e.SCHEDULE_DETAILS_LIST_CHEMIST=[],e.SCHEDULE_DETAILS_LIST_INSTITUTION=[],e.DA_ID=null,e.DS_ID=null,e.HEADER_DATA=[],X.getDeliveryScheduleDetails_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING(t).then((function(t){if(console.log(t.data),e.SCHEDULE_DETAILS_LIST=t.data.schedule_list,e.HEADER_DATA=t.data.header,t.data.schedule_list){for(var a=0;a<t.data.schedule_list.length;a++)"422"===t.data.schedule_list[a].customer_info.customer_type?e.SCHEDULE_DETAILS_LIST_CHEMIST.push(t.data.schedule_list[a]):"424"===t.data.schedule_list[a].customer_info.customer_type&&e.SCHEDULE_DETAILS_LIST_INSTITUTION.push(t.data.schedule_list[a]);e.DA_ID=t.data.schedule_list[0].ds_info.da_id,e.DS_ID=t.data.schedule_list[0].ds_id,e.GET_INVOICE_FOR_CURRENT_DS__FROM_SERVICE(t.data.schedule_list[0].ds_info.da_id,t.data.schedule_list[0].ds_id)}})).catch((function(t){t&&(e.SCHEDULE_DETAILS_LIST=[],e.SCHEDULE_DETAILS_LIST_CHEMIST=[],e.SCHEDULE_DETAILS_LIST_INSTITUTION=[],e.DA_ID=null,e.DS_ID=null,e.HEADER_DATA=[],e.loading_message="Request failed to load or no data found",e.loading_popup_modal=!0,setTimeout((function(){e.loading_popup_modal=!1}),1500))}));case 7:case"end":return a.stop()}}),a)})))()},GET_INVOICE_FOR_CURRENT_DS__FROM_SERVICE:function(t,e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,X.getInvoiceForCurrentDS_PENDING_DS_INVOICE_LIST(t,e).then((function(t){console.log(t.data),a.INVOICE_FOR_CURRENT_DS_LIST=t.data.invoice_info}));case 2:case"end":return n.stop()}}),n)})))()},ADD_INVOICE_TO_CURRENT_DS__FROM_SERVICE:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(n=[],i=0;i<t.length;i++)s={invoice_id:t[i]},n.push(s);return console.log(n),a.next=5,X.getAddInvoiceToCurrentDS_PENDING_DS_INVOICE_LIST(e.DS_ID,n).then((function(t){console.log(t.data),e.DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE(e.CURRENT_SCHEDULE_ID),200===t.data.response_data&&e.GET_INVOICE_FOR_CURRENT_DS__FROM_SERVICE(e.DA_ID,e.DS_ID)}));case 5:case"end":return a.stop()}}),a)})))()}}},tt=Z,et=(a("024d"),Object(I["a"])(tt,n,i,!1,null,"04cedc53",null));e["default"]=et.exports}}]);
//# sourceMappingURL=chunk-6505c7e8.43254347.js.map