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

    <div class="print-section row">
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr015_clickHandler">SDR_015</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr016_clickHandler">SDR_016</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr017_clickHandler">SDR_017</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr018_clickHandler">SDR_018</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr023_clickHandler">SDR_023</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr024_clickHandler">SDR_024</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr025_clickHandler">SDR_025</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr027_clickHandler">SDR_027</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr028_clickHandler">SDR_028</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr029_clickHandler">SDR_029</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr030_clickHandler">SDR_030</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr031_clickHandler">SDR_031</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr032_clickHandler">SDR_032</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr033_clickHandler">SDR_033</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr034_clickHandler">SDR_034</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr035_clickHandler">SDR_035</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr036_clickHandler">SDR_036</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr037_clickHandler">SDR_037</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr038_clickHandler">SDR_038</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr039_clickHandler">SDR_039</span></div>
      <div class="col-lg-1 col-md-2 col-sm-3"><span @click="sdr040_clickHandler">SDR_040</span></div>
    </div>

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
              src="../../../assets/icons/edit.svg"
              alt="edit"
            />
            <span class="edit-btn-tooltip-txt">Edit</span>
          </div>
          <div class="del-btn-sec">
            <img
              class="del-btn"
              src="../../../assets/icons/delete.svg"
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
                  src="../../../assets/icons/edit.svg"
                  alt="edit"
                />
                <span class="edit-btn-tooltip-txt">Edit</span>
              </div>
              <div class="del-btn-sec">
                <img
                  class="del-btn"
                  src="../../../assets/icons/delete.svg"
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
import Heading from "../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
import PaginationSection from "../../../components/private_view_components/ADM/SBU/PaginationSidebarSection";
import ERPSidebarService from "../../../service/ERPSidebarService";
const service = new ERPSidebarService();
import SBUStatus from "../../../models/SBU_Status";
const sbuStatus = new SBUStatus();
import jsPDF from 'jspdf' 
import 'jspdf-autotable';

import CustomJs from './Custom'
const customJs = new CustomJs()

import PDF_Demo from './PDF_Demo'
const pdfDemo = new PDF_Demo()

// Import From Print_Func
import DemoPrintData from './DemoPrintData'
const demoPrintData = new DemoPrintData()

import SDR_015 from '../../../functions/Print_Func/SDR_015'
const sdr_015 = new SDR_015()

import SDR_016 from '../../../functions/Print_Func/SDR_016'
const sdr_016 = new SDR_016()

import SDR_017 from '../../../functions/Print_Func/SDR_017'
const sdr_017 = new SDR_017()

import SDR_018 from '../../../functions/Print_Func/SDR_018'
const sdr_018 = new SDR_018()

import SDR_023 from '../../../functions/Print_Func/SDR_023'
const sdr_023 = new SDR_023()

import SDR_024 from '../../../functions/Print_Func/SDR_024'
const sdr_024 = new SDR_024()

