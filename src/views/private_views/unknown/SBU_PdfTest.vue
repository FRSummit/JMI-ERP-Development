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
      // // console.log("excel");
      // /*const doc = new jsPDF();
      // // const contentHtml = this.$refs.content.innerHTML;
      // const contentHtml = document.getElementById('cont');
      // doc.fromHTML(contentHtml, 15, 15, {
      //  // width: 170,
      // //});
      // // doc.save("sample.pdf");*/
      // // var source =  this.$refs["cont"];
      // console.log(this.sub_data)
      //       let rows = [];
      //       let columnHeader = ['NAME', 'ID NUMBER', 'SISTER CONCERN', 'ACTIVE USER', 'STATUS'];
      //       let pdfName = 'Schedule';
      //       this.sub_data.forEach(element => {
      //           var temp = [
      //               element.name || '',
      //               element.id_number || '',
      //               element.sister_concern || '',
      //               element.active_user || '',
      //               element.status || '',
      //           ];
      //           rows.push(temp);
      //       });
      //       // var doc = new jsPDF();
      //       // var doc = new jsPDF('p', 'pt');
      //       // var doc = new jsPDF('p', 'pt', 'a4', true);
      //       var doc = new jsPDF('p', 'pt', 'letter');

      //       // doc.text("Hello World", 10, 10);

      //       // doc.setFont("helvetica");
      //       // doc.setFontType("bold");

      //       // var img = new Image();
      //       // img.src = '../../../assets/images/copy.png'
      //       // doc.addImage(img, "JPEG", 20, 20);

      //       const date = new Date();
      //       const filename =
      //         "timechart_" +
      //         date.getFullYear() +
      //         ("0" + (date.getMonth() + 1)).slice(-2) +
      //         ("0" + date.getDate()).slice(-2) +
      //         ("0" + date.getHours()).slice(-2) +
      //         ("0" + date.getMinutes()).slice(-2) +
      //         ("0" + date.getSeconds()).slice(-2) +
      //         ".pdf";

      //       /*// var specialElementHandlers = {
      //       //     '#bypassme': function (element, renderer) {
      //       //         return true
      //       //     }
      //       // };
      //       var margins = {
      //           top: 80,
      //           bottom: 60,
      //           left: 40,
      //           width: 522
      //       };
      //       // all coords and widths are in jsPDF instance's declared units
      //       // 'inches' in this case

      //       doc.fromHTML(
      //       // source, // HTML string or DOM elem ref.
      //       margins.left, // x coord
      //       margins.top, {// y coord
      //           'width': margins.width, // max width of content on PDF
      //           // 'elementHandlers': specialElementHandlers
      //       })*/

      //       doc.setFont("arial", "bold");
      //       doc.setFontSize(14);

      //       doc.setFontSize(10);
      //       doc.text(20, 20, 'Hello world!');
      //       doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
      //       doc.addPage();
      //       doc.text(20, 20, 'Do you like that?');
      //       // doc.autoTable(columnHeader, rows, { startY: 10 });
      //       doc.autoTable(columnHeader, rows);
      //       doc.addPage();
      //       doc.text(20, 20, 'Another table');
      //       doc.autoTable(columnHeader, rows);
      //       doc.autoTable(columnHeader, rows);
      //       doc.autoTable(columnHeader, rows);
      //       doc.autoTable(columnHeader, rows);
      //       doc.autoTable(columnHeader, rows);
      //       doc.autoTable(columnHeader, rows);
      //       doc.autoTable(columnHeader, rows);
      //       doc.autoTable(columnHeader, rows);
      //       doc.autoTable(columnHeader, rows);
      //       doc.save(pdfName + '_' + filename + '.pdf');
      //       // doc.autoPrint(columnHeader, rows);


      ///////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////////
             
               var doc = new jsPDF('p', 'pt', 'letter');
               doc.lineHeightProportion =2;
              //  let img = new Image();
              //  img.src = '../../../assets/images/LOGO SDR-15.png'
              //  doc.addImage(img, 'JPEG',  105, 80, 40, 40);


                // doc.setFont("arial", "bold");
                doc.setFont("Roboto", "bold");
                // doc.setFontType("bold");
                doc.setFontSize(14);


                // LEFT PART
                doc.setFontSize(10);
                // Customer Code
                doc.text(20, 100, 'Customer Code');
                doc.text(100, 100, ': DHK34105');
                // Customer Name
                doc.text(20, 110, 'Customer Name');
                doc.text(100, 110, ': LABAID CARDIAC HOSPITAL');
                // Address
                doc.text(20, 120, 'Address');
                doc.text(100, 120, ': HOUSE-01, RAOD-04, DHANMONDI');
                // MIO Name
                doc.text(20, 130, 'MIO Name');
                doc.text(100, 130, ': SHAHIDUL ISLAM	');
                // S.R Name
                doc.text(20, 140, 'S.R Name');
                doc.text(100, 140, ': RAMJAN ALI	');

                // RIGHT PART
                // Invoice Name
                let paper_weidth = doc.internal.pageSize.getWidth()
                doc.text( (paper_weidth - 200), 100, 'Invoice No');
                doc.text( ((paper_weidth - 200) + 80), 100, ': DHK081920086');
                 // Invoice Date
                //let paper_weidth = doc.internal.pageSize.getWidth()
                 doc.text( (paper_weidth - 200), 110, 'Invoice Date');
                 doc.text( ((paper_weidth - 200) + 80), 110, ': 30/09.2019');
                // Depot Name
                // let paper_weidth = doc.internal.pageSize.getWidth()
                 doc.text( (paper_weidth - 200), 120, 'Depot');
                 doc.text( ((paper_weidth - 200) + 80), 120, ': Dhaka Depot');
                // T.Code
                // let paper_weidth = doc.internal.pageSize.getWidth()
                 doc.text( (paper_weidth - 200), 130, 'T.Code');
                 doc.text( ((paper_weidth - 200) + 80), 130, ': DHK341');
                // Date
                // let paper_weidth = doc.internal.pageSize.getWidth()
                 doc.text( (paper_weidth - 200), 140, 'Date');
                 doc.text( ((paper_weidth - 200) + 80), 140, ': 29.09.2019');
                 //order no
                 doc.text( (paper_weidth - 200), 150, 'Order No');
                 doc.text( ((paper_weidth - 200) + 80), 150, ': 009');
                 
                 //In word
                 doc.text( (paper_weidth - 590), 500, 'In Word:');
                 doc.text( ((paper_weidth -640) + 80), 500,'One lac Taka only');

                  //Sub Total
                 doc.text( (paper_weidth - 250), 500, 'Sub Total : ');
                 doc.text( ((paper_weidth -250) + 80), 500,'16,806.99      96587.77');


                 //Gross TP
                 doc.text( (paper_weidth - 200), 600, 'Gross TP :');
                 doc.text( ((paper_weidth -200) + 80), 600,'96587.77');
                // less discount
                doc.text( (paper_weidth - 270), 620, 'Less Discount 5% on Top :');
                 doc.text( ((paper_weidth -200) + 80), 620,'4897.77');
                  // Add VAT on TP
                doc.text( (paper_weidth - 230), 640, 'Add VAT on TP :');
                 doc.text( ((paper_weidth -200) + 80), 640,'4897.77');
                 // less discount
                doc.text( (paper_weidth - 255), 660, 'Rounding Adjustment :');
                 doc.text( ((paper_weidth -200) + 80), 660,'4897.77');
                 // less discount
                doc.text( (paper_weidth - 210), 680, 'Net payable :');
                 doc.text( ((paper_weidth -200) + 80), 680,'4897.77');

                  // Signature
                 doc.text( (paper_weidth - 210), 750, 'For NIPRO JMI Pharma Ltd.');


                // doc.text("", 105, 50, "left") 
                // doc.text("", 105, 60, "center")
                // doc.text("", 105, 70, "right")

                var columns = ['SN', 'Product Name', 'Pack Size', 'Batch No', 'MFG Date','EXP Date','Unit Price TP/SP','Unit VAT','Unit Price with VAT','Qty','Bouns','Total VAT','Total TP/SP'];
                var rowss = [
                            [1,'John','Vilnius', 22, 45, 79, 78, 45, 89, 44, 33, 55, 100],
                            [2,'Jack','Riga', 25, 74, 98, 74, 95, 98, 34, 44, 56, 99],
                            [2,'Jack','Riga', 25, 74, 98, 74, 95, 98, 34, 44, 56, 99],
                            [2,'Jack','Riga', 25, 74, 98, 74, 95, 98, 34, 44, 56, 99],
                            [2,'Jack','Riga', 25, 74, 98, 74, 95, 98, 34, 44, 56, 99],
                            [2,'Jack','Riga', 25, 74, 98, 74, 95, 98, 34, 44, 56, 99]
                          ]
                // var doc = new jsPDF('p', 'pt');
                doc.setFontSize(20);
                doc.text(30, 30, ''); 
                 doc.autoTable(columns, rowss, {
                     margin: { top: 160, left: 20, right: 20, bottom: 0 },
                     drawHeaderCell: function (cell, data) {
                       console.log(cell + '    ' + data)
                         if (cell.raw === 'ID') {//paint.Name header red
                             cell.styles.fontSize= 15;
                           cell.styles.textColor = '#ffff';
                         } else {
                           cell.styles.textColor = '#ffff';
                            cell.styles.fontSize = 10;
                         }
                     },
                     createdCell: function (cell, data) {
                       console.log(cell + '    ' + data)
                       if (cell.raw === 'Jack') {
                         cell.styles.fontSize= 15;
                         cell.styles.textColor = '#black';
                         cell.styles.width='20';
                       } 
                     },
                     });
                    
                      //columnStyles: {
                      //   0: {cellWidth: 10},
                      // 1: {cellWidth: 20},
                      //   2: {cellWidth: 10},
                      //   3: {cellWidth: 10},
                      //   4: {cellWidth: 10},
                      //   5: {cellWidth: 10},
                      //   6: {cellWidth: 10},
                      //   7: {cellWidth: 10},
                      //   8: {cellWidth: 10},
                      //   9: {cellWidth: 10},
                      //   10: {cellWidth: 10},
                      // }
                   
                //  doc.autoTable({
                //   html: '#table',
                //    columnStyles: {
                //     0: {cellWidth: 100},
                //     1: {cellWidth: 80},
                //     2: {cellWidth: 80},
                //     //etc
                //    }
                // });

                // doc.autoTable(columnHeader, rows, {
                //         margin: { top: 70, left: 10, right: 10, bottom: 0 },
                //         drawHeaderCell: (cell, data) => {
                //           console.log(cell + '    ' + data)
                //             if (cell.raw === 'NAME') {//paint.Name header red
                //                 cell.styles.fontSize= 15;
                //               cell.styles.textColor = [255,0,0];
                //             } else {
                //                 cell.styles.textColor = 255;
                //                 cell.styles.fontSize = 10;

                //             }
                //         },

                //         createdCell: (cell, data) => {
                //         console.log(cell + '    ' + data)
                //           if (cell.raw === 'SGD Pharma') {
                //             cell.styles.fontSize= 15;
                //             cell.styles.textColor = [255,0,0];
                //           } 
                //         }

                //      });

                    // doc.autoTable(columnHeader, rows);
                    // doc.autoTable(columnHeader, rows);
                    //  doc.autoTable(columnHeader, rows);
                    //  doc.autoTable(columnHeader, rows);
                    //  doc.autoTable(columnHeader, rows);
                    //  doc.autoTable(columnHeader, rows);
                    //  doc.autoTable(columnHeader, rows);
                    //  doc.autoTable(columnHeader, rows);
                    //  doc.autoTable(columnHeader, rows);
                    //  doc.autoTable(columnHeader, rows);
                    //  doc.autoTable(columnHeader, rows);
                    //  doc.autoTable(columnHeader, rows);
                    //  doc.autoTable(columnHeader, rows);

                //     console.log(this.sub_data)
                //       let rows = [1,'Adarbi_40_Tablet','20_s',111119,179.91,31.30,211.21,2,0,62.61,359.82];
                //       let columnHeader = ['SN', 'Product Name', 'Pack Size', 'Batch No', 'MFG Date','EXP Date','Unit Price TP/SP','Unit VAT','Unit Price with VAT','Qty','Bouns','Total VAT','Total TP/SP'];
                //       let pdfName = 'Schedule';
                //       this.sub_data.forEach(element => {
                //           var temp = [
                //               element.SN || '',
                //               element.Product_Name || '',
                //               element.Pack_Size || '',
                //               element.Batch_No || '',
                //               element.MFG_Date || '',
                //               element.EXP_Date || '',
                //               element.Unit_Price_TP_SP || '',
                //               element.Unit_VAT || '',
                //               element.Unit_Price_with_VAT || '',
                //               element.Qty || '',
                //               element.Bouns || '',
                //               element.Total_VAT || '',
                //               element.Total_TP_SP || '',

                //           ];
                //           rows.push(temp);
                //       });

                //  doc.addPage();

                // doc.text(("doc weidth: " + doc.internal.pageSize.getWidth()), 105, 80, "left")
                // doc.text(("doc height: " + doc.internal.pageSize.getHeight()), 105, 90, "left")
                // let my_email = "frsummit1@gmail.com"
                // let ww = doc.getTextWidth(my_email)
                // doc.text(("email weidth: " + ww), 105, 100, "left")
                // doc.text((my_email), ( doc.internal.pageSize.getWidth() - ww ), 110, "left")

                // doc.addPage();
                
                // doc.text("Left Margin", ( 54 ), 120, "left")                                        
                // doc.text("Right Margin", ( doc.internal.pageSize.getWidth() - 54 ), 120, "right")   

                // doc.text("Top Margin", ( doc.internal.pageSize.getWidth() / 2 ), 72, "center")     
                // doc.text("Bottom Margin", ( doc.internal.pageSize.getWidth() / 2 ), ( doc.internal.pageSize.getHeight() - 54 ), "center")


                // doc.addPage();

                // doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
                // doc.addPage();
                // doc.text(20, 20, 'Do you like that?');

                //  doc.autoTable(columnHeader, rows);


                //     doc.addPage();
                //     doc.text(20, 20, 'Another table');
                //     doc.text(20, 30, 'Another table');
                //     doc.text(20, 40, 'Another table');
                //     doc.text(20, 50, 'Another table');
                //     doc.text(20, 60, 'Another table');
                //     doc.autoTable(columnHeader, rows, {
                //         margin: { top: 70, left: 10, right: 10, bottom: 0 },
                //         drawHeaderCell: (cell, data) => {
                //           console.log(cell + '    ' + data)
                //             if (cell.raw === 'NAME') {//paint.Name header red
                //                 cell.styles.fontSize= 15;
                //               cell.styles.textColor = [255,0,0];
                //             } else {
                //                 cell.styles.textColor = 255;
                //                 cell.styles.fontSize = 10;

                //             }
                //         },

                //         createdCell: (cell, data) => {
                //         console.log(cell + '    ' + data)
                //           if (cell.raw === 'SGD Pharma') {
                //             cell.styles.fontSize= 15;
                //             cell.styles.textColor = [255,0,0];
                //           } 
                //         }

                //      });  
                     

                    //  console.log(this.sub_data)
                    //   let rows = [];
                    //   let columnHeader = ['NAME', 'ID NUMBER', 'SISTER CONCERN', 'ACTIVE USER', 'STATUS'];
                      let pdfName = 'Schedule';
                    //   this.sub_data.forEach(element => {
                    //       var temp = [
                    //           element.name || '',
                    //           element.id_number || '',
                    //           element.sister_concern || '',
                    //           element.active_user || '',
                    //           element.status || '',
                    //       ];
                    //       rows.push(temp);
                    //   });
                     
                      // doc.addPage();

                      // doc.autoTable(columnHeader, rows);
                      // doc.autoTable(columnHeader, rows);
                      // doc.autoTable(columnHeader, rows);
                      // doc.autoTable(columnHeader, rows);
                      // doc.autoTable(columnHeader, rows);
                      // doc.autoTable(columnHeader, rows);
                      // doc.autoTable(columnHeader, rows);
                      // doc.autoTable(columnHeader, rows);
                      // doc.autoTable(columnHeader, rows);
                      // doc.autoTable(columnHeader, rows);
                      // doc.autoTable(columnHeader, rows);

                      //doc.addPage();

                      // var columns = ['SN',' Product Name','Pack Size','Batch No','Exp No','Unit Price TP/SP','Qty'];
                      // var rowss = [
                      //             [1,'John','Vilnius',22],
                      //             [2,'Jack','Riga',25]
                      //           ]
                      // // var doc = new jsPDF('p', 'pt');
                      // doc.setFontSize(20);
                      // doc.text(30, 30, 'Table'); 
                      // doc.autoTable(columns, rowss, {
                      //     margin: { top: 50, left: 20, right: 20, bottom: 0 },
                      //     drawHeaderCell: function (cell, data) {
                      //       console.log(cell + '    ' + data)
                      //         if (cell.raw === 'ID') {//paint.Name header red
                      //             cell.styles.fontSize= 15;
                      //           cell.styles.textColor = '#272727';
                      //         } else {
                      //             cell.styles.textColor = '#27dede';
                      //             cell.styles.fontSize = 10;
                      //         }
                      //     },
                      //     createdCell: function (cell, data) {
                      //       console.log(cell + '    ' + data)
                      //       if (cell.raw === 'Jack') {
                      //         cell.styles.fontSize= 15;
                      //         cell.styles.textColor = '#blue';
                      //       } 
                      //     },
                      // });

                      doc.save(pdfName + '_' + filename + '.pdf');

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












      ///////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////////

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