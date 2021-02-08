<template>
  <div id="sbu" class="sbu">
    <Heading :pathName="pathName" :routeName="routeName" />
    <PaginationSection
      :pagingStart="pageDataStart"
      :pagingEnd="pageDataEnd"
      :totalPage="totalPagesData"
      :routeName="routeName"
      v-on:print="onPrintClick"
      v-on:excel="onExcelClick"
    />
    <table
      id="sbu-data-table"
      class="sbu-data-table"
      cellspacing="0"
      width="100%"
      v-if="defaultSBUtable"
    >
      <tr>
        <th v-for="(head, i) in sub_data_table_headers" :key="i">{{ head }}</th>
      </tr>
      <tr v-for="(data, i) in sub_data" :key="i" class="sbu-data-tr">
        <td>{{ data.name }}</td>
        <td>{{ data.id_number }}</td>
        <td>
          <span @click="sisterConcernClick(i)">{{ data.sister_concern }}</span>
        </td>
        <td>{{ data.active_user }}</td>
        <td :class="sbuStatusIconColor(data.status)">
          <!-- <i id="status-square" class="fas fa-square"></i>{{ sbuStatusIconColor(data.status) }} -->
          <i
            id="status-square"
            class="fas fa-square"
            :class="sbuStatusIconColor(data.status)"
          ></i
          >{{ data.status }}
        </td>
        <td>
          <label class="label">
            <div class="toggle">
              <input
                class="toggle-state"
                type="checkbox"
                name="check"
                value="check"
              />
              <div class="indicator"></div>
            </div>
            <span class="toggle-btn-tooltip-txt">Bring Offline</span>
          </label>
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

    <div
      class="container"
      id="cont"
      style="width: 100%; margin: 0; padding: 0; max-width: 100%"
    >
      <h2>Basic Table</h2>
      <p id="my-ph">
        The .table class adds basic styling (light padding and only horizontal
        dividers) to a table:
      </p>
      <table class="table" id="sbu-table" style="border-top: 1px solid #e6e6e6">
        <thead>
          <tr>
            <th
              v-for="(head, i) in sub_data_table_headers"
              :key="i"
              style="border: none"
            >
              {{ head }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(data, i) in sub_data"
            :key="i"
            class="sbu-data-tr"
            style="border: none"
          >
            <td style="border-top: none; color: ##222">{{ data.name }}</td>
            <td style="border-top: none">{{ data.id_number }}</td>
            <td style="border-top: none">
              <span @click="sisterConcernClick(i)">{{
                data.sister_concern
              }}</span>
            </td>
            <td style="border-top: none">{{ data.active_user }}</td>
            <td
              style="border-top: none"
              :class="sbuStatusIconColor(data.status)"
            >
              <!-- <i id="status-square" class="fas fa-square"></i>{{ sbuStatusIconColor(data.status) }} -->
              <i
                id="status-square"
                class="fas fa-square"
                :class="sbuStatusIconColor(data.status)"
              ></i
              >{{ data.status }}
            </td>
            <td style="border-top: none">
              <label class="label">
                <div class="toggle">
                  <input
                    class="toggle-state"
                    type="checkbox"
                    name="check"
                    value="check"
                  />
                  <div class="indicator"></div>
                </div>
                <span class="toggle-btn-tooltip-txt">Bring Offline</span>
              </label>
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
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import Heading from "../../../../components/private_view_components/ADM/SBU/Heading-section";
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
import PaginationSection from "../../../../components/private_view_components/ADM/SBU/PaginationSidebarSection";
// import BreadcrumbCreation from "../../../../path-specify/PathTree";
// const brd = new BreadcrumbCreation();
import ERPSidebarService from "../../../../service/ERPSidebarService";
const service = new ERPSidebarService();
import SBUStatus from "../../../../models/SBU_Status";
const sbuStatus = new SBUStatus();
// import env from "../../../../environment";
import jsPDF from 'jspdf' 
import 'jspdf-autotable';
import CustomJs from './Custom'
const customJs = new CustomJs()

export default {
  components: {
    Heading,
    PaginationSection,
  },
  data() {
    return {
      routeName: "Strategic Business Unit",
      parentPath: "Settings & Management",
      currentRoute: this.$route.name,
      brdcm: [],
      pathName: null,
      pageDataStart: 1,
      pageDataEnd: 12,
      totalPagesData: 1003,
      sub_data_table_headers: [
        "Name",
        "Id Number",
        "Sister COncern",
        "Active User",
        "Status",
        "",
      ],
      sub_data: [],
      switch1: true,
      defaultSBUtable: true,
    };
  },
  created() {
    this.$emit('routeName', this.$route.name);
    // console.log(this.$route.name);
    // this.pathName = brd.createBreadcrumbBita(this.parentPath, this.$route.name);
    this.createBreadcrumbData();
    service.getSBUData().then((res) => {
      this.sub_data = res.data;
    });
    console.log(sbuStatus.Active);
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "Settings & Management" }, { name: "SBU" }];
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
    sisterConcernClick(id) {
      // console.log(id);
      // console.log(this.sub_data[id]);
      this.pathName += " > Sister Concern";
      this.$router.replace(
        "/adm/sbu/sbu-sister-concern:" + id
      );
    },
    onPrintClick() {
      // this.$htmlToPaper("cont", env.printOption, () => {
      //   console.warn("done");
      // });
      customJs.test(this.sub_data)
    },
    onExcelClick() {
      // console.log("excel");
      /*const doc = new jsPDF();
      // const contentHtml = this.$refs.content.innerHTML;
      const contentHtml = document.getElementById('cont');
      doc.fromHTML(contentHtml, 15, 15, {
        width: 170,
      });
      doc.save("sample.pdf");*/
      // var source =  this.$refs["cont"];
      // console.log(this.sub_data)
            let rows = [];
            let columnHeader = ['NAME', 'ID NUMBER', 'SISTER CONCERN', 'ACTIVE USER', 'STATUS'];
            let pdfName = 'Schedule';
            this.sub_data.forEach(element => {
                var temp = [
                    element.name || '',
                    element.id_number || '',
                    element.sister_concern || '',
                    element.active_user || '',
                    element.status || '',
                ];
                rows.push(temp);
            });
            // var doc = new jsPDF();
            var doc = new jsPDF('p', 'pt');
            // doc.autoTable(columnHeader, rows, { startY: 10 });
            doc.autoTable(columnHeader, rows);
            doc.save(pdfName + '.pdf');
            // doc.autoPrint(columnHeader, rows);
    },
  },
};
</script>

