(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ac6fbda"],{"0103":function(t,e,a){},3868:function(t,e,a){"use strict";a("0103")},"3bd0":function(t,e,a){"use strict";a("5871")},"4fd8":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("a9e3"),a("b680"),a("ac1f"),a("1276");var s=a("d4ec"),i=a("bee2"),n=a("b242"),l=new n["a"],o=function(){function t(){Object(s["a"])(this,t)}return Object(i["a"])(t,[{key:"print_invoice",value:function(t,e,a,s){var i=window.open("","PRINT");return i.document.write("<html><head><title>Invoice Summery</title><style>"+this.addStylePrint_3()+'</style></head><body style=""><div class="print-section" style="page-break-before: always; overflow: hidden; padding-right: 1px;"><div class="print-section-inner"><table style=""><thead><tr style=""><td colspan="6" style=""><p style="display: inline-block; text-align: center; font-size: 16px; text-decoration: underline;">'+t+'</p></td></tr><tr style=""><td colspan="5" style=""><p style="display: inline-block; float: left;"><span class="label">No. of Invoices</span><span class="label-value">: '+(s&&s.invoice_count?s.invoice_count:"")+'</span></p><p style="display: inline-block; float: right;"><span class="label">Depot</span><span class="label-value">: '+(s&&s.depo_name?s.depo_name:"")+'</span></p></td></tr><tr style=""><td colspan="5" style=""><p style="display: inline-block; float: left;"><span class="label">DS No</span><span class="label-value">: '+(s&&s.ds_no?s.ds_no:"")+'</span></p><p style="display: inline-block; float: right;"><span class="label">Delivery Date</span><span class="label-value">: '+(s&&s.delivery_date?s.delivery_date.split(" ")[0]:"")+'</span></p></td></tr><tr style=""><td colspan="5" style="padding-bottom: 20px;"><p style="display: inline-block; float: left;"><span class="label">Territory</span><span class="label-value">: '+(s&&s.territory_id?s.territory_id:"")+"</span></p></td></tr>"+this.create_table_header(e)+"</thead><tbody>"+this.create_table_body_data(a)+'<tr style="page-break-inside: avoid; page-break-after: always;"><td colspan="5" style="padding-top: 40px;"><p style="display: inline-block; width: 33%; font-size: 14px; text-align: left;"><span class="label">Issued By</span></p><p style="display: inline-block; width: 33%; font-size: 14px;"><span class="label">Checked By</span></p><p style="display: inline-block; width: 33%; font-size: 14px; text-align: right;"><span class="label">Received By</span></p></td></tr></tbody></table></div></div>'),i.document.write("</body></html>"),i.document.close(),i.focus(),i.print(),!0}},{key:"printing_Date_Format",value:function(){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}},{key:"addStylePrint_3",value:function(){var t="";return t+="@page {size: 8.5in 11in;margin: 30mm 10mm 30mm 15mm; border: 1px solid #000000}NaNbody {margin: 0px;font-family: calibri;font-weight: 100;}p {margin: 0px;font-weight: 100;}table {border-collapse: collapse;color:black;font-size: 12px;width: 100%; text-align: center;text-align: center;font-family: calibri;page-break-inside: auto;}thead {display: table-header-group;}thead p {font-size: 12px;line-height: 1;padding: 2px 0;margin: 0;}tr {}thead tr th{font-weight: 100;}tbody {display: table-header-group;}table thead th, table tbody td {font-weight: 100;padding: 2px 6px;}}",t}},{key:"create_table_header",value:function(t){for(var e="",a=0;a<t.length;a++)e+='<th  style="border: 1px solid #000000;'+t[a].style+'">'+t[a].th+"</th>";return'<tr><th  style="border: 1px solid #000000;">Sl No.</th>'+e+"</tr>"}},{key:"create_table_body_data",value:function(t){for(var e="",a=0;a<t.length;a++)e+='<tr style="page-break-before: always;"><td style="border: 1px solid #000000;">'+(a+1)+'</td><td style="border: 1px solid #000000;">'+t[a].invoice_id+'</td><td style="border: 1px solid #000000;">'+t[a].customer_type+'</td><td style="border: 1px solid #000000; text-align: left;">'+t[a].customer_name+'</td><td style="border: 1px solid #000000; text-align: right;">'+l.comaSeparate(Number(t[a].amount).toFixed(2))+"</td></tr>";return e}}]),t}()},5871:function(t,e,a){},a4ca:function(t,e,a){"use strict";a("e125")},cd8b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"invoice-challan-summery",attrs:{id:"invoice-challan-summery"}},[a("Heading",{attrs:{pathName:t.pathName,routeName:t.routeName}}),a("div",{staticClass:"invoice-challan-summery-section"},[a("div",{staticClass:"invoice-challan-summery-inner"},[a("InvoiceChallanSummeryLeftList",{on:{invoice_id_from_left:t.invoiceIdFromLeftHandler,updated_ds_from_left:t.updatedDSFromLeftHandler}}),a("div",{staticClass:"invoice-challan-summery-detail-section"},[a("div",{staticClass:"invoice-challan-summery-detail-inner"},[a("DetailSection",{attrs:{INVOICE_CHALLAN_SUMMERY:t.INVOICE_CHALLAN_SUMMERY,DS_INVOICE:t.DS_INVOICE,DS_CHALLAN:t.DS_CHALLAN,INVOICE_ID_FROM_LEFT:t.INVOICE_ID_FROM_LEFT,HEADER_DATA_INVOICE:t.HEADER_DATA_INVOICE,HEADER_DATA_CHALLAN:t.HEADER_DATA_CHALLAN,DS_SUMMERY_FROM_LEFT:t.DS_SUMMERY_FROM_LEFT}})],1)])],1)]),t.loading_popup_modal?a("div",{staticClass:"modal-popup-section info-modal",attrs:{id:"info-modal"}},[a("div",{staticClass:"modal-popup-section-inner update-successfully-modal-inner"},[t._m(0),a("p",{staticClass:"popup-text info"},[t._v(t._s(t.loading_message?t.loading_message:"Please wait, we are processing ..."))])])]):t._e()],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"proceed-popup-icon"},[a("i",{staticClass:"zmdi zmdi-check-circle"})])}],n=(a("b0c0"),a("96cf"),a("1da1")),l=a("f9e2"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"invoice-challan-summery-left-list",attrs:{id:"invoice-challan-summery-left-list"}},[a("div",{staticClass:"invoice-challan-summery-list-section"},[a("div",{staticClass:"invoice-challan-summery-list-section-inner"},[a("div",{staticClass:"jmi-search-section",attrs:{id:"jmi-search-section"}},[a("div",{staticClass:"form-group has-search"},[a("span",{staticClass:"fa fa-search form-control-feedback"}),a("input",{staticClass:"form-control",attrs:{type:"text",id:"search-filter",placeholder:"Search by ID No"},on:{keyup:t.searchKeyUpHandler}})])]),a("div",{staticClass:"location-title"},[a("div",{staticClass:"location-title-inner"},[a("p",[t._v("Invoice/Challan List ("),a("span",[t._v(t._s(t.INVOICE_LIST.length))]),t._v(")")])])]),a("div",{staticClass:"location-list-section"},[a("div",{staticClass:"location-list-section-inner"},t._l(t.INVOICE_LIST,(function(e,s){return a("div",{key:s,staticClass:"invoice-challan-summery-section-list",attrs:{id:"invoice-challan-summery-section-list-"+s},on:{click:function(a){return t.invoiceClickHandler(e,s)}}},[a("div",{staticClass:"invoice-challan-summery-section-list-inner"},[a("div",{staticClass:"name-status-section"},[a("div",{staticClass:"name-section"},[a("p",{staticClass:"name-text"},[t._v("DS"+t._s(e.id))])]),a("div",{staticClass:"status-section"},[a("p",{staticClass:"status-text"},[t._v(" "+t._s(e.schedule_date.split(" ")[0])+" ")])])]),a("div",{staticClass:"contact-number-section"},[a("p",{staticClass:"contact-number jmi-txt-nowrap-ellipsis-middle_60"},[t._v(t._s(e.da_info.name))]),a("p",{staticClass:"status",class:e.gate_pass_id?"Completed":"Initial"},[a("span",{staticClass:"status-icon"}),t._v(t._s(e.gate_pass_id?"On Delivery":"Initial Phase"))])])])])})),0)])])])])},c=[],r=a("1136"),d=a("9bd4"),_=new r["a"],p=new d["a"],u={props:["NEW_GATE_PASS_CREATED"],components:{},data:function(){return{selectedDA:null,DSI_list:[{}],locations_details_list:[],INVOICE_LIST:[],SELECTED_INDEX:null,SELECTED_DS:!1}},created:function(){var t=this;_.getDAlistForDeliverySchedule().then((function(e){t.DSI_list=e.data})),_.getInvoiceChallanListForDeliverySchedule().then((function(e){t.locations_details_list=e.data}))},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.DELIVERY_SCHEDULE_LIST__FROM_SERVICE();case 2:case"end":return e.stop()}}),e)})))()},methods:{onChange:function(){console.log(this.selectedDA)},invoiceClickHandler:function(t,e){this.SELECTED_INDEX=null,this.SELECTED_INDEX=e;for(var a=document.getElementsByClassName("invoice-challan-summery-section-list").length,s=0;s<a;s++)document.querySelector("#invoice-challan-summery-section-list-"+s).className="invoice-challan-summery-section-list";"invoice-challan-summery-section-list"===document.querySelector("#invoice-challan-summery-section-list-"+e).className?document.querySelector("#invoice-challan-summery-section-list-"+e).className="invoice-challan-summery-section-list active":document.querySelector("#invoice-challan-summery-section-list-"+e).className="invoice-challan-summery-section-list",this.$emit("invoice_id_from_left",t)},searchKeyUpHandler:function(t){console.log(t.key);var e=document.getElementById("search-filter"),a=e.value.toUpperCase(),s=document.querySelectorAll(".invoice-challan-summery-section-list"),i="name-text";p.searchById_LeftSidebar(a,s,i)},DELIVERY_SCHEDULE_LIST__FROM_SERVICE:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_.getDeliveryScheduleList_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING().then((function(e){console.log(e.data),t.INVOICE_LIST=e.data.schedule_list,t.SELECTED_INDEX&&t.SELECTED_DS&&(t.SELECTED_DS=!1,t.$emit("updated_ds_from_left",e.data.schedule_list[t.SELECTED_INDEX]))}));case 2:case"end":return e.stop()}}),e)})))()}},computed:{PROJECT_STORE_STATE__INVOICE_CAHLLAN_SUMMERY__NEW_GATE_PASS_CREATED:function(){return this.$store.state.INVOICE_CAHLLAN_SUMMERY__NEW_GATE_PASS_CREATED}},watch:{PROJECT_STORE_STATE__INVOICE_CAHLLAN_SUMMERY__NEW_GATE_PASS_CREATED:function(t,e){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(t===e){s.next=4;break}return a.SELECTED_DS=!0,s.next=4,a.DELIVERY_SCHEDULE_LIST__FROM_SERVICE();case 4:case"end":return s.stop()}}),s)})))()}}},m=u,E=(a("f618"),a("2877")),h=Object(E["a"])(m,o,c,!1,null,"9a2e7c90",null),f=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"invoice-challan-print-detail-section"},[a("div",{staticClass:"invoice-challan-print-detail-section-inner"},[a("div",{staticClass:"invoice-challan-summery-detail-header-section"},[a("div",{staticClass:"invoice-challan-summery-detail-header-section-inner"},[a("div",{staticClass:"packing-preparation-status-section"},[a("div",{staticClass:"packing-preparation-status-section-inner"},[a("div",{staticClass:"packing-preparation-tab-section"},[a("v-card",{attrs:{color:"basil"}},[a("v-tabs",{attrs:{"background-color":"transparent",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.status_list,(function(e,s){return a("v-tab",{key:s,staticClass:"packing-tab",attrs:{disabled:"done"!==e.status_class?"":t.disabled}},[a("div",{staticClass:"tab-icon",class:e.status_class},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-check"})])]),a("div",{staticClass:"tab-name-section",class:e.status_class},[a("span",{staticClass:"tab-name"},[t._v(t._s(e.status_name))]),s+1<t.status_list.length?a("span",{staticClass:"background-fixed-h-row"}):t._e()])])})),1),a("v-tabs-items",{staticClass:"tab-container",staticStyle:{"padding-top":"30px"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.status_list,(function(e,s){return a("v-tab-item",{key:s},[a("v-card",{attrs:{color:"basil",flat:""}},["INVOICE"===e.status_name?a("v-card",[a("DetailDataList",{attrs:{tab:e.status_name,SCHEDULE_DETAILS_LIST:t.DS_INVOICE,HEADER_DATA:t.HEADER_DATA_INVOICE}})],1):t._e(),"CHALLAN"===e.status_name?a("v-card",[a("DetailDataList",{attrs:{tab:e.status_name,SCHEDULE_DETAILS_LIST:t.DS_CHALLAN,HEADER_DATA:t.HEADER_DATA_CHALLAN}})],1):t._e(),"GATE PASS"===e.status_name?a("v-card",[a("DetailDataList",{attrs:{tab:e.status_name,SCHEDULE_DETAILS_LIST:t.DS_GATEPASS,HEADER_DATA:t.DS_GATEPASS_HEADERS}})],1):t._e(),"HANDOVER"===e.status_name?a("v-card",[a("DetailDataList",{attrs:{tab:e.status_name}})],1):t._e()],1)],1)})),1)],1)],1)])])])])]),t.gate_pass_proceed_modal_popup?a("div",{staticClass:"modal-popup-section order-proceed-modal"},[a("div",{staticClass:"modal-popup-section-inner order-proceed-modal-inner"},[t._m(0),a("p",{staticClass:"popup-text"},[t._v("Are you sure?")]),a("p",{staticClass:"popup-desc"},[t._v("You want to create gate pass ?")]),a("span",{staticClass:"divider"}),a("div",{staticClass:"popup-submit-section"},[a("div",{staticClass:"popup-cancel-btn-section",on:{click:t.cancelGatePassModalClickHandler}},[a("span",[t._v("Cancel")])]),a("div",{staticClass:"popup-confirm-btn-section",on:{click:t.proceedGatePassModalClickHandler}},[a("span",[t._v("Proceed")])])])])]):t._e(),t.loading_popup_modal?a("div",{staticClass:"modal-popup-section info-modal",attrs:{id:"info-modal"}},[a("div",{staticClass:"modal-popup-section-inner update-successfully-modal-inner"},[t._m(1),a("p",{staticClass:"popup-text info"},[t._v(t._s(t.loading_message?t.loading_message:"Please wait, we are processing ..."))])])]):t._e()])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"proceed-popup-icon"},[a("i",{staticClass:"zmdi zmdi-check-circle"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"proceed-popup-icon"},[a("i",{staticClass:"zmdi zmdi-check-circle"})])}],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-data-list",attrs:{id:"detail-data-list"}},[a("div",{staticClass:"detail-data-list-inner"},[a("div",{staticClass:"detail-data-submit-section hide"},[a("div",{staticClass:"detail-data-submit-section-inner"},["Invoice Print"===t.tab||"Chalan Print"===t.tab?a("div",{staticClass:"serial-range-custom-section"},[a("div",{staticClass:"serial-range-custom-section-inner"},[a("div",{staticClass:"range-customization-section"},[a("div",{staticClass:"range-customization-section-inner"},[a("span",[t._v("Serial Range:")]),a("form",{staticClass:"input-btns"},[a("p",[a("input",{attrs:{type:"radio",checked:"checked",name:"serialRange",value:"Default"},on:{change:function(e){return t.onChange("Default")}}}),t._v(" "),a("span",{class:t.radioSpanDefaultClass},[t._v("Default")])]),a("p",[a("input",{attrs:{type:"radio",name:"serialRange",value:"Custom"},on:{change:function(e){return t.onChange("Custom")}}}),t._v(" "),a("span",{class:t.radioSpanCustomClass},[t._v("Custom")])])])])])])]):t._e(),t._m(0)])]),a("span",{staticClass:"print-all-icon"},[a("i",{staticClass:"zmdi zmdi-print",on:{click:t.printAllInvoiceClickHandler}}),a("span",{staticClass:"tool-tip"},[t._v("Print")])]),a("div",{staticClass:"detail-data-list-section"},[a("div",{staticClass:"detail-data-list-section-inner"},["GATE PASS"!==t.tab?a("table",{staticClass:"data-table",attrs:{cellspacing:"0",width:"100%"}},[t._m(1),a("tbody",t._l(t.SCHEDULE_DETAILS_LIST,(function(e,s){return a("tr",{key:s,staticClass:"data-table-data-row"},[a("td",[t._v(t._s(s+1))]),a("td",{staticStyle:{color:"#026CD1","font-weight":"500"}},[t._v(t._s(e.get_invoice&&e.get_invoice.invoice_no?e.get_invoice.invoice_no:""))]),a("td",[t._v(t._s(e.customer_info&&e.customer_info.customer_type?t.checkCustomerType(e.customer_info.customer_type):""))]),a("td",[t._v(t._s(e.customer_info&&e.customer_info.customer_name?e.customer_info.customer_name:""))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.comaSrparation(Number(e.invoice_amt).toFixed(2))))]),a("td",{staticStyle:{width:"10%"}},[a("i",{staticClass:"zmdi zmdi-print",on:{click:function(a){return t.printInvoice(e.invoice_id,e.customer_info.customer_type,s)}}})])])})),0)]):t._e(),"GATE PASS"===t.tab?a("table",{staticClass:"data-table",attrs:{cellspacing:"0",width:"100%"}},[t._m(2),a("tbody",t._l(t.SCHEDULE_DETAILS_LIST,(function(e,s){return a("tr",{key:s,staticClass:"data-table-data-row"},[a("td",[t._v(t._s(s+1))]),a("td",{staticStyle:{color:"#026CD1","font-weight":"500","text-align":"left"}},[t._v(t._s(e.sbu_product_info&&e.sbu_product_info.display_code?e.sbu_product_info.display_code:"")+" - "+t._s(e.sbu_product_info&&e.sbu_product_info.display_name?e.sbu_product_info.display_name:""))]),a("td",{},[t._v(t._s(e.total_qty))])])})),0)]):t._e()])])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"submit-btn-section"},[a("div",{staticClass:"submit-btn-section-inner"},[a("button",[t._v("Print & Next")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"data-table-head-row"},[a("th",[t._v("SL No")]),a("th",[t._v("Invoice No")]),a("th",[t._v("Customer Type")]),a("th",[t._v("Customer Name")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("Amount")]),a("th",{staticStyle:{width:"10%"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"data-table-head-row"},[a("th",[t._v("SL No")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Product Name")]),a("th",[t._v("Quantity")])])])}],b=a("8784"),D=a("1539"),g=a("4fd8"),A=(a("ac1f"),a("1276"),a("d4ec")),I=a("bee2"),L=function(){function t(){Object(A["a"])(this,t)}return Object(I["a"])(t,[{key:"print_invoice",value:function(t,e,a,s){var i=window.open("","PRINT");return i.document.write("<html><head><title>Gate Pass</title><style>"+this.addStylePrint_3()+'</style></head><body style=""><div class="print-section" style="page-break-before: always; overflow: hidden; padding-right: 1px;"><div class="print-section-inner"><table style=""><thead><tr style=""><td colspan="6" style=""><p style="display: inline-block; text-align: center; font-size: 16px; text-decoration: underline;">'+t+'</p></td></tr><tr style=""><td colspan="5" style=""><p style="display: inline-block; float: left;"><span class="label">SR</span><span class="label-value">: '+(s&&s.gp_for?s.gp_for:"")+'</span></p></td></tr><tr style=""><td colspan="5" style=""><p style="display: inline-block; float: left;"><span class="label">Vehical No</span><span class="label-value">: '+(s&&s.vehicale_id?s.vehicale_id:"")+'</span></p><p style="display: inline-block; float: right;"><span class="label">Delivery Date</span><span class="label-value">: '+(s&&s.delivery_date?s.delivery_date.split(" ")[0]:"")+'</span></p></td></tr><tr style=""><td colspan="5" style=""><p style="display: inline-block; float: left;"><span class="label">Gate Pass Type</span><span class="label-value">: '+(s&&s.gate_pass_type?s.gate_pass_type:"")+'</span></p><p style="display: inline-block; float: right;"><span class="label">Ref. No</span><span class="label-value">: '+(s&&s.gp_no?s.gp_no:"")+'</span></p></td></tr><tr style=""><td colspan="5" style="padding-bottom: 10px;"><p style="display: inline-block; text-align: left;">Description: '+(s&&s.gp_description?s.gp_description:"")+"</p></td></tr>"+this.create_table_header(e)+"</thead><tbody>"+this.create_table_body_data(a)+'<tr style="page-break-inside: avoid; page-break-after: always;"><td colspan="5" style="padding-top: 40px;"><p style="display: inline-block; width: 33%; font-size: 14px; text-align: left;"><span class="label">Issued By</span></p><p style="display: inline-block; width: 33%; font-size: 14px;"><span class="label">Checked By</span></p><p style="display: inline-block; width: 33%; font-size: 14px; text-align: right;"><span class="label">Received By</span></p></td></tr></tbody></table></div></div>'),i.document.write("</body></html>"),i.document.close(),i.focus(),i.print(),!0}},{key:"printing_Date_Format",value:function(){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}},{key:"addStylePrint_3",value:function(){var t="";return t+="@page {size: 8.5in 11in;margin: 30mm 10mm 30mm 15mm; border: 1px solid #000000}NaNbody {margin: 0px;font-family: calibri;font-weight: 100;}p {margin: 0px;font-weight: 100;}table {border-collapse: collapse;color:black;font-size: 12px;width: 100%; text-align: center;text-align: center;font-family: calibri;page-break-inside: auto;}thead {display: table-header-group;}thead p {font-size: 12px;line-height: 1;padding: 2px 0;margin: 0;}tr {}thead tr th{font-weight: 100;}tbody {display: table-header-group;}table thead th, table tbody td {font-weight: 100;padding: 2px 6px;}}",t}},{key:"create_table_header",value:function(t){for(var e="",a=0;a<t.length;a++)e+='<th  style="border: 1px solid #000000;'+t[a].style+'">'+t[a].th+"</th>";return'<tr><th  style="border: 1px solid #000000;">Sl No.</th>'+e+"</tr>"}},{key:"create_table_body_data",value:function(t){for(var e="",a=0;a<t.length;a++)e+='<tr style="page-break-before: always;"><td style="border: 1px solid #000000;">'+(a+1)+'</td><td style="border: 1px solid #000000;">'+t[a].code+'</td><td style="border: 1px solid #000000; text-align: left;">'+t[a].prod_name+'</td><td style="border: 1px solid #000000;">'+t[a].pack_size+'</td><td style="border: 1px solid #000000; text-align: right;">'+t[a].invoice_qty+"</td></tr>";return e}}]),t}(),T=a("b242"),N=new r["a"],R=new b["a"],H=new D["a"],O=new g["a"],k=new L,x=new T["a"],w={props:["tab","SCHEDULE_DETAILS_LIST","HEADER_DATA"],components:{},data:function(){return{table_header:["SL No","Invoice ID","Customer Type","Customer Name","Amount",""],radioSpanDefaultClass:"active",radioSpanCustomClass:null}},mounted:function(){console.log(this.tab)},computed:{},methods:{onChange:function(t){switch(t){case"Default":console.log("D : "+t),this.radioSpanDefaultClass="active",this.radioSpanCustomClass="";break;case"Custom":console.log("C : "+t),this.radioSpanDefaultClass="",this.radioSpanCustomClass="active";break;default:break}},comaSrparation:function(t){return x.comaSeparate(t)},printAllInvoiceClickHandler:function(){if(console.log("print ALl : "+this.tab),console.log(this.tab),"INVOICE"===this.tab||"CHALLAN"===this.tab){var t="Invoice & Challan Summary",e=[{th:"INVOICE No",style:""},{th:"CUSTOMER TYPE",style:""},{th:"CUSTOMER NAME",style:"text-align: left;"},{th:"AMOUNT",style:"text-align: right;"}];console.log(e.length);for(var a=[],s=0;s<this.SCHEDULE_DETAILS_LIST.length;s++){var i={invoice_id:this.SCHEDULE_DETAILS_LIST[s].get_invoice.invoice_no,customer_type:this.checkCustomerType(this.SCHEDULE_DETAILS_LIST[s].customer_info.customer_type),customer_name:this.SCHEDULE_DETAILS_LIST[s].customer_info.customer_name,amount:this.SCHEDULE_DETAILS_LIST[s].invoice_amt};a.push(i)}O.print_invoice(t,e,a,this.HEADER_DATA),console.log(a)}else if("GATE PASS"===this.tab){var n="Gate Pass",l=[{th:"Code",style:""},{th:"Product Name",style:"text-align: left;"},{th:"Pack Size",style:""},{th:"Invoice Qty",style:"text-align: right;"}];console.log(l.length);for(var o=[],c=0;c<this.SCHEDULE_DETAILS_LIST.length;c++){var r={code:this.SCHEDULE_DETAILS_LIST[c].sbu_product_info&&this.SCHEDULE_DETAILS_LIST[c].sbu_product_info.display_code?this.SCHEDULE_DETAILS_LIST[c].sbu_product_info.display_code:"",prod_name:this.SCHEDULE_DETAILS_LIST[c].sbu_product_info&&this.SCHEDULE_DETAILS_LIST[c].sbu_product_info.display_name?this.SCHEDULE_DETAILS_LIST[c].sbu_product_info.display_name:"",pack_size:this.SCHEDULE_DETAILS_LIST[c].adm_products&&this.SCHEDULE_DETAILS_LIST[c].adm_products.com_pack_size?this.SCHEDULE_DETAILS_LIST[c].adm_products.com_pack_size:"",invoice_qty:this.SCHEDULE_DETAILS_LIST[c].total_qty};o.push(r)}k.print_invoice(n,l,o,this.HEADER_DATA),console.log(o)}},printInvoice:function(t,e,a){var s=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return console.log("index : "+a),console.log(t),i.next=4,s.PRING_INVOCIE_DETAILS__FROM_SERVICE(t,e);case 4:case"end":return i.stop()}}),i)})))()},printGatePass:function(){console.log("printGatePass")},checkCustomerType:function(t){return console.log(t),"422"===t?"Chemist":"424"===t?"Institute":void 0},PRING_INVOCIE_DETAILS__FROM_SERVICE:function(t,e){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:N.getPrintInvoiceDetails_INVOICE_CHALLAN_PRINTING(t).then((function(t){console.log(t.data),"INVOICE"===a.tab?t.data.invoice_details.invoice_details.length>0?"422"===e?R.print_invoice(t.data.invoice_details,t.data.due_details):"424"===e&&H.print_invoice(t.data.invoice_details):alert("No Invoice data found"):"CHALLAN"===a.tab?t.data.invoice_details.invoice_details.length>0?H.print_invoice(t.data.invoice_details):alert("No GATE PASS data found"):alert("Print not designed")}));case 1:case"end":return s.stop()}}),s)})))()}}},M=w,V=(a("a4ca"),Object(E["a"])(M,C,y,!1,null,"cd38fc86",null)),P=V.exports,F=new r["a"],U={props:["INVOICE_CHALLAN_SUMMERY","DS_INVOICE","DS_CHALLAN","DS_SUMMERY_FROM_LEFT","INVOICE_ID_FROM_LEFT","HEADER_DATA_INVOICE","HEADER_DATA_CHALLAN"],components:{DetailDataList:P},data:function(){return{tab:null,status_list:[{status_class:"done",status_name:"INVOICE"},{status_class:"done",status_name:"CHALLAN"},{status_class:"done",status_name:"GATE PASS"},{status_class:"",status_name:"HANDOVER"}],DS_GATEPASS:[],DS_GATEPASS_HEADERS:[],gate_pass_proceed_modal_popup:!1,loading_popup_modal:!1,loading_message:null}},created:function(){this.$getLocation({}).then((function(t){console.log(t)}))},mounted:function(){},methods:{cancelGatePassModalClickHandler:function(){document.querySelector(".packing-tab.v-tab").click(),this.gate_pass_proceed_modal_popup=!1},proceedGatePassModalClickHandler:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return null===t.INVOICE_ID_FROM_LEFT&&(t.INVOICE_ID_FROM_LEFT=1001),t.gate_pass_proceed_modal_popup=!1,e.next=4,t.DS_GATE_PASS_DETAILS__FROM_SERVICE(t.INVOICE_ID_FROM_LEFT);case 4:case"end":return e.stop()}}),e)})))()},DS_GATE_PASS_DETAILS__FROM_SERVICE:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(t),e.DS_GATEPASS=[],e.DS_GATEPASS_HEADERS=[],null===e.DS_SUMMERY_FROM_LEFT.gate_pass_id&&(e.loading_popup_modal=!0),e.loading_message=null,a.next=7,F.getGatePassDetails_DS_INVOICE_CHALLAN_SUMMERY(t).then((function(t){console.log(t.data),t.data.response_code,e.loading_message=t.data.message,setTimeout((function(){e.loading_popup_modal=!1}),1500),e.DS_GATEPASS=t.data.gate_pass_data&&t.data.gate_pass_data.gate_pass_details?t.data.gate_pass_data.gate_pass_details:[],e.DS_GATEPASS_HEADERS=t.data.header,e.$store.state.INVOICE_CAHLLAN_SUMMERY__NEW_GATE_PASS_CREATED=new Date})).catch((function(t){console.log(t),t&&(e.DS_GATEPASS=[],e.DS_GATEPASS_HEADERS=[],document.querySelector(".packing-tab.v-tab").click(),e.loading_message="Request failed to load",setTimeout((function(){e.loading_popup_modal=!1}),1500))}));case 7:case"end":return a.stop()}}),a)})))()}},watch:{tab:function(t){console.log(t),null===this.DS_SUMMERY_FROM_LEFT.gate_pass_id&&2===t?this.gate_pass_proceed_modal_popup=!0:2===t&&this.DS_GATE_PASS_DETAILS__FROM_SERVICE(this.INVOICE_ID_FROM_LEFT)}}},G=U,Y=(a("3868"),a("6544")),z=a.n(Y),j=a("b0af"),$=a("71a3"),q=a("c671"),B=a("fe57"),W=a("aac8"),X=Object(E["a"])(G,v,S,!1,null,"3e987fc6",null),J=X.exports;z()(X,{VCard:j["a"],VTab:$["a"],VTabItem:q["a"],VTabs:B["a"],VTabsItems:W["a"]});var K=new r["a"],Q={components:{Heading:l["a"],InvoiceChallanSummeryLeftList:f,DetailSection:J},data:function(){return{routeName:"Invoice Challan Summary",parentPath:"Local Sales",pathName:[],schedule_count:null,INVOICE_CHALLAN_SUMMERY:[],DS_INVOICE:[],DS_CHALLAN:[],DS_SUMMERY_FROM_LEFT:null,INVOICE_ID_FROM_LEFT:null,loading_popup_modal:!1,loading_message:null,HEADER_DATA_INVOICE:[],HEADER_DATA_CHALLAN:[]}},created:function(){this.$emit("routeName",this.$route.name),this.createBreadcrumbData()},mounted:function(){},methods:{createBreadcrumbData:function(){this.pathName=[{name:"Features"},{name:"Local Sales"},{name:"Invoice Challan Summary"}]},invoiceIdFromLeftHandler:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(t),e.DS_SUMMERY_FROM_LEFT=null,e.INVOICE_ID_FROM_LEFT=null,e.DS_SUMMERY_FROM_LEFT=t,e.INVOICE_ID_FROM_LEFT=t.id,document.querySelector(".packing-tab.v-tab").click(),a.next=8,e.DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE(t.id);case 8:case"end":return a.stop()}}),a)})))()},updatedDSFromLeftHandler:function(t){this.DS_SUMMERY_FROM_LEFT=t},DELIVERY_SCHEDULE_DETAILS__FROM_SERVICE:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,K.getDeliveryScheduleDetails_DELIVERY_SCHEDULING_INVOICE_CHALLAN_PRINTING(t).then((function(t){if(e.INVOICE_CHALLAN_SUMMERY=[],e.DS_INVOICE=[],e.DS_CHALLAN=[],e.HEADER_DATA_INVOICE=[],e.HEADER_DATA_CHALLAN=[],console.log(t.data),e.INVOICE_CHALLAN_SUMMERY=t.data.schedule_list,e.DS_INVOICE=t.data.schedule_list,e.HEADER_DATA_INVOICE=t.data.header,console.log(e.HEADER_DATA_INVOICE),t.data.schedule_list)for(var a=0;a<t.data.schedule_list.length;a++)"424"===t.data.schedule_list[a].customer_info.customer_type&&(e.DS_CHALLAN.push(t.data.schedule_list[a]),e.HEADER_DATA_CHALLAN=t.data.header,console.log(e.HEADER_DATA_CHALLAN))})).catch((function(t){t&&(e.INVOICE_CHALLAN_SUMMERY=[],e.DS_INVOICE=[],e.DS_CHALLAN=[],e.HEADER_DATA_INVOICE=[],e.HEADER_DATA_CHALLAN=[],e.loading_message="Request failed to load or no data found",e.loading_popup_modal=!0,setTimeout((function(){e.loading_popup_modal=!1}),1500))}));case 2:case"end":return a.stop()}}),a)})))()}}},Z=Q,tt=(a("3bd0"),Object(E["a"])(Z,s,i,!1,null,"6e9e0d7c",null));e["default"]=tt.exports},e125:function(t,e,a){},f579:function(t,e,a){},f618:function(t,e,a){"use strict";a("f579")}}]);
//# sourceMappingURL=chunk-9ac6fbda.a1d04ac3.js.map