(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bcdcb"],{"2a17":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sales-center",attrs:{id:"sales-center"}},[e("Heading",{attrs:{pathName:t.pathName,routeName:t.routeName}}),e("PaginationSection",{attrs:{pagingStart:t.pageDataStart,pagingEnd:t.pageDataEnd,totalPage:t.totalPagesData,routeName:t.routeName},on:{print:t.onPrintClick,excel:t.onExcelClick}}),e("v-data-table",{staticClass:"page__table",attrs:{headers:t.tableHeaders,items:t.tableItems,loading:t.loading,"item-key":"id","show-select":!1,"disable-pagination":!0,"hide-default-footer":!0},scopedSlots:t._u([{key:"body",fn:function(a){return[e("draggable",{attrs:{list:a.items,tag:"tbody"}},t._l(t.users,(function(a,n){return e("tr",{key:n},[e("td",[e("v-icon",{staticClass:"page__grab-icon",attrs:{small:""}},[t._v(" mdi-arrow-all ")])],1),e("td",[t._v(" "+t._s(n+1)+" ")]),e("td",[t._v(" "+t._s(a.name)+" ")]),e("td",[t._v(" "+t._s(a.short_code)+" ")]),e("td",[t._v(" "+t._s(a.admin)+" ")]),e("td",[t._v(" "+t._s(a.key_contact)+" ")]),e("td",[t._v(" "+t._s(a.phone)+" ")]),e("td",[e("v-icon",{attrs:{small:""},on:{click:function(e){return t.editUser(a.id)}}},[t._v(" mdi-pencil ")])],1)])})),0)]}}])})],1)},s=[],i=(e("b0c0"),e("f9e2")),r=e("b67e"),o=e("1136"),c=e("b76a"),l=e.n(c),d=new o["a"],u={components:{Heading:i["a"],PaginationSection:r["a"],Draggable:l.a},data:function(){return{routeName:"Sales Center",parentPath:"Settings & Management",currentRoute:this.$route.name,pathName:null,pageDataStart:1,pageDataEnd:12,totalPagesData:1003,users:[]}},created:function(){var t=this;this.$emit("routeName",this.$route.name),this.createBreadcrumbData(),d.getSBUSisterConcernData().then((function(a){t.users=a.data}))},methods:{createBreadcrumbData:function(){this.pathName=[{name:"Settings & Management"},{name:"Sales Center"}]},onPrintClick:function(){},onExcelClick:function(){}}},m=u,g=e("2877"),p=e("6544"),_=e.n(p),b=e("8fea"),h=e("132d"),f=Object(g["a"])(m,n,s,!1,null,"141b2a53",null);a["default"]=f.exports;_()(f,{VDataTable:b["a"],VIcon:h["a"]})}}]);
//# sourceMappingURL=chunk-2d0bcdcb.f5a9e339.js.map