import SDR_025 from '../../../functions/Print_Func/SDR_025'
const sdr_025 = new SDR_025()
// Import From Print_Func

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
    this.createBreadcrumbData();
    service.getSBUData().then((res) => {
      this.sub_data = res.data;
    });
    console.log(sbuStatus.Active);
  },
  methods: {

    // --------------------------------------------------------------
    // Print Functions
    sdr015_clickHandler() {
      sdr_015.print_sdr_015(demoPrintData.print_sdr_015_data())
    },
    sdr016_clickHandler() {
      sdr_016.print_sdr_016(demoPrintData.print_sdr_015_data())
    },
    sdr017_clickHandler() {
      sdr_017.print_sdr_017(demoPrintData.print_sdr_017_data())
    },
    sdr018_clickHandler() {
      sdr_018.print_sdr_018(demoPrintData.print_sdr_018_data())
    },
    sdr023_clickHandler() {
      sdr_023.print_sdr_023(demoPrintData.print_sdr_023_data())
    },
    sdr024_clickHandler() {
      sdr_024.print_sdr_024(demoPrintData.print_sdr_024_data())
    },
    sdr025_clickHandler() {
      sdr_025.print_sdr_025(demoPrintData.print_sdr_025_data())
    },
    sdr027_clickHandler() {},
    sdr028_clickHandler() {},
    sdr029_clickHandler() {},
    sdr030_clickHandler() {},
    sdr031_clickHandler() {},
    sdr032_clickHandler() {},
    sdr033_clickHandler() {},
    sdr034_clickHandler() {},
    sdr035_clickHandler() {},
    sdr036_clickHandler() {},
    sdr037_clickHandler() {},
    sdr038_clickHandler() {},
    sdr039_clickHandler() {},
    sdr040_clickHandler() {},


    // --------------------------------------------------------------
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
    //   customJs.print_1(this.sub_data)
    //   customJs.print_2('sbu-data-table')
      // customJs.print_3(this.sub_data)
      customJs.print_3(demoPrintData.print_sdr_015_data())
    },
    onExcelClick() {
      pdfDemo.generate_pdf()
            
      var doc = new jsPDF('p', 'pt', [612, 792]);
      doc.setFont("arial", "bold");
      doc.setFontSize(14);
            /*console.log(this.sub_data)

            let pdfName = 'Schedule';
            const date = new Date();
            const filename =
              "timechart_" +
              date.getFullYear() +
              ("0" + (date.getMonth() + 1)).slice(-2) +
              ("0" + date.getDate()).slice(-2) +
              ("0" + date.getHours()).slice(-2) +
              ("0" + date.getMinutes()).slice(-2) +
              ("0" + date.getSeconds()).slice(-2) +
              ".pdf";
              
            let rows = [];
            let columnHeader = ['NAME', 'ID NUMBER', 'SISTER CONCERN', 'ACTIVE USER', 'STATUS'];
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
            
            var doc = new jsPDF('p', 'pt', [612, 792]);

            doc.setFont("arial", "bold");
            doc.setFontSize(14);

            doc.setFontSize(10);
            doc.text(20, 20, 'Hello world!');
            doc.text(300, 20, 'Hello world!');
            doc.text(300, 20, 'Hello world!');
            doc.text("Test", 105, 50, "left")
            doc.text("Test", 105, 60, "center")
            doc.text("Test", 105, 70, "right")

            // Image
            let image = new Image()
            image.src = 'https://pbs.twimg.com/profile_images/1343584679664873479/Xos3xQfk.jpg'
            doc.addImage(image, 'png', 105, 80, 40, 40)

            doc.addPage();

            doc.text(("doc weidth: " + doc.internal.pageSize.getWidth()), 105, 80, "left")
            doc.text(("doc height: " + doc.internal.pageSize.getHeight()), 105, 90, "left")
            let my_email = "frsummit1@gmail.com"
            let ww = doc.getTextWidth(my_email)
            doc.text(("email weidth: " + ww), 105, 100, "left")
            doc.text((my_email), ( doc.internal.pageSize.getWidth() - ww ), 110, "left")

            doc.addPage();
            
            doc.text("Left Margin", ( 54 ), 120, "left")                                        // 54 pt = 72 px = 0.75 inch
            doc.text("Right Margin", ( doc.internal.pageSize.getWidth() - 54 ), 120, "right")   // 54 pt = 72 px = 0.75 inch

            doc.text("Top Margin", ( doc.internal.pageSize.getWidth() / 2 ), 72, "center")      // 72 pt = 96 px = 0.75 inch
            doc.text("Bottom Margin", ( doc.internal.pageSize.getWidth() / 2 ), ( doc.internal.pageSize.getHeight() - 54 ), "center")  // 54 pt = 72 px = 0.75 inch

            doc.addPage();

            doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
            doc.addPage();
            doc.text(20, 20, 'Do you like that?');
            // doc.autoTable(columnHeader, rows, { startY: 10 });
            doc.autoTable(columnHeader, rows);
            doc.addPage();
            doc.text(20, 20, 'Another table');
            doc.text(20, 30, 'Another table');
            doc.text(20, 40, 'Another table');
            doc.text(20, 50, 'Another table');
            doc.text(20, 60, 'Another table');
            doc.autoTable(columnHeader, rows, {
                margin: { top: 70, left: 10, right: 10, bottom: 0 },
                drawHeaderCell: (cell, data) => {
                  console.log(cell + '    ' + data)
                    if (cell.raw === 'NAME') {//paint.Name header red
                        cell.styles.fontSize= 15;
                       cell.styles.textColor = [255,0,0];
                    } else {
                        cell.styles.textColor = 255;
                        cell.styles.fontSize = 10;

                    }
                },
                createdCell: (cell, data) => {
                  console.log(cell + '    ' + data)
                    if (cell.raw === 'SGD Pharma') {
                       cell.styles.fontSize= 15;
                       cell.styles.textColor = [255,0,0];
                    } 
                }
            });
            
            doc.addPage();

            doc.text(20, 20, 'Styling Table');
            doc.autoTable(columnHeader, rows, {
                tableLineColor: [189, 195, 199],
                tableLineWidth: 0.75,
                styles: {
                    // font: 'rotobo',
                    lineColor: [44, 62, 80],
                    lineWidth: 0.55
                },

                // headerStyles: {
                //     fillColor: [0, 0, 0],
                //     fontSize: 11
                // },

                headerStyles: {
                    fillColor: [255, 255, 255],
                    fontSize: 11,
                    textColor: 50
                },
                bodyStyles: {
                    fillColor: [216, 216, 216],
                    textColor: 50
                },
                alternateRowStyles: {
                    fillColor: [250, 250, 250]
                },
                startY: 100,
                drawRow: (row, data) => {
                    // Colspan
                    doc.setFontStyle('bold');
                    doc.setFontSize(10);
                    // if ($(row.raw[0]).hasClass("innerHeader")) {
                    //     doc.setTextColor(200, 0, 0);
                    //     doc.setFillColor(110,214,84);
                    //     doc.rect(data.settings.margin.left, row.y, data.table.width, 20, 'F');
                    //     doc.autoTableText("", data.settings.margin.left + data.table.width / 2, row.y + row.height / 2, {
                    //         halign: 'center',
                    //         valign: 'middle'
                    //     });
                    //     data.cursor.y += 20; 
                    // };

                    if (row.index % 5 === 0) {
                        var posY = row.y + row.height * 6 + data.settings.margin.bottom;
                        if (posY > doc.internal.pageSize.height) {
                            data.addPage();
                        }
                    }
                },
                drawCell: (cell, data) => {
                    // Rowspan
                    console.log(cell);
                    console.log(data);
                    // if ($(cell.raw).hasClass("innerHeader")) {
                    // doc.setTextColor(200, 0, 0);
                    //         doc.autoTableText(cell.text + '', data.settings.margin.left + data.table.width / 2, data.row.y + data.row.height / 2, {
                    //         halign: 'center',
                    //         valign: 'middle'
                    //     });
                        
                    //     return false;
                    // }
                }
            });


            doc.addPage();

            doc.autoTable(columnHeader, rows);
            doc.autoTable(columnHeader, rows);
            doc.autoTable(columnHeader, rows);
            doc.autoTable(columnHeader, rows);
            doc.autoTable(columnHeader, rows);
            doc.autoTable(columnHeader, rows);
            doc.autoTable(columnHeader, rows);
            doc.autoTable(columnHeader, rows);
            doc.autoTable(columnHeader, rows);
            doc.autoTable(columnHeader, rows);
            doc.autoTable(columnHeader, rows);

            doc.addPage();

            var columns = ['ID','Name','Address','Age'];
            var rowss = [
                        [1,'John','Vilnius',22],
                        [2,'Jack','Riga',25]
                      ]
            // var doc = new jsPDF('p', 'pt');
            doc.setFontSize(20);
            doc.text(30, 30, 'Table'); 
            doc.autoTable(columns, rowss, {
                margin: { top: 50, left: 20, right: 20, bottom: 0 },
                drawHeaderCell: function (cell, data) {
                  console.log(cell + '    ' + data)
                    if (cell.raw === 'ID') {//paint.Name header red
                        cell.styles.fontSize= 15;
                       cell.styles.textColor = '#272727';
                    } else {
                        cell.styles.textColor = '#27dede';
                        cell.styles.fontSize = 10;
                    }
                },
                createdCell: function (cell, data) {
                  console.log(cell + '    ' + data)
                  if (cell.raw === 'Jack') {
                     cell.styles.fontSize= 15;
                     cell.styles.textColor = '#blue';
                  } 
                },
            });

            doc.save(pdfName + '_' + filename + '.pdf');*/
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

/* Print */
.print-section {
  margin: 20px;
}
.print-section .col-lg-1.col-md-2.col-sm-3 {
  margin: 8px;
}
.print-section span {
  background: #026CD1;
  color: #FFFFFF; 
  cursor: pointer; 
  border: 1px solid #026CD1; 
  font-size: 14px;
  font-weight: 500;
  padding: 4px 14px;
  border-radius: 4px;
}
.print-section span:hover {
  background: #004b92;
}

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