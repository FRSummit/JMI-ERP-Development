(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5ba5e32"],{"0d45":function(t,e,a){t.exports=a.p+"img/delete.3c2dd2c1.svg"},"1d52":function(t,e,a){},4504:function(t,e,a){},"73b0":function(t,e,a){"use strict";a("1d52")},b42ef:function(t,e,a){"use strict";a("4504")},bab2:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var s=a("d4ec"),n=a("ade3"),i=function t(){Object(s["a"])(this,t),Object(n["a"])(this,"Active",1),Object(n["a"])(this,"Pending",2),Object(n["a"])(this,"Closed",3),Object(n["a"])(this,"Blocked",4)}},daf0:function(t,e,a){t.exports=a.p+"img/edit.0e74f061.svg"},ec9c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sbu",attrs:{id:"sbu"}},[a("Heading",{attrs:{pathName:t.pathName,routeName:t.routeName}}),a("PaginationSection",{attrs:{pagingStart:t.pageDataStart,pagingEnd:t.pageDataEnd,totalPage:t.totalPagesData,routeName:t.routeName},on:{print:t.onPrintClick,excel:t.onExcelClick}}),t.defaultSBUtable?a("table",{staticClass:"sbu-data-table",attrs:{id:"sbu-data-table",cellspacing:"0",width:"100%"}},[a("tr",t._l(t.sub_data_table_headers,(function(e,s){return a("th",{key:s},[t._v(t._s(e))])})),0),t._l(t.sub_data,(function(e,s){return a("tr",{key:s,staticClass:"sbu-data-tr"},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.id_number))]),a("td",[a("span",{on:{click:function(e){return t.sisterConcernClick(s)}}},[t._v(t._s(e.sister_concern))])]),a("td",[t._v(t._s(e.active_user))]),a("td",{class:t.sbuStatusIconColor(e.status)},[a("i",{staticClass:"fas fa-square",class:t.sbuStatusIconColor(e.status),attrs:{id:"status-square"}}),t._v(t._s(e.status)+" ")]),t._m(0,!0)])}))],2):t._e(),a("div",{staticClass:"container",staticStyle:{width:"100%",margin:"0",padding:"0","max-width":"100%"},attrs:{id:"cont"}},[a("h2",[t._v("Basic Table")]),a("p",{attrs:{id:"my-ph"}},[t._v(" The .table class adds basic styling (light padding and only horizontal dividers) to a table: ")]),a("table",{staticClass:"table",staticStyle:{"border-top":"1px solid #e6e6e6"},attrs:{id:"sbu-table"}},[a("thead",[a("tr",t._l(t.sub_data_table_headers,(function(e,s){return a("th",{key:s,staticStyle:{border:"none"}},[t._v(" "+t._s(e)+" ")])})),0)]),a("tbody",t._l(t.sub_data,(function(e,s){return a("tr",{key:s,staticClass:"sbu-data-tr",staticStyle:{border:"none"}},[a("td",{staticStyle:{"border-top":"none",color:"##222"}},[t._v(t._s(e.name))]),a("td",{staticStyle:{"border-top":"none"}},[t._v(t._s(e.id_number))]),a("td",{staticStyle:{"border-top":"none"}},[a("span",{on:{click:function(e){return t.sisterConcernClick(s)}}},[t._v(t._s(e.sister_concern))])]),a("td",{staticStyle:{"border-top":"none"}},[t._v(t._s(e.active_user))]),a("td",{class:t.sbuStatusIconColor(e.status),staticStyle:{"border-top":"none"}},[a("i",{staticClass:"fas fa-square",class:t.sbuStatusIconColor(e.status),attrs:{id:"status-square"}}),t._v(t._s(e.status)+" ")]),t._m(1,!0)])})),0)])])],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("label",{staticClass:"label"},[s("div",{staticClass:"toggle"},[s("input",{staticClass:"toggle-state",attrs:{type:"checkbox",name:"check",value:"check"}}),s("div",{staticClass:"indicator"})]),s("span",{staticClass:"toggle-btn-tooltip-txt"},[t._v("Bring Offline")])]),s("div",{staticClass:"edit-btn-sec"},[s("img",{staticClass:"edit-btn",attrs:{src:a("daf0"),alt:"edit"}}),s("span",{staticClass:"edit-btn-tooltip-txt"},[t._v("Edit")])]),s("div",{staticClass:"del-btn-sec"},[s("img",{staticClass:"del-btn",attrs:{src:a("0d45"),alt:"del"}}),s("span",{staticClass:"del-btn-tooltip-txt"},[t._v("Delete")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticStyle:{"border-top":"none"}},[s("label",{staticClass:"label"},[s("div",{staticClass:"toggle"},[s("input",{staticClass:"toggle-state",attrs:{type:"checkbox",name:"check",value:"check"}}),s("div",{staticClass:"indicator"})]),s("span",{staticClass:"toggle-btn-tooltip-txt"},[t._v("Bring Offline")])]),s("div",{staticClass:"edit-btn-sec"},[s("img",{staticClass:"edit-btn",attrs:{src:a("daf0"),alt:"edit"}}),s("span",{staticClass:"edit-btn-tooltip-txt"},[t._v("Edit")])]),s("div",{staticClass:"del-btn-sec"},[s("img",{staticClass:"del-btn",attrs:{src:a("0d45"),alt:"del"}}),s("span",{staticClass:"del-btn-tooltip-txt"},[t._v("Delete")])])])}],i=(a("4160"),a("b0c0"),a("ac1f"),a("5319"),a("159b"),a("f9e2")),c=a("b67e"),r=a("1136"),l=a("bab2"),d=a("8baf"),o=(a("0da4"),a("d4ec")),u=a("bee2"),b=a("1157");b(document).ready((function(){}));var p=function(){function t(){Object(o["a"])(this,t)}return Object(u["a"])(t,[{key:"test",value:function(t){console.log(t);var e=window.open("","PRINT");e.document.write("<html><head><title>"+document.title+'</title><link rel="stylesheet" href=""/><link rel="stylesheet" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css"/><link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.6.5/css/buttons.dataTables.min.css"/><script src="https://code.jquery.com/jquery-3.5.1.js"><\/script><script src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"><\/script><script src="https://cdn.datatables.net/buttons/1.6.5/js/dataTables.buttons.min.js"><\/script><script src="https://cdn.datatables.net/buttons/1.6.5/js/buttons.print.min.js"><\/script>'),e.document.write("</head><body >"),e.document.write("<h1>document.title</h1>");var a=document.createElement("table");a.className="display nowrap",a.id="example";var s=document.createElement("thead");a.appendChild(s);var n=document.createElement("tr");n.innerHTML="<th>NAME</th> <th>ID NUMBER</th> <th>SISTER CONCERN</th> <th>ACTIVE USER</th> <th>STATUS</th>",s.appendChild(n);var i=document.createElement("tbody");a.appendChild(i);for(var c=0;c<t.length;c++){var r=document.createElement("tr"),l=document.createElement("td");l.innerText=t[c].name,r.appendChild(l);var d=document.createElement("td");d.innerText=t[c].id_number,r.appendChild(d);var o=document.createElement("td");o.innerText=t[c].sister_concern,r.appendChild(o);var u=document.createElement("td");u.innerText=t[c].active_user,r.appendChild(u);var b=document.createElement("td");b.innerText=t[c].status,r.appendChild(b),i.appendChild(r)}var p=document.createElement("div");return p.appendChild(a),e.document.write(p.innerHTML),e.document.write("</body></html>"),e.document.close(),e.focus(),e.print(),!0}}]),t}(),h=new r["a"],m=new l["a"],_=new p,v={components:{Heading:i["a"],PaginationSection:c["a"]},data:function(){return{routeName:"Strategic Business Unit",parentPath:"Settings & Management",currentRoute:this.$route.name,brdcm:[],pathName:null,pageDataStart:1,pageDataEnd:12,totalPagesData:1003,sub_data_table_headers:["Name","Id Number","Sister COncern","Active User","Status",""],sub_data:[],switch1:!0,defaultSBUtable:!0}},created:function(){var t=this;this.$emit("routeName",this.$route.name),this.createBreadcrumbData(),h.getSBUData().then((function(e){t.sub_data=e.data})),console.log(m.Active)},methods:{createBreadcrumbData:function(){this.pathName=[{name:"Settings & Management"},{name:"SBU"}]},sbuStatusIconColor:function(t){var e;switch(t){case"Active":e="active-status";break;case"Pending":e="pending-status";break;case"Closed":e="closed-status";break;case"Blocked":e="blocked-status";break;default:break}return e},sisterConcernClick:function(t){this.pathName+=" > Sister Concern",this.$router.replace("/adm/sbu/sbu-sister-concern:"+t)},onPrintClick:function(){_.test(this.sub_data)},onExcelClick:function(){var t=[],e=["NAME","ID NUMBER","SISTER CONCERN","ACTIVE USER","STATUS"],a="Schedule";this.sub_data.forEach((function(e){var a=[e.name||"",e.id_number||"",e.sister_concern||"",e.active_user||"",e.status||""];t.push(a)}));var s=new d["default"]("p","pt");s.autoTable(e,t),s.save(a+".pdf")}}},f=v,C=(a("b42ef"),a("2877")),g=Object(C["a"])(f,s,n,!1,null,"99ab4046",null);e["default"]=g.exports},f9e2:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"heading-title-breadcrumb",attrs:{id:"heading-title-breadcrumb"}},[a("div",{staticClass:"title-section"},[a("p",{staticClass:"page-title"},[t._v(t._s(t.routeName_))])]),a("div",{staticClass:"breadcrumb-section"},[a("p",{staticClass:"breadcrumb-sec"},t._l(t.paths,(function(e,s){return a("a",{key:s},[a("span",{on:{click:function(a){return t.sbuClick(e.name)}}},[t._v(t._s(e.name))]),e.sep?a("span",[t._v(" > ")]):t._e()])})),0)])])},n=[],i=(a("ac1f"),a("5319"),{props:["pathName","routeName"],data:function(){return{routeName_:this.routeName,paths:[]}},created:function(){this.bereadCrumbCreator()},methods:{bereadCrumbCreator:function(){for(var t={sep:" > "},e=0;e<this.pathName.length;e++)this.paths.push(this.pathName[e]),e+1<this.pathName.length&&this.paths.push(t)},sbuClick:function(t){"SBU"===t&&this.$router.replace("/adm/sbu")}}}),c=i,r=(a("73b0"),a("2877")),l=Object(r["a"])(c,s,n,!1,null,"9961313e",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-c5ba5e32.2ef16f06.js.map