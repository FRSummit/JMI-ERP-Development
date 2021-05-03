<template>
  <div id="sd_collection" class="sd_collection">
    <Heading :pathName="pathName" :routeName="routeName" />

    <div class="layout-body">
      <CollectionSidebar 
        v-on:select_da_from_left="selectDAFromLeft"/>
      <CollectionDetails 
        :DS_CUSTOMER_LIST="DS_CUSTOMER_LIST"/>
    </div>
  </div>
</template>

<script>
import ERPSidebarService from "../../../../service/ERPSidebarService";
const service = new ERPSidebarService();

import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumbT3/HeadingTitleBreadcrumb";
import CollectionSidebar from "./CollectionSidebar";
import CollectionDetails from "./CollectionDetails";

export default {
  props: [],
  components: {
    Heading,
    CollectionSidebar,
    CollectionDetails,
  },
  data() {
    return {
      routeName: "Collection",
      parentPath: "Local Sales",
      pathName: [],
      DS_CUSTOMER_LIST: null,
    };
  },

  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "Features" }, { name: "Local Sales" }, { name: "Collection" }];
      // this.pathName = breadcrumbFunctions.jmiERPBreadcrumb(window.location.pathname)
    },
    async selectDAFromLeft(item) {
      console.log(item)
      await this.DELIVERY_SCHEDULE_CUSTOMER_LIST__FROM_SERVICE(item.id)
    },
    // ---------------------------------------------------------------------------
    // SERVICE CALL
    async DELIVERY_SCHEDULE_CUSTOMER_LIST__FROM_SERVICE(id) {
      this.DS_CUSTOMER_LIST = null
      await service.getDeliveryScheduleCustomerListByID_COLLECTION_DETAILS(id)
        .then(res => {
          console.log(res.data)
          this.DS_CUSTOMER_LIST = res.data.customer_list
        })
        .catch(err => {
          if(err) {
            console.log('Server error : ' + err)
            this.DS_CUSTOMER_LIST = null
          }
        })
    }
  },
};
</script>



<style>
:root {
  --table-height: 40px;
}
@media screen and (max-width: 1440px) {
  :root {
    --table-height: 35px;
  }
}
.collection_area {
  margin-top: 15px;
  min-height: calc(100vh - (var(--used-height) - (-30px)));
}
.table-scroll {
  display: block;
  empty-cells: show;
  border-spacing: 0;
  background-color: var(--white);
  box-shadow: 0px 0px 8px #026cd11a;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-sizing: border-box;
}
.table-scroll thead {
  width: 100%;
  display: block;
  color: var(--blue);
  font-size: var(--font14);
  text-transform: uppercase;
}
.table-scroll tfoot {
  background-color: var(--bluish-white);
  display: block;
  width: 100%;
  font-size: var(--font14);
  border-radius: 0px 0px 8px 8px;
}
.table-scroll tfoot tr {
  border-bottom: none !important;
  color: var(--blue);
}