<style scoped>
/* SBU Data - start */
#sbu .sbu-data-table {
  margin-top: 30px;
  display: block;
  border-top: 1px solid #e6e6e6;
}
#sbu tr {
  width: 100%;
  display: block;
  border: none;
    padding: 0 10px;
}
#sbu tr:first-child {
  border-bottom: 1px solid #999999;
  text-transform: uppercase;
  color: #026cd1;
  margin-bottom: 10px;
}
#sbu tr th,
#sbu tr td {
  width: 15%;
  max-width: 200px;
  font-size: 14px;
  display: inline-block;
  font-weight: 300;
  padding: 8px 6px;
}
#sbu tr th {
  font-weight: 500;
}
#sbu tr th:nth-child(3),
#sbu tr td:nth-child(3),
#sbu tr th:nth-child(4),
#sbu tr td:nth-child(4) {
  text-align: center;
}
#sbu tr td:nth-child(3) span {
  cursor: pointer;
}
#sbu tr th:last-child,
#sbu tr td:last-child {
  width: 400px;
  max-width: inherit;
  text-align: center;
}
#sbu .sbu-data-tr:hover {
  background: #def0ff;
  color: #026cd1;
}
#sbu .fa-square {
  margin-right: 12px;
}
#sbu .active-status {
  color: #28a411;
}
#sbu .pending-status {
  color: #fcc428;
}
#sbu .closed-status {
  color: #df2a43;
}
#sbu .blocked-status {
  color: #741cd9;
}
#sbu .label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: #394a56;
  position: relative;
}
#sbu .label-text {
  margin-left: 16px;
}
#sbu .toggle {
  isolation: isolate;
  position: relative;
  width: 30px;
  height: 16px;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid #026cd1;
}
#sbu .toggle-state {
  display: none;
}
#sbu .indicator {
  height: 100%;
  width: 200%;
  background: gray;
  border-radius: 15px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
}
#sbu .toggle-state:checked ~ .indicator {
  transform: translate3d(25%, 0, 0);
}
#sbu .edit-btn-sec {
  display: inline-block;
  padding: 0 20px;
  position: relative;
}
#sbu .edit-btn-sec .edit-btn {
  cursor: pointer;
}
#sbu .del-btn-sec {
  display: inline-block;
  position: relative;
}
#sbu .del-btn-sec .del-btn {
  cursor: pointer;
}
#sbu .label .toggle-btn-tooltip-txt,
#sbu .edit-btn-sec .edit-btn-tooltip-txt,
#sbu .del-btn-sec .del-btn-tooltip-txt {
  visibility: hidden;
  width: auto;
  background-color: gray;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 2px 6px;
  position: absolute;
  top: -20px;
  z-index: 1;
  font-size: 10px;
}
#sbu .label .toggle-btn-tooltip-txt {
  left: -24px;
  width: 70px;
}
#sbu .edit-btn-sec .edit-btn-tooltip-txt {
  left: 14px;
}
#sbu .del-btn-sec .del-btn-tooltip-txt {
  left: -14px;
}
#sbu .label:hover .toggle-btn-tooltip-txt,
#sbu .edit-btn-sec:hover .edit-btn-tooltip-txt,
#sbu .del-btn-sec:hover .del-btn-tooltip-txt {
  visibility: visible;
}
/* SBU Data - start */

/* Media query */
@media only screen and (max-width: 1050px) {
  #sbu .searchbar-section {
    width: 65%;
  }
  #sbu .optionbar-section {
    width: 35%;
    vertical-align: text-bottom;
  }
  #sbu .optionbar-inner {
    padding: 0 8px;
  }
  #sbu .optionbar-inner img {
    padding: 0 4px;
    width: 34px;
    height: 14px;
  }
  #sbu tr th:last-child,
  #sbu tr td:last-child {
    max-width: max-content;
  }
}
@media only screen and (max-width: 900px) {
  #sbu .edit-btn-sec {
    padding: 0 10px;
  }
}
@media only screen and (max-width: 1500px) {
  #sbu tr th:last-child,
  #sbu tr td:last-child {
    width: 15%;
  }
}
</style>