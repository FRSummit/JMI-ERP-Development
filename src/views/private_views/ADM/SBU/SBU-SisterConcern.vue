<template>
  <div id="sbu-sister-concern" class="sbu-sister-concern">
    <Heading :pathName="pathName" :routeName="routeName" />
    <PaginationSection
      :pagingStart="pageDataStart"
      :pagingEnd="pageDataEnd"
      :totalPage="totalPagesData"
      :routeName="routeName"
    />

    <table
      id="sbu-data-table"
      class="sbu-data-table"
      cellspacing="0"
      width="100%"
    >
      <tr>
        <th v-for="(head, i) in sbu_sister_concern_data_table_header" :key="i">{{ head }}</th>
      </tr>
      <tr
        v-for="(data, i) in sbu_sister_concern_data"
        :key="i"
        class="sbu-data-tr"
      >
        <td>{{ data.name }}</td>
        <td>{{ data.short_code }}</td>
        <td>
          <span>{{ data.admin }}</span>
        </td>
        <td>{{ data.key_contact }}</td>
        <td>{{ data.phone }}</td>
        <td>
          <div class="edit-btn-sec">
            <img
              class="edit-btn"
              src="../../../../assets/icons/edit.svg"
              alt="edit"
            />
            <span class="edit-btn-tooltip-txt">Edit</span>
          </div>
          <div class="del-btn-sec">
            <img
              class="del-btn"
              src="../../../../assets/icons/delete.svg"
              alt="del"
            />
            <span class="del-btn-tooltip-txt">Delete</span>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Heading from "../../../../components/private_view_components/ADM/SBU/Heading-section";
import PaginationSection from "../../../../components/private_view_components/ADM/SBU/PaginationSidebarSection";
import ERPSidebarService from "../../../../service/ERPSidebarService";
const service = new ERPSidebarService();

export default {
  components: {
    Heading,
    PaginationSection,
  },
  data() {
    return {
      routeName: "SBU Sister Concern",
      parentPath: "Settings & Management",
      pathName: null,
      pageDataStart: 1,
      pageDataEnd: 12,
      totalPagesData: 1003,
      sbu_sister_concern_data_table_header: ['Name', 'Short Code', 'Admin', 'Key Contact', 'Phone', ''],
      sbu_sister_concern_data: [],
      switch1: true,
    };
  },
  created() {
    this.$emit('routeName', this.$route.name);
    this.createBreadcrumbData();
    service.getSBUSisterConcernData().then((res) => {
      this.sbu_sister_concern_data = res.data;
    });
    // console.log(this.$route.path.split(":")[1]);
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [
        { name: "Settings & Management" },
        { name: "SBU" },
        { name: "Sister Concern" },
      ];
    },
    sbuStatusIconColor(s) {
      let status;
      switch (s) {
        case "Active":
          status = "active-status";
          break;
        case "Pending":
          status = "pending-status";
          break;
        case "Closed":
          status = "closed-status";
          break;
        case "Blocked":
          status = "blocked-status";
          break;
        default:
          break;
      }
      return status;
    },
  },
};
</script>

<style scoped>
/* SBU Data - start */
#sbu-sister-concern .sbu-data-table {
  margin-top: 30px;
  display: block;
  border-top: 1px solid #e6e6e6;
}
#sbu-sister-concern tr {
  width: 100%;
  display: block;
  border: none;
    padding: 0 10px;
}
#sbu-sister-concern tr:first-child {
  border-bottom: 1px solid #999999;
  text-transform: uppercase;
  color: #026cd1;
  margin-bottom: 10px;
}
#sbu-sister-concern tr th,
#sbu-sister-concern tr td {
  width: 17%;
  /* max-width: 200px; */
  font-size: 14px;
  display: inline-block;
  font-weight: 300;
  padding: 8px 6px;
}
#sbu-sister-concern tr th {
  font-weight: 500;
}
#sbu-sister-concern tr th:last-child,
#sbu-sister-concern tr td:last-child {
  width: 15%;
}
#sbu-sister-concern tr th:nth-child(2),
#sbu-sister-concern tr td:nth-child(2),
#sbu-sister-concern tr th:nth-child(5),
#sbu-sister-concern tr td:nth-child(5) {
  text-align: center;
}
#sbu-sister-concern .sbu-data-tr:hover {
  background: #def0ff;
  color: #026cd1;
}
#sbu-sister-concern .fa-square {
  margin-right: 12px;
}
#sbu-sister-concern .active-status {
  color: #28a411;
}
#sbu-sister-concern .pending-status {
  color: #fcc428;
}
#sbu-sister-concern .closed-status {
  color: #df2a43;
}
#sbu-sister-concern .blocked-status {
  color: #741cd9;
}
#sbu-sister-concern .edit-btn-sec {
  display: inline-block;
  padding: 0 20px;
  position: relative;
}
#sbu-sister-concern .edit-btn-sec .edit-btn {
  cursor: pointer;
}
#sbu-sister-concern .del-btn-sec {
  display: inline-block;
  position: relative;
}
#sbu-sister-concern .del-btn-sec .del-btn {
  cursor: pointer;
}
#sbu-sister-concern .edit-btn-sec .edit-btn-tooltip-txt,
#sbu-sister-concern .del-btn-sec .del-btn-tooltip-txt {
  visibility: hidden;
  width: auto;
  background-color: gray;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 2px 6px;
  position: absolute;
  left: 20px;
  z-index: 1;
  font-size: 10px;
}
#sbu-sister-concern .edit-btn-sec .edit-btn-tooltip-txt {
  left: -14px;
}
#sbu-sister-concern .edit-btn-sec:hover .edit-btn-tooltip-txt,
#sbu-sister-concern .del-btn-sec:hover .del-btn-tooltip-txt {
  visibility: visible;
}
/* SBU Data - start */

/* Media query */
@media only screen and (max-width: 1050px) {
  #sbu-sister-concern .searchbar-section {
    width: 65%;
  }
  #sbu-sister-concern .optionbar-section {
    width: 35%;
    vertical-align: text-bottom;
  }
  #sbu-sister-concern .optionbar-inner {
    padding: 0 8px;
  }
  #sbu-sister-concern .optionbar-inner img {
    padding: 0 4px;
    width: 34px;
    height: 14px;
  }
  #sbu-sister-concern tr th:last-child,
  #sbu-sister-concern tr td:last-child {
    max-width: max-content;
  }
}
@media only screen and (max-width: 900px) {
  #sbu-sister-concern .edit-btn-sec {
    padding: 0 10px;
  }
}
@media only screen and (max-width: 1500px) {
  #sbu-sister-concern tr th:last-child,
  #sbu-sister-concern tr td:last-child {
    width: 15%;
  }
}
</style>