.table-scroll tbody {
  width: 100%;
  display: block;
  overflow-y: scroll;
  font-size: var(--font14);
  color: var(--text-black);
  height: calc((100vh - 50vh) - (var(--used-height) + 90px));
}
.table-scroll tr {
  width: 100%;
  display: flex;
  align-items: center;
  height: var(--table-height);
  border-bottom: 1px solid var(--border-color);
}
.table-scroll td,
.table-scroll th {
  flex-grow: 2;
  display: block;
  padding: 0px 1rem;
  height: var(--table-height);
  align-items: center;
}
.table-scroll td:nth-child(1),
.table-scroll th:nth-child(1) {
  flex-basis: 50%;
  flex-grow: 1;
  display: flex;
  align-items: center;
}
.table-scroll td:nth-child(2),
.table-scroll th:nth-child(2) {
  flex-basis: 25%;
  flex-grow: 1;
  text-align: center;
  display: flex;
  justify-content: center;
}
.table-scroll td:nth-last-child(-n + 5),
.table-scroll th:nth-last-child(-n + 5) {
  flex-basis: 20%;
  flex-grow: 1;
  text-align: center;
  display: flex;
  justify-content: flex-end;
}
.table-scroll-2 {
  margin-top: 15px;
  display: block;
  empty-cells: show;
  border-spacing: 0;
  background-color: var(--white);
  box-shadow: 0px 0px 8px #026cd11a;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-sizing: border-box;
}
.table-scroll-2 tr {
  width: 100%;
  display: flex;
}
.table-scroll-2 td,
.table-scroll-2 th {
  flex-grow: 1;
  display: block;
  padding: 0rem 1rem;
}
/* Start Table Head Area */
.table-scroll-2 thead {
  position: relative;
  display: block;
  width: 100%;
}
/* Table Head Row 1 */
.table-scroll-2 thead tr:nth-child(1) {
  height: 40px;
  font-size: var(--font14);
  border-radius: 8px 8px 0px 0px;
}
.table-scroll-2 thead tr:nth-child(1) th:nth-child(1) {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.table-scroll-2 thead tr:nth-child(1) th:nth-child(2) {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
/* Table Head Row 2 */
.table-scroll-2 thead tr:nth-child(2) {
  height: 20px;
  text-transform: uppercase;
}
.table-scroll-2 thead tr:nth-child(2) p {
  font-size: var(--font12);
  font-weight: 400;
}
.table-scroll-2 thead tr:nth-child(2) th:nth-child(1) {
  flex-basis: 50%;
  height: 20px;
  display: flex;
  align-items: center;
  color: var(--blue);
}
.table-scroll-2 thead tr:nth-child(2) th:nth-child(2) {
  flex-basis: 50%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--green);
  padding: 0px;
}
/* Table Head Row 3 */
.table-scroll-2 thead tr:nth-child(3) {
  height: var(--table-height);
  font-size: var(--font14);
  text-transform: uppercase;
  border-bottom: 1px solid var(--border-color);
}
.table-scroll-2 thead tr:nth-child(3) th:nth-child(1),
.table-scroll-2 thead tr:nth-child(3) th:nth-child(2),
.table-scroll-2 thead tr:nth-child(3) th:nth-child(3),
.table-scroll-2 thead tr:nth-child(3) th:nth-child(4) {
  height: var(--table-height);
  display: flex;
  align-items: center;
  color: var(--blue);
}
.table-scroll-2 thead tr:nth-child(3) th:nth-last-child(-n + 5) {
  height: var(--table-height);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--green);
}
/* End Table Head Area */

/* Start Table Body Area */
.table-scroll-2 tbody {
  width: 100%;
  display: block;
  position: relative;
  overflow-y: scroll;
  font-size: var(--font14);
  color: var(--text-black);
  height: calc((100vh - 50vh) - (var(--used-height)));
}
.table-scroll-2 tbody tr {
  width: 100%;
  display: flex;
  align-items: center;
  height: var(--table-height);
  border-bottom: 1px solid var(--border-color);
}
.table-scroll-2 tbody tr td {
  display: flex;
  align-items: center;
  height: var(--table-height);
}
/* End Table Body Area */

/* Start Table Foot Area */
.table-scroll-2 tfoot {
  display: block;
  width: 100%;
  font-size: var(--font14);
}
.table-scroll-2 tfoot tr {
  height: var(--table-height);
  display: flex;
  align-items: center;
  color: var(--blue);
  border-radius: 0px 0px 8px 8px;
  background-color: var(--bluish-white);
}
.table-scroll-2 tfoot tr th {
  height: var(--table-height);
  display: flex;
  align-items: center;
}
/* End Table Foot Area */
.table-scroll-2 thead tr:nth-child(3) th:nth-child(1),
.table-scroll-2 tbody td:nth-child(1) {
  flex-basis: 10%;
  flex-grow: 1;
  display: flex;
  justify-content: start;
}
.table-scroll-2 thead tr:nth-child(3) th:nth-child(2),
.table-scroll-2 tbody td:nth-child(2) {
  flex-basis: 10%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
.table-scroll-2 thead tr:nth-child(3) th:nth-child(3),
.table-scroll-2 tbody td:nth-child(3),
.table-scroll-2 thead tr:nth-child(3) th:nth-child(4),
.table-scroll-2 tbody td:nth-child(4) {
  flex-basis: 10%;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}
.table-scroll-2 tfoot th:nth-child(1) {
  flex-basis: 10%;
  flex-grow: 1;
  display: flex;
  justify-content: start;
}
.table-scroll-2 tfoot th:nth-child(2) {
  flex-basis: 10%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
.table-scroll-2 tfoot th:nth-child(3),
.table-scroll-2 tfoot th:nth-child(4) {
  flex-basis: 10%;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}
.table-scroll-2 thead tr:nth-child(3) th:nth-last-child(-n + 5),
.table-scroll-2 tbody td:nth-last-child(-n + 5),
.table-scroll-2 tfoot th:nth-last-child(-n + 5) {
  flex-basis: 10%;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}
.table-scroll-2 i {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  font-size: var(--font12);
  color: var(--blue);
  border-radius: 100px;
  background-color: var(--bluish-white);
  margin: 0px 5px;
}
.table-scroll-2 i .active {
  color: var(--white);
  background-color: var(--blue);
}
.table-scroll-2 i:hover {
  color: var(--white);
  background-color: var(--blue);
}
.green {
  color: var(--green);
}
.orange {
  color: #ffb347;
}
.gray {
  color: #aec1d0;
}

#add-collection-modal .modal-header .modal-title,
#view-collection-modal .modal-header .modal-title {
  color: var(--black) !important;
  font-size: var(--font16) !important;
}
#view-collection-modal .modal-header .modal-title span {
  color: var(--blue) !important;
  font-size: var(--font16) !important;
}
#add-collection-modal .modal-body {
  min-height: 380px;
}

#view-collection-modal .modal-body {
  border-radius: 0px 0px 8px 8px;
  height: 450px;
}

.table-modal {
  display: block;
  empty-cells: show;
  border-spacing: 0;
  background-color: var(--white);
  box-sizing: border-box;
  margin: -1rem;
}
.table-modal thead {
  width: 100%;
  display: block;
  color: var(--blue);
  font-size: var(--font14);
  text-transform: uppercase;
}
.table-modal tfoot {
  background-color: transparent;
  display: block;
  width: 100%;
  font-size: var(--font14);
  border-radius: 0px 0px 8px 8px;
}
.table-modal tfoot tr {
  border-bottom: none !important;
  color: var(--blue);
}
.table-modal tbody {
  width: 100%;
  display: block;
  overflow-y: scroll;
  font-size: var(--font14);
  color: var(--text-black);
  height: calc(380px - 20px);
}
.table-modal tr {
  width: 100%;
  display: flex;
  align-items: center;
  height: var(--table-height);
  border-bottom: 1px solid var(--border-color);
}
.table-modal td,
.table-modal th {
  flex-grow: 2;
  display: block;
  padding: 0px 1rem;
  height: var(--table-height);
  align-items: center;
}
.table-modal td:nth-child(1),
.table-modal th:nth-child(1) {
  flex-basis: 50%;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.table-modal td:nth-child(2),
.table-modal th:nth-child(2) {
  flex-basis: 25%;
  flex-grow: 1;
  text-align: center;
  display: flex;
  justify-content: center;
}
.table-modal td:nth-child(3),
.table-modal th:nth-child(3) {
  flex-basis: 25%;
  flex-grow: 1;
  text-align: center;
  display: flex;
  justify-content: flex-end;
}
.table-modal td:nth-child(4),
.table-modal th:nth-child(4) {
  flex-basis: 20%;
  flex-grow: 1;
  text-align: center;
  display: flex;
  justify-content: flex-end;
}

.table-modal i {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  font-size: var(--font12);
  color: var(--red);
  border-radius: 100px;
  background-color: var(--redish-white);
  margin: 0px 5px;
}
</